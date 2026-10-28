/* =====================================================
   NGÂN HÀNG CÂU HỎI + ĐÁP ÁN ĐÚNG
   - part 1: trắc nghiệm nhiều lựa chọn (options + answer: "A".."D")
   - part 2: đúng/sai (items: [{ text, answer: true|false }])
   - part 3: trả lời ngắn (answer: chuỗi)
   - de: số thứ tự đề (mỗi lần thêm đề mới thì tăng lên)
   - b: true  -> đáp án gốc của hệ thống có dính thẻ </b> (khi nhập nên gõ kèm </b>)
   - nham: ["ID", ...] -> tự chỉ định thêm các câu dễ nhầm (web cũng tự dò các câu giống nhau)
   - id: ID gốc của câu hỏi
   - note: ghi chú thêm (không bắt buộc)
   ===================================================== */
const NGAN_HANG = [
  /* ---------- PHẦN I ---------- */
  { id: "599987973", de: 1, part: 1, num: 1, q: "Aniline có công thức là",
    options: { A: "C3H7NH2.", B: "CH3NH2.", C: "C2H5NH2.", D: "C6H5NH2." }, answer: "D" },

  { id: "599987955", de: 1, part: 1, num: 2, q: "Số nguyên tử hydrogen trong phân tử fructose là",
    options: { A: "12.", B: "6.", C: "10.", D: "22." }, answer: "A" },

  { id: "599987936", de: 1, part: 1, num: 3, q: "Ester X có mùi đặc trưng giống mùi táo và có công thức phân tử C5H10O2. Thủy phân X trong dung dịch NaOH, thu được sodium butanoate và một alcohol. Công thức của X là",
    options: { A: "CH3CH2CH2COOCH3.", B: "CH3CH2COOCH2CH3.", C: "CH3COOCH2CH2CH3.", D: "(CH3)2CHCOOCH2CH3." }, answer: "A" },

  { id: "599987933", de: 1, part: 1, num: 4, q: "Tên gọi của HCOOCH2CH3 là",
    options: { A: "methyl acetate.", B: "ethyl acetate.", C: "ethyl formate.", D: "methyl formate." }, answer: "C" },

  { id: "599987949", de: 1, part: 1, num: 5, q: "Cho 6 gam một este của axit cacboxylic no đơn chức và ancol no đơn chức phản ứng vừa hết với 100 ml dung dịch NaOH 1M. Tên gọi của este?",
    options: { A: "methyl acetate.", B: "ethyl formate.", C: "methyl formate.", D: "ethyl acetate." }, answer: "C" },

  { id: "599987932", de: 1, part: 1, num: 6, q: "Hãy xác định gốc R của ester C2H5COOCH3",
    options: { A: "–C4H9.", B: "–C3H7.", C: "-C2H5.", D: "-CH3." }, answer: "C" },

  { id: "599987978", de: 1, part: 1, num: 7, q: "Chất X vừa tác dụng được với acid, vừa tác dụng được với base. Chất X là",
    options: { A: "CH3CHO.", B: "CH3COOH.", C: "H2NCH2COOH.", D: "CH3NH2." }, answer: "C" },

  { id: "599987982", de: 1, part: 1, num: 8, q: "Chất nào sau đây lưỡng tính",
    options: { A: "CH2=CHCOOH.", B: "H2NCH2COOH.", C: "C2H5OH.", D: "CH3COOH." }, answer: "B" },

  { id: "599987967", de: 1, part: 1, num: 9, q: "Cồn sinh học được dùng làm nhiên liệu sạch, được sản xuất thông qua quá trình lên men các chất hữu cơ như tinh bột, cellulose. Khối lượng ethanol thu được từ một tấn mùn cưa chứa 45% cellulose về khối lượng là? (biết hiệu suất cả quá trình đạt 70%).",
    options: { A: "175,9 kg.", B: "180,9 kg.", C: "171,9 kg.", D: "178,9 kg." }, answer: "D" },

  { id: "599987980", de: 1, part: 1, num: 10, q: "Hợp chất nào sau đây thuộc loại protein?",
    options: { A: "Saccharose.", B: "Albumin.", C: "Cellulose.", D: "Triglyceride." }, answer: "B" },

  { id: "599987942", de: 1, part: 1, num: 11, q: "Tên gọi của acid béo có công thức CH3[CH2]16COOH?",
    options: { A: "linoleic acid.", B: "palmitic acid.", C: "stearic acid.", D: "oleic acid." }, answer: "C" },

  { id: "599987962", de: 1, part: 1, num: 12, q: "Chất rắn X vô định hình, màu trắng, không tan trong nước nguội. Thủy phân X với xúc tác acid hoặc enzyme, thu được chất Y. Chất X và Y lần lượt là",
    options: { A: "saccharose và glucose.", B: "tinh bột và glucose.", C: "tinh bột và saccharose.", D: "cellulose và saccharose." }, answer: "B" },

  { id: "599987934", de: 1, part: 1, num: 13, q: "Carboxylic acid và alcohol nào đã tạo ra ester CH3COOC2H5",
    options: { A: "CH3COOH và C2H5OH.", B: "HCOOH và C2H5OH.", C: "C2H5COOH và CH3OH.", D: "CH3COOH và CH3OH." }, answer: "A" },

  { id: "599987984", de: 1, part: 1, num: 14, q: "Amine nào sau đây là alkylamine?",
    options: { A: "C6H5NH2.", B: "CH≡C-NH2.", C: "CH2=CH-NH2.", D: "CH3NH2." }, answer: "D" },

  { id: "599987952", de: 1, part: 1, num: 15, q: "Carbohydrate nhất thiết phải chứa nhóm chức của",
    options: { A: "amine.", B: "alcohol.", C: "aldehyde.", D: "ketone." }, answer: "B" },

  { id: "599987971", de: 1, part: 1, num: 16, q: "Phát biểu nào sau đây không đúng?",
    options: {
      A: "Protein có thể bị đông tụ dưới tác dụng của nhiệt, acid hoặc base.",
      B: "Protein tác dụng với Cu(OH)2 trong môi trường kiềm tạo dung dịch màu xanh lam.",
      C: "Thuỷ phân hoàn toàn polypeptide thu được các phân tử α-amino acid.",
      D: "Protein tác dụng với dung dịch nitric acid đặc tạo thành sản phẩm rắn có màu vàng." },
    answer: "B", note: "Protein + Cu(OH)2 cho màu tím (phản ứng biuret), không phải xanh lam." },

  { id: "599987938", de: 1, part: 1, num: 17, q: "Chiều tăng dần nhiệt độ sôi các chất sau: methyl formate, acetic acid, ethyl alcohol là?",
    options: {
      A: "HCOOCH3 < CH3COOH < C2H5OH.",
      B: "C2H5OH < CH3COOH < HCOOCH3.",
      C: "CH3COOH < C2H5OH < HCOOCH3.",
      D: "HCOOCH3 < C2H5OH < CH3COOH." },
    answer: "D" },

  { id: "599987960", de: 1, part: 1, num: 18, q: "Khi bị ốm, mất sức, nhiều người bệnh thường được truyền dịch đường để bổ sung nhanh năng lượng. Chất trong dịch truyền có tác dụng trên là",
    options: { A: "Maltose.", B: "Saccharose.", C: "Glucose.", D: "Fructose." }, answer: "C" },

  /* ---------- PHẦN II ---------- */
  { id: "599987997", de: 1, part: 2, num: 1, q: "Hãy cho biết những phát biểu sau đây là đúng hay sai?",
    items: [
      { text: "Trong nước ép mía chứa khoảng 15% saccharose theo khối lượng, có thể dùng phương pháp chiết và sắc kí để tách saccharose từ nước ép mía.", answer: true },
      { text: "Phản ứng hóa học chủ yếu xảy ra khi sản xuất rượu vang từ nho là C6H12O6 ⭢ 2C2H5OH + 2CO2", answer: true },
      { text: "Thủy phân saccharose thu được hai monosaccharide đều làm mất màu nước bromine.", answer: false },
      { text: "Công thức của cellulose trinitrate là [C6H7O2(ONO2)2]n", answer: false }
    ],
    note: "Ý a: nhiều sách ghi tách saccharose bằng chiết và kết tinh – nên đối chiếu lại đề gốc." },

  { id: "599987998", de: 1, part: 2, num: 2, q: "Bạn có biết, cơ thể trưởng thành của chúng ta có hàng tỉ tế bào, mỗi tế bào được cấu tạo từ các thành phần cơ bản là nước, nucleic acid, ion, lipid, carbohydrate và protein. Trong đó, protein duy trì và phát triển cơ thể, hình thành những chất cơ bản cho hoạt động sống, tham gia vận chuyển oxygen, chất dinh dưỡng và có vai trò bảo vệ cơ thể.",
    items: [
      { text: "Quá trình tiêu hoá và chuyển hoá protein trong các thực phẩm như thịt, cá, trứng,… để tạo thành các amino acid thuộc loại phản ứng thủy phân.", answer: true },
      { text: "Protein dạng hình sợi có thể tan trong nước tạo thành dung dịch keo, protein dạng hình cầu không tan trong nước.", answer: false },
      { text: "Ngoài chất béo và carbohydrate, để bổ sung protein trong chế độ ăn uống của chúng ta cần thiết phải cung cấp chất đạm đầy đủ.", answer: true },
      { text: "Protein là hợp chất cao phân tử được hình thành từ một hay nhiều chuỗi polypeptide.", answer: true }
    ] },

  { id: "599987996", de: 1, part: 2, num: 3, q: "Cho các chất sau: glucose, fructose, saccharose, maltose, tinh bột và cellulose.",
    items: [
      { text: "Glucose và fructose có thể chuyển hoá qua lại với nhau trong môi trường kiềm.", answer: true },
      { text: "Trong các chất trên, có 1 monosaccharide, hai disaccharide và hai polysaccharide.", answer: false },
      { text: "Thủy phân hoàn toàn tinh bột và cellulose dưới tác dụng của enzyme hoặc acid tạo thành glucose", answer: true },
      { text: "Cấu tạo phân tử các chất trên đều có nhiều nhóm hydroxy.", answer: true }
    ] },

  { id: "599987999", de: 1, part: 2, num: 4, q: "Amine là hợp chất hữu cơ thu được khi thay thế một hai nhiều nguyên tử hydrogen của ammonia bằng các gốc hydrocarbon.",
    items: [
      { text: "Nhờ tạo được liên kết hydrogen với nước nên ở điều kiện thường, các amine đều tan tốt trong nước.", answer: false },
      { text: "Amine là hợp chất hữu cơ có tính chất lưỡng tính.", answer: false },
      { text: "Amine có từ một nguyên tử Cacbon trong phân tử bắt đầu xuất hiện hiện tượng đồng phân.", answer: false },
      { text: "Bậc của amine là bậc của nguyên tử cacbon liên kết với nhóm amine.", answer: false }
    ] },

  /* ---------- PHẦN III ---------- */
  { id: "599988007", de: 1, part: 3, num: 1, q: "Đốt cháy hoàn toàn 0,1 mol một ester đơn chức, mạch hở Y cần vừa đủ 0,35 mol O₂, thu được CO₂ và H₂O có số mol bằng nhau. Số nguyên tử carbon trong phân tử ester Y là?",
    answer: "3" },

  { id: "599988004", b: true, de: 1, part: 3, num: 2, q: "Cho các chất sau: C15H31COONa; CH3[CH2]11OSO3Na; CH3[CH2]11C6H4SO3Na; C17H33COOK; CH3[CH2]14COONa; CH3[CH2]10CH2OSO3Na. Có bao nhiêu chất là xà phòng? Có bao nhiêu chất là chất giặt rửa tổng hợp?",
    answer: "3",
    note: "Đáp án gốc chỉ ghi một số: 3 xà phòng và 3 chất giặt rửa tổng hợp." },

  { id: "599988010", de: 1, part: 3, num: 3, q: "Khi lên men 360 gam glucose với hiệu suất 100%, Tính khối lượng ethyl alcohol thu được?",
    answer: "184" },

  { id: "599988013", de: 1, part: 3, num: 4, q: "Cho m gam Anilin (C6H5NH2) tác dụng hết với dung dịch Br2 thu được 9,9 gam kết tủa. Tính giá trị m?",
    answer: "2,79" },

  { id: "599988015", de: 1, part: 3, num: 5, q: "Cho 7,5 gam axit aminoaxetic (H2NCH2COOH) phản ứng hết với dung dịch NaOH. Sau phản ứng, khối lượng muối thu được là bao nhiêu?",
    answer: "9,7" },

  { id: "599988009", de: 1, part: 3, num: 6, q: "Cho m gam glucose phản ứng hoàn toàn với lượng dư dung dịch AgNO3 trong NH3 (đun nóng), thu được 21,6 gam Ag. Tính giá trị của m?",
    answer: "18" },

  /* =================== ĐỀ 2 =================== */
  /* ---------- PHẦN I ---------- */
  { id: "599987951", de: 2, part: 1, num: 1, q: "Chất nào sau đây thuộc loại monosaccharide?",
    options: { A: "Fructose.", B: "Tinh bột.", C: "Saccharose.", D: "Cellulose." }, answer: "A" },

  { id: "599987989", de: 2, part: 1, num: 2, q: "Bằng xúc tác Fe và HCl, aniline có thể được điều chế từ phản ứng giữa",
    options: { A: "khử dẫn xuất C6H5NO2.", B: "khử dẫn xuất C6H5Br.", C: "khử phenol C6H5OH.", D: "oxi hóa dẫn xuất C6H5NO2." }, answer: "A" },

  { id: "599987940", de: 2, part: 1, num: 3, q: "Chất béo là",
    options: { A: "Là ester của acid béo với alcohol đa chức.", B: "Triester của acid hữu cơ với glycerol.", C: "Hợp chất hữu cơ chứa C, H, N, O.", D: "Triester của glycerol với acid béo." }, answer: "D" },

  { id: "599987945", de: 2, part: 1, num: 4, q: "Cho các phát biểu sau: (1) Một số ester có mùi thơm nên được dùng làm chất tạo hương trong công nghiệp thực phẩm và mĩ phẩm. (2) Chất béo là triester của glycerol với acid béo. (3) Chất béo tan tốt trong nước. (4) Mỡ động vật, dầu thực vật có thể được dùng làm nguyên liệu để sản xuất xà phòng. (5) Phản ứng thủy phân ester trong môi trường acid luôn là phản ứng một chiều. Số phát biểu đúng là",
    options: { A: "3.", B: "5.", C: "2.", D: "4." }, answer: "A",
    note: "Đúng: (1), (2), (4). Sai: (3) chất béo không tan trong nước; (5) thủy phân trong acid là phản ứng thuận nghịch." },

  { id: "599987988", de: 2, part: 1, num: 6, q: "Cho vài giọt nước bromine vào dung dịch aniline, lắc nhẹ thấy xuất hiện",
    options: { A: "kết tủa xanh.", B: "kết tủa vàng.", C: "kết tủa trắng.", D: "kết tủa đỏ nâu." }, answer: "C" },

  { id: "599987948", de: 2, part: 1, num: 7, q: "Một ester A được tạo thành bởi một axit đơn chức no và một ancol đơn chức no, có dA/CO2 = 2. Công thức phân tử của ester A?",
    options: { A: "C2H4O2.", B: "C4H8O2.", C: "C5H10O2.", D: "C3H6O2." }, answer: "B" },

  { id: "599987983", de: 2, part: 1, num: 8, q: "Cho quỳ tím vào dung dịch glycine, hiện tượng xảy ra là?",
    options: { A: "Quỳ tím hóa đỏ.", B: "Không làm đổi màu quỳ tím.", C: "Quỳ tím hóa hồng.", D: "Quỳ tím hóa xanh." }, answer: "B" },

  { id: "599987943", de: 2, part: 1, num: 9, q: "Tên gọi của chất béo có công thức (C15H31COO)3C3H5?",
    options: { A: "trilinolein", B: "triolein", C: "tripalmitin", D: "tristearin" }, answer: "C" },

  { id: "599987970", de: 2, part: 1, num: 11, q: "Cho các phát biểu sau: (1) Dung dịch ethylamine và dung dịch aniline đều làm xanh giấy quỳ tím. (2) Nhỏ từ từ đến dư dung dịch methylamine vào dung dịch copper (II) sulfate - CuSO4, ban đầu thấy xuất hiện kết tủa màu xanh nhạt, sau đó kết tủa tan tạo thành dung dịch màu xanh lam. (3) Cho dung dịch methylamine vào ống nghiệm đựng dung dịch iron(III) chloride thấy xuất hiện kết tủa nâu đỏ. (4) Nhỏ vài giọt dung dịch aniline vào ống nghiệm đựng nước bromine thấy xuất hiện kết tủa trắng. Số phát biểu đúng là",
    options: { A: "4.", B: "1.", C: "3.", D: "2." }, answer: "D",
    note: "Cần kiểm tra lại: (1) sai (aniline không làm xanh quỳ), (3) và (4) đúng. Đáp án gốc là 2 nghĩa là coi (2) sai; nếu coi (2) đúng thì ra 3." },

  { id: "599987974", de: 2, part: 1, num: 15, q: "Trong các chất sau, chất nào là amine bậc 2?",
    options: { A: "C6H5NH2", B: "CH3CH(CH3)NH2", C: "H2N[CH2]6NH2", D: "CH3NHCH3" }, answer: "D" },

  { id: "599987964", de: 2, part: 1, num: 16, q: "Cặp chất nào sau đây đều có khả năng thủy phân trong môi trường acid, đun nóng?",
    options: { A: "Glucose và saccharose.", B: "Glucose và fructose.", C: "Saccharose và cellulose.", D: "Fructose và tinh bột." }, answer: "C" },

  /* ---------- PHẦN II ---------- */
  { id: "599987993", de: 2, part: 2, num: 1, q: "Khi nói về chất béo",
    items: [
      { text: "Ở nhiệt độ rất cao, chất béo ở trạng thái rắn.", answer: false },
      { text: "Chất béo nặng hơn nước, tan nhiều trong nước, không tan trong dung môi hữu cơ không phân cực ít phân cực hoặc không phân cực.", answer: false },
      { text: "Chất béo chứa gốc acid không no có thể phản ứng với hydrogen (khi có mặt xúc tác, ở điều kiện thích hợp), tạo thành chất béo chứa gốc acid no.", answer: true },
      { text: "Chất béo có phản ứng thủy phân.", answer: true }
    ] },

  { id: "599988001", de: 2, part: 2, num: 2, q: "Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai về amino acid",
    items: [
      { text: "Amino axit có tính chất lưỡng tính.", answer: true },
      { text: "Amino axit là những chất rắn, khi ở dạng tinh thể chúng không có màu.", answer: true },
      { text: "Amino axit có nhiệt độ nóng chảy cao.", answer: true },
      { text: "Amino axit ít tan trong nước vì chúng không tồn tại ở dạng ion lưỡng cực.", answer: false }
    ] },

  { id: "599987995", de: 2, part: 2, num: 4, q: "Tinh bột và cellulose đều thuộc loại polysaccharide và có công thức phân tử là (C6H10O5)n Hãy cho biết những phát biểu sau đây là đúng hay sai?",
    items: [
      { text: "Nhỏ vài giọt dung dịch iodine vào mặt cắt của quả chuối xanh thấy xuất hiện màu xanh tím.", answer: true },
      { text: "Xôi hoặc gạo nếp có thành phần amylose cao hơn nên dẻo và dính hơn cơm tẻ.", answer: false },
      { text: "Tinh bột và cellulose là đồng phân cấu tạo của nhau.", answer: false },
      { text: "Nhỏ dung dịch sulfuric acid đặc làm sợi bông hoặc giấy bị hóa vàng.", answer: false }
    ] },

  /* ---------- PHẦN III ---------- */
  { id: "599988008", de: 2, part: 3, num: 1, q: "Cho 9 gam glucose (C6H12O6) phản ứng hoàn toàn với lượng dư dung dịch AgNO3 trong NH3 (đun nóng), thu được m gam Ag. Tính giá trị của m?",
    answer: "10,8" },

  { id: "599988011", de: 2, part: 3, num: 2, q: "Tính số gam cellulose cần để điều chế 59,4 gam Cellulose trinitrate (với hiệu suất 100%)",
    answer: "32,4" },

  { id: "599988003", b: true, de: 2, part: 3, num: 3, q: "Cho 8,8 gam CH3COOC2H5 phản ứng hết với dung dịch NaOH (dư), đun nóng. Khối lượng muối CH3COONa thu được là?",
    answer: "8,2" },

  { id: "599988014", de: 2, part: 3, num: 5, q: "Cho 7,5 gam axit aminoaxetic (H2NCH2COOH) phản ứng hết với dung dịch HCl. Sau phản ứng, khối lượng muối thu được là?",
    answer: "11,15" },

  /* =================== ĐỀ 3 =================== */
  /* ---------- PHẦN I ---------- */
  { id: "599987954", de: 3, part: 1, num: 1, q: "Saccharose và maltose là",
    options: { A: "Gốc glucose", B: "Polysaccharide", C: "Monosaccharide", D: "Đồng phân" }, answer: "D" },

  { id: "599987985", de: 3, part: 1, num: 5, q: "Tỉ lệ số người chết vì bệnh phổi do hút thuốc lá cao gấp hàng chục lần số người không hút thuốc lá. Chất gây nghiện có trong thuốc lá là",
    options: { A: "morphine.", B: "nicotine.", C: "acid nicotineic.", D: "caffeine." }, answer: "B" },

  { id: "599987979", de: 3, part: 1, num: 7, q: "Chất nào sau đây vừa tác dụng được với H2NCH2COOH, vừa tác dụng được với CH3NH2?",
    options: { A: "CH3OH.", B: "NaCl.", C: "HCl.", D: "NaOH." }, answer: "C" },

  { id: "599987941", de: 3, part: 1, num: 8, q: "Xà phòng là",
    options: {
      A: "Hỗn hợp muối potassium của các acid béo và các chất phụ gia.",
      B: "Hỗn hợp muối sodium hoặc potassium của các acid béo và các chất phụ gia.",
      C: "Hỗn hợp muối sodium và các chất phụ gia",
      D: "Hỗn hợp muối sodium hoặc potassium của các acid béo." },
    answer: "B" },

  { id: "599987958", de: 3, part: 1, num: 11, q: "Trong điều kiện thích hợp glucose lên men enzyme tạo thành khí CO2 và",
    options: { A: "CH3CHO.", B: "C2H5OH.", C: "CH3COOH.", D: "HCOOH." }, answer: "B" },

  { id: "599987986", de: 3, part: 1, num: 12, q: "Trong phân tử chất nào sau đây có chứa vòng benzene?",
    options: { A: "Ethylamine", B: "Propylamine.", C: "Methylamine.", D: "Phenylamine" }, answer: "D" },

  { id: "599987959", de: 3, part: 1, num: 14, q: "Đặc điểm của monosaccharide là những carbohydrate",
    options: {
      A: "khi thủy phân hoàn toàn mỗi phân tử tạo thành hai phân tử monosaccharide.",
      B: "làm mất màu nước bromine.",
      C: "khi thủy phân hoàn toàn mỗi phân tử tạo thành nhiều phân tử monosaccharide.",
      D: "không bị thủy phân." },
    answer: "D" },

  { id: "599987950", de: 3, part: 1, num: 15, q: "Carbohydrate là những hợp chất hữu cơ tạp chức và thường có công thức chung là",
    options: { A: "CxHyOz", B: "Cn(H2O)m", C: "R(OH)x(CHO)y", D: "CnH2O" }, answer: "B" },

  { id: "599987939", de: 3, part: 1, num: 16, q: "Phản ứng hóa học nào sau đây xảy ra thuận nghịch?",
    options: {
      A: "Đun nóng ethyl acetate với dung dịch H2SO4 loãng.",
      B: "Đun nóng chất béo với dung dịch NaOH.",
      C: "Đun nóng ethyl acetate với dung dịch NaOH.",
      D: "Hydrogen hóa chất béo có gốc acid không no." },
    answer: "A" },

  /* ---------- PHẦN II ---------- */
  { id: "599987991", de: 3, part: 2, num: 2, q: "Ester X có tên gọi là ethyl acetate",
    items: [
      { text: "X là ester no đơn chức mạch hở có công thức phân tử là C4H8O2.", answer: true },
      { text: "Tên gọi khác của X là methyl acetate.", answer: false },
      { text: "Công thức cấu tạo thu gọn của X là CH3COOC2H5.", answer: true },
      { text: "Thủy phân X trong môi trường acid thu được methanol.", answer: false }
    ] },

  /* =================== ĐỀ 4 =================== */
  /* ---------- PHẦN I ---------- */
  { id: "599987965", de: 4, part: 1, num: 2, q: "Dãy gồm các chất đều không thamgia phản ứng tráng bạc là:",
    options: {
      A: "formic acid, aldehyde fomic, glucose.",
      B: "acetaldehyde, fructose, cellulose.",
      C: "fructose, tinh bột,aldehyde fomic.",
      D: "saccharose, tinh bột, cellulose." },
    answer: "D" },

  { id: "599987987", de: 4, part: 1, num: 6, q: "Aniline (C6H5NH2) và phenol (C6H5OH) đều có phản ứng với",
    options: { A: "dung dịch NaCl.", B: "dung dịch HCl.", C: "dung dịch NaOH.", D: "dung dịch Br2" }, answer: "D" },

  { id: "599987975", de: 4, part: 1, num: 12, q: "Chất có tính base là",
    options: { A: "CH3CHO.", B: "C6H5OH.", C: "CH3COOH.", D: "CH3NH2." }, answer: "D" },

  { id: "599987930", de: 4, part: 1, num: 14, q: "Công thức chung của ester đơn chức.",
    options: { A: "R-COOH", B: "R-COO-R’", C: "R-CHO", D: "R-OH" }, answer: "B" },

  { id: "599987963", de: 4, part: 1, num: 16, q: "Thủy phân hoàn toàn tinh bột trong môi trường acid, thu được chất nào sau đây?",
    options: { A: "Ethyl alcohol.", B: "Glucose.", C: "Fructose.", D: "Saccharose." }, answer: "B" },

  { id: "599987947", de: 4, part: 1, num: 17, q: "Xác định đuôi kị nước của CH3[CH2]10CH2OSO3Na",
    options: { A: "CH3[CH2]10 CH2OSO3-.", B: "CH3[CH2]10CH2-.", C: "CH3[CH2]10-.", D: "CH2OSO3-." }, answer: "B" },

  { id: "599987981", de: 4, part: 1, num: 18, q: "Chất cơ sở để hình thành nên các phân tử protein đơn giản là?",
    options: { A: "Các loại đường.", B: "Tinh bột.", C: "Amino acid.", D: "Acid béo." }, answer: "C" },

  /* ---------- PHẦN II ---------- */
  { id: "599988000", de: 4, part: 2, num: 2, q: "Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai:",
    items: [
      { text: "Trong phân tử tripetide mạch hở có ba liên kết peptide.", answer: false },
      { text: "Protein đơn giản được tạo thành từ các gốc α-amino acid.", answer: true },
      { text: "Dipeptide Gly-Ala có phản ứng màu biuret.", answer: false },
      { text: "Tất cả các peptide đều có khả năng tham gia phản ứng thủy phân.", answer: true }
    ] },

  /* ---------- PHẦN III ---------- */
  { id: "599988002", de: 4, part: 3, num: 1, q: "Xà phòng hoá hoàn toàn 37 gam hỗn hợp 2 este là HCOOC2H5 và CH3COOCH3 có cùng CTPT là C3H6O2 bằng dung dịch NaOH, đun nóng. Khối lượng NaOH cần dùng là?",
    answer: "20" },

  { id: "599988012", nham: ["599988013"], de: 4, part: 3, num: 2, q: "Cho anilin (C6H5NH2) tác dụng vừa đủ với dd HCl thu được 38,85 gam muối. Tính khối lượng anilin?",
    answer: "27,9" },

  /* =================== ĐỀ 5 =================== */
  /* ---------- PHẦN I ---------- */
  { id: "599987935", de: 5, part: 1, num: 2, q: "Đun nóng ester CH3COOC2H5 với một lượng vừa đủ dd NaOH, sản phẩm thu được",
    options: { A: "CH3COONa và C2H5OH.", B: "CH3COONa và CH3OH.", C: "C2H5COONa và CH3OH.", D: "HCOONa và C2H5OH." }, answer: "A" },

  { id: "599987969", de: 5, part: 1, num: 5, q: "Cho các phát biểu sau về carbohydrate: (a) Glucose và saccharose là chất rắn có vị ngọt, dễ tan trong nước. (b) Tinh bột và cellulose đều là polysaccharide. (c) Trong dung dịch, glucose và saccharose đều hòa tan Cu(OH)2, tạo phức màu xanh lam. (d) Khi thủy phân hoàn toàn hỗn hợp gồm tinh bột và saccharose trong môi trường acid, chỉ thu được một loại monosaccharide. (e) Khi đun nóng glucose (hoặc fructose) với dung dịch AgNO3 trong NH3 thu được Ag. Số phát biểu đúng là",
    options: { A: "5", B: "2", C: "4", D: "3" }, answer: "C",
    note: "Đúng: (a), (b), (c), (e). Sai: (d) vì thu được 2 loại monosaccharide (glucose và fructose)." },

  { id: "599987956", de: 5, part: 1, num: 7, q: "Đồng phân của glucose là",
    options: { A: "fructose.", B: "maltose.", C: "saccharose.", D: "cellulose." }, answer: "A" },

  { id: "599987937", de: 5, part: 1, num: 10, q: "Isopropyl formate là một ester có trong cà phê Arabica (còn gọi là cà phê chè). Công thức cấu tạo của isopropyl formate.",
    options: { A: "HCOOCH(CH3)2.", B: "C2H5COOCH3.", C: "CH3COOCH3.", D: "CH3COOC2H5." }, answer: "A" },

  { id: "599987977", de: 5, part: 1, num: 13, q: "Amino acid là hợp chất hữu cơ trong phân tử",
    options: { A: "chứa nhóm carboxyl và nhóm amino.", B: "chỉ chứa nhóm carboxyl.", C: "chỉ chứa nhóm amino.", D: "chỉ chứa nitơ hoặc cacbon." }, answer: "A" },

  /* ---------- PHẦN III ---------- */
  { id: "599988005", de: 5, part: 3, num: 4, q: "Có bao nhiêu ester có công thức phân tử C3H6O2?",
    answer: "2" },

  /* =================== ĐỀ 6 =================== */
  { id: "599987953", de: 6, part: 1, num: 6, q: "Glucose là một loại monosaccharide có nhiều trong quả nho chín. Công thức phân tử của glucose là:",
    options: { A: "C2H4O2.", B: "C6H12O6.", C: "C12H22O11.", D: "(C6H10O5)n." }, answer: "B" },

  { id: "599987966", de: 6, part: 1, num: 14, q: "Lên men 18 gam glucose để điều chế ethyl alcohol, giả sử hiệu suất phản ứng 100%, thu được V lít khí CO2 (điều kiện chuẩn). Giá trị của V là?",
    options: { A: "4,958 lít.", B: "2,479 lít.", C: "3,7185 lít.", D: "7,437 lít." }, answer: "A" },

  { id: "599987994", de: 6, part: 2, num: 2, q: "Carbohydrate là những hợp chất hữu cơ tạp chức và thường có công thức chung là Cn(H2O)m. Hãy cho biết những phát biểu sau đây là đúng hay sai?",
    items: [
      { text: "Tất cả các carbohydrate đều tham gia phản ứng thủy phân.", answer: false },
      { text: "Các hợp chất hữu cơ có công thức dạng Cn(H2O)m thuộc loại carbohydrate.", answer: true },
      { text: "Tinh bột và cellulose là đồng phân của nhau.", answer: false },
      { text: "Glucose, saccharose, tinh bột công thức lần lượt là C6(H2O)6, C12(H2O)11, [C6(H2O)5]n.", answer: true }
    ],
    note: "Ý b theo đáp án gốc là Đúng, nhưng thực tế dạng Cn(H2O)m chưa chắc là carbohydrate (vd CH3COOH = C2(H2O)2)." },

  /* =================== ĐỀ 7 =================== */
  { id: "599987976", de: 7, part: 1, num: 11, q: "Chất làm giấy quỳ tím ẩm chuyển thành màu xanh là",
    options: { A: "C6H5NH2.", B: "C2H5OH.", C: "NaCl.", D: "CH3NH2." }, answer: "D" },

  { id: "599987961", de: 7, part: 1, num: 17, q: "Saccharose và glucose đều có phản ứng",
    options: { A: "tráng bạc.", B: "với Cu(OH)2.", C: "thủy phân.", D: "cộng H2 (Ni, to)." }, answer: "B" },

  { id: "599987990", de: 7, part: 2, num: 3, q: "Hợp chất thuộc loại ester",
    items: [
      { text: "CH3COOC2H5.", answer: true },
      { text: "HCOOCH3.", answer: true },
      { text: "CH3COOH.", answer: false },
      { text: "C2H5CHO.", answer: false }
    ] },

  /* =================== ĐỀ 8 =================== */
  { id: "599987957", de: 8, part: 1, num: 12, q: "Chất phản ứng được với AgNO3/NH3, đun nóng tạo ra kim loại Ag là",
    options: { A: "tinh bột.", B: "saccharose.", C: "cellulose.", D: "glucose." }, answer: "D" },

  { id: "599987946", de: 8, part: 1, num: 14, q: "Xác định đầu ưa nước của CH3[CH2]14COONa",
    options: { A: "-COOCH3.", B: "-COOH.", C: "-COONa.", D: "-COOC2H5." }, answer: "C" },

  { id: "599987931", nham: ["599987932"], de: 8, part: 1, num: 16, q: "Hãy xác định gốc R’của ester CH3COOCH3",
    options: { A: "–C4H9.", B: "-CH3.", C: "-C2H5.", D: "–C3H7." }, answer: "B" },

  /* =================== ĐỀ 9 =================== */
  { id: "599987944", de: 9, part: 1, num: 1, q: "Hai loại chất nào đây là tốt nhất có vai trò quan trọng đối với cơ thể, giúp phòng ngừa nhiều loại bệnh?",
    options: { A: "palmitic acid và stearic acid.", B: "ethanol và gluocose.", C: "methanol và lactic acid.", D: "acid béo omega-3 và omega-6." }, answer: "D" },

  /* =================== ĐỀ 10 =================== */
  { id: "599987972", de: 10, part: 1, num: 16, q: "Tên gọi và bậc của amine có công thức cấu tạo CH3NH2",
    options: { A: "aniline, bậc 1.", B: "methylamine, bậc 1.", C: "butylamine, bậc 1.", D: "ethylamine, bậc 1." }, answer: "B" },

  { id: "599988006", de: 10, part: 3, num: 1, q: "Đun nóng 176,8 g triolein (C17H33COO)3C3H5 với dung dịch NaOH dư. Khối lượng glycerol C3H5(OH)3 thu được là? (cho hiệu suất phản ứng đạt 100%)",
    answer: "18,4" },

  /* =================== ĐỀ 11 =================== */
  { id: "599987992", de: 11, part: 2, num: 1, q: "Khi nói về tính chất vật lý của ester",
    items: [
      { text: "Một số ester có mùi thơm của hoa, quả chín như: ethyl butyrate có mùi dứa chín, isoamyl acetate có mùi chuối chín.", answer: true },
      { text: "Các ester thường nặng hơn nước và tan nhiều trong nước.", answer: false },
      { text: "Các ester có phân tử khối thấp và trung bình thường là chất lỏng ở nhiệt độ phòng. Những ester có phân tử khối lớn thường ở dạng rắn.", answer: true },
      { text: "Các phân tử ester tạo được liên kết hydrogen với nhau nên nhiệt độ sôi cao hơn alcohol và carboxylic acid có phân tử khối tương đương.", answer: false }
    ] }
  /* Câu 15 của đề 9 (ID 599987979) trùng với câu đã có ở đề 3 (chỉ khác thứ tự đáp án) nên không thêm lại */
  /* Câu 3 của đề 5 (ID 599988009) trùng với câu đã có ở đề 1 nên không thêm lại */

  /* Câu 4 của đề 4 (ID 599988014) trùng với câu đã có ở đề 2 nên không thêm lại */
  /* Đề 3 có 2 câu Phần III (ID 599988013 và 599988003) đã có sẵn ở đề 1 và đề 2 nên không thêm lại */

  /* Câu 6 của đề 2 (ID 599988004) trùng với câu đã có ở đề 1 nên không thêm lại */
];
