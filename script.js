/* =====================================================
   SCRIPT TÌM CÂU HỎI / ĐÁP ÁN
   Hai kiểu tìm (nút "Tìm câu hỏi" / "Tìm đáp án"):
   - Tìm câu hỏi : dò trong nội dung câu hỏi (hoặc ID nếu gõ số)
   - Tìm đáp án  : dò trong TẤT CẢ các đáp án (cả đáp án sai),
                   hiện đáp án đang tìm + đáp án đúng
   Hai cách khớp (nút "Từ đầu" / "Chứa chuỗi"):
   - Từ đầu      : chuỗi gõ phải nằm liền nhau ở ĐẦU câu / đầu đáp án
   - Chứa chuỗi  : chuỗi gõ nằm liền nhau ở bất kỳ đâu
   Câu không khớp vẫn hiện nhưng bị làm mờ và đẩy xuống dưới.
   Các câu giống nhau (dễ nhầm) có viền màu cam + nhắc khác ở đâu.
   ===================================================== */

const $ = (sel) => document.querySelector(sel);
const oTimKiem = $("#timkiem");
const oKetQua = $("#ketqua");
const oDem = $("#dem");
const oBoQuaDau = $("#boqua-dau");
const oHienDapAn = $("#hien-dapan");

let mucTim = "q";    // "q" = tìm câu hỏi | "a" = tìm đáp án
let cheDo = "start"; // "start" = từ đầu | "any" = chứa chuỗi
let phanLoc = 0;     // 0 = tất cả, 1/2/3 = phần tương ứng

/* ---------- Tiện ích chuỗi ---------- */

// Chuẩn hoá từng ký tự (1 ký tự vào -> 1 ký tự ra) để vị trí khớp với chuỗi gốc
function chuanHoa(s, boDau) {
  let r = s.normalize("NFC").toLowerCase();
  if (boDau) {
    r = r.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  }
  return r;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Viết chỉ số dưới cho công thức hoá học: C6H5NH2 -> C₆H₅NH₂
function chiSoDuoi(html) {
  return html.replace(/([A-Za-z\)\]])(\d+)/g, "$1<sub>$2</sub>");
}

// Tô sáng đoạn khớp [bd, bd+dai) trong chuỗi gốc
function toSang(goc, bd, dai) {
  goc = goc.normalize("NFC");
  if (bd == null || bd < 0 || !dai) return chiSoDuoi(escapeHtml(goc));
  const a = escapeHtml(goc.slice(0, bd));
  const b = escapeHtml(goc.slice(bd, bd + dai));
  const c = escapeHtml(goc.slice(bd + dai));
  return chiSoDuoi(a) + "<mark>" + b + "</mark>" + chiSoDuoi(c);
}

/* ---------- Dò khớp ---------- */

// Dò chuỗi gõ trong 1 đoạn văn bản
function khopChuoi(text, truyVan, boDau) {
  const t = chuanHoa(truyVan, boDau);
  if (!t) return { khop: true, bd: -1, dai: 0 };
  const q = chuanHoa(text, boDau);
  if (cheDo === "start") {
    return q.startsWith(t) ? { khop: true, bd: 0, dai: t.length } : { khop: false };
  }
  const i = q.indexOf(t);
  return i >= 0 ? { khop: true, bd: i, dai: t.length } : { khop: false };
}

function doKhop(item, truyVan, boDau) {
  if (!chuanHoa(truyVan, boDau)) return { khop: true, bd: -1, dai: 0 };

  /* ----- Tìm theo câu hỏi ----- */
  if (mucTim === "q") {
    const t = chuanHoa(truyVan, boDau);
    if (/^\d+$/.test(t) && item.id.startsWith(t)) return { khop: true, bd: -1, dai: 0 };
    return khopChuoi(item.q, truyVan, boDau);
  }

  /* ----- Tìm theo đáp án (gồm cả đáp án sai) ----- */
  if (item.part === 1) {
    const opts = [];
    Object.keys(item.options).forEach((k) => {
      const r = khopChuoi(item.options[k], truyVan, boDau);
      if (r.khop) opts.push({ k, bd: r.bd, dai: r.dai });
    });
    return opts.length ? { khop: true, opts } : { khop: false };
  }
  if (item.part === 2) {
    const ys = [];
    item.items.forEach((y, i) => {
      const r = khopChuoi(y.text, truyVan, boDau);
      if (r.khop) ys.push({ i, bd: r.bd, dai: r.dai });
    });
    return ys.length ? { khop: true, ys } : { khop: false };
  }
  const r = khopChuoi(item.answer, truyVan, boDau);
  return r.khop ? { khop: true, bd: r.bd, dai: r.dai } : { khop: false };
}

/* ---------- Dò các câu giống nhau (dễ nhầm) ---------- */

function vanBanSoSanh(item) {
  return item.part === 2 ? item.q + " " + item.items.map((y) => y.text).join(" ") : item.q;
}
function tachTu(s) {
  return s.normalize("NFC").split(/[\s,.;:?()]+/).filter(Boolean);
}
function dapAnNgan(item) {
  if (item.part === 1) return item.options[item.answer];
  if (item.part === 3) return item.answer;
  return "";
}

function tinhNham() {
  const map = {};
  const ds = NGAN_HANG;
  const lienKet = (a, b) => {
    const ta = tachTu(vanBanSoSanh(a)), tb = tachTu(vanBanSoSanh(b));
    const la = new Set(ta.map((x) => x.toLowerCase())), lb = new Set(tb.map((x) => x.toLowerCase()));
    const khacA = ta.filter((x) => !lb.has(x.toLowerCase()));
    const khacB = tb.filter((x) => !la.has(x.toLowerCase()));
    const uniq = (arr) => arr.filter((x, i) => arr.indexOf(x) === i).slice(0, 5);
    (map[a.id] = map[a.id] || {})[b.id] = { id: b.id, ans: dapAnNgan(b), khacA: uniq(khacA), khacB: uniq(khacB) };
  };

  for (let i = 0; i < ds.length; i++) {
    for (let j = i + 1; j < ds.length; j++) {
      const a = ds[i], b = ds[j];
      if (a.part !== b.part) continue;
      const ta = new Set(tachTu(vanBanSoSanh(a)).map((x) => x.toLowerCase()));
      const tb = new Set(tachTu(vanBanSoSanh(b)).map((x) => x.toLowerCase()));
      if (ta.size < 8 || tb.size < 8) continue;
      let giao = 0;
      ta.forEach((x) => { if (tb.has(x)) giao++; });
      const jac = giao / (ta.size + tb.size - giao);
      if (jac >= 0.55) { lienKet(a, b); lienKet(b, a); }
    }
  }
  // Các cặp tự chỉ định trong ngân hàng (nham: ["ID"])
  ds.forEach((a) => (a.nham || []).forEach((id) => {
    const b = ds.find((x) => x.id === id);
    if (b) { lienKet(a, b); lienKet(b, a); }
  }));

  ds.forEach((it) => { it.canhBao = Object.values(map[it.id] || {}); });
}

/* ---------- Dựng thẻ câu hỏi ---------- */
// Chỉ hiện: ID, câu hỏi, đáp án (không ghi số câu / A, B, C, D vì đề hay bị đảo)

function hopDapAn(nhan, htmlNoiDung, lop) {
  const d = document.createElement("p");
  d.className = "ngan" + (lop ? " " + lop : "");
  d.innerHTML = "<span>" + nhan + "</span><strong>" + htmlNoiDung + "</strong>";
  return d;
}

function dungThe(item, kq, mo) {
  const timDapAn = mucTim === "a";
  const the = document.createElement("article");
  const coNham = item.canhBao && item.canhBao.length;
  the.className = "the" + (mo ? " mo" : "") + (coNham ? " nham" : "");

  const dau = document.createElement("header");
  dau.className = "the-dau";
  dau.innerHTML = '<span class="ma">ID ' + item.id + "</span>";
  the.appendChild(dau);

  const cau = document.createElement("p");
  cau.className = "cau";
  cau.innerHTML = timDapAn ? toSang(item.q, -1, 0) : toSang(item.q, kq.bd, kq.dai);
  the.appendChild(cau);

  // Nhắc các câu giống nhau
  if (coNham) {
    const h = document.createElement("div");
    h.className = "nham-hop";
    h.innerHTML = "<b>Dễ nhầm</b>" + item.canhBao.map((c) => {
      const khac = c.khacA.length || c.khacB.length
        ? " · câu này có «" + escapeHtml(c.khacA.join(" ")) + "», câu kia có «" + escapeHtml(c.khacB.join(" ")) + "»"
        : "";
      const ans = c.ans ? " · đáp án câu kia: <strong>" + chiSoDuoi(escapeHtml(c.ans)) + "</strong>" : "";
      return "<div>ID " + c.id + khac + ans + "</div>";
    }).join("");
    the.appendChild(h);
  }

  if (!(oHienDapAn.checked || timDapAn)) return the;

  /* ----- Phần I ----- */
  if (item.part === 1) {
    const ds = kq.opts || [];
    // đáp án SAI mà người dùng đang tìm
    ds.filter((o) => o.k !== item.answer).forEach((o) => {
      the.appendChild(hopDapAn("Đáp án sai", toSang(item.options[o.k], o.bd, o.dai), "sai"));
    });
    const dung = ds.find((o) => o.k === item.answer);
    the.appendChild(hopDapAn(
      timDapAn ? "Đáp án đúng" : "Đáp án",
      dung ? toSang(item.options[item.answer], dung.bd, dung.dai) : toSang(item.options[item.answer], -1, 0)
    ));
  }

  /* ----- Phần II ----- */
  if (item.part === 2) {
    const ul = document.createElement("ul");
    ul.className = "luachon";
    const ys = kq.ys || [];
    item.items.forEach((y, i) => {
      const m = ys.find((x) => x.i === i);
      const li = document.createElement("li");
      if (timDapAn && ys.length) li.className = m ? "tim" : "nho";
      li.innerHTML =
        "<span>" + (m ? toSang(y.text, m.bd, m.dai) : chiSoDuoi(escapeHtml(y.text))) + "</span>" +
        '<i class="ds ' + (y.answer ? "d" : "s") + '">' + (y.answer ? "Đúng" : "Sai") + "</i>";
      ul.appendChild(li);
    });
    the.appendChild(ul);
  }

  /* ----- Phần III ----- */
  if (item.part === 3) {
    const bd = timDapAn ? kq.bd : -1, dai = timDapAn ? kq.dai : 0;
    const d = hopDapAn("Đáp án", toSang(item.answer, bd, dai));
    // Câu có thẻ </b> trong đáp án gốc: nhắc để nhập kèm cho khớp
    if (item.b) {
      d.innerHTML += '<em class="btag">có &lt;/b&gt; &rarr; nhập: &lt;/b&gt; ' + escapeHtml(item.answer) + "</em>";
    }
    the.appendChild(d);
  }

  return the;
}

/* ---------- Vẽ kết quả ---------- */

function veKetQua() {
  const truyVan = oTimKiem.value.trimStart();
  const boDau = oBoQuaDau.checked;
  const dsLoc = NGAN_HANG.filter((x) => phanLoc === 0 || x.part === phanLoc);

  const khop = [];
  const khongKhop = [];
  dsLoc.forEach((item) => {
    const kq = doKhop(item, truyVan, boDau);
    (kq.khop ? khop : khongKhop).push({ item, kq });
  });

  oKetQua.innerHTML = "";

  if (!truyVan) {
    oDem.textContent = dsLoc.length + " câu";
    khop.forEach(({ item, kq }) => oKetQua.appendChild(dungThe(item, kq, false)));
    return;
  }

  oDem.textContent = khop.length + " / " + dsLoc.length + " câu khớp";

  if (!khop.length) {
    const doi = mucTim === "a" ? "đáp án" : "câu";
    const t = document.createElement("p");
    t.className = "trong";
    t.textContent = cheDo === "start"
      ? "Không có " + doi + " nào bắt đầu bằng “" + truyVan + "”. Thử chuyển sang “Chứa chuỗi”."
      : "Không có " + doi + " nào chứa “" + truyVan + "”.";
    oKetQua.appendChild(t);
  }

  khop.forEach(({ item, kq }) => oKetQua.appendChild(dungThe(item, kq, false)));

  if (khongKhop.length) {
    const ngan = document.createElement("div");
    ngan.className = "ngan-cach";
    ngan.textContent = "Các câu không liên quan (" + khongKhop.length + ")";
    oKetQua.appendChild(ngan);
    khongKhop.forEach(({ item, kq }) => oKetQua.appendChild(dungThe(item, kq, true)));
  }
}

/* ---------- Sự kiện ---------- */

function gomNut(thuocTinh, capNhat) {
  document.querySelectorAll("[" + thuocTinh + "]").forEach((nut) => {
    nut.addEventListener("click", () => {
      capNhat(nut.getAttribute(thuocTinh));
      document.querySelectorAll("[" + thuocTinh + "]").forEach((n) =>
        n.setAttribute("aria-pressed", String(n === nut)));
      veKetQua();
    });
  });
}

gomNut("data-muc", (v) => {
  mucTim = v;
  oTimKiem.placeholder = v === "a"
    ? "Gõ chữ cái đầu của đáp án (cả đáp án sai)…"
    : "Gõ chữ cái đầu của câu hỏi…";
});
gomNut("data-che-do", (v) => { cheDo = v; });
gomNut("data-phan", (v) => { phanLoc = Number(v); });

oTimKiem.addEventListener("input", veKetQua);
oBoQuaDau.addEventListener("change", veKetQua);
oHienDapAn.addEventListener("change", veKetQua);

$("#xoa").addEventListener("click", () => {
  oTimKiem.value = "";
  oTimKiem.focus();
  veKetQua();
});

// Phím tắt: "/" để đưa con trỏ vào ô tìm, Esc để xoá
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== oTimKiem) {
    e.preventDefault();
    oTimKiem.focus();
  } else if (e.key === "Escape") {
    oTimKiem.value = "";
    veKetQua();
  }
});

tinhNham();
veKetQua();
