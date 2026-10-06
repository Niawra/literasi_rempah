"use strict";

/* =========================================================
   DATA REMPAH
   Satu sumber data untuk explorer, detail, puzzle, tebak,
   memory, pasangkan, susun kata, dan kuis.
   ========================================================= */
const spices = [
  {
    id: "jahe",
    name: "Jahe",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Halia (Melayu); ginger (Inggris)",
    image: "assets/jahe.jpg",
    puzzleImage: "assets/puzzle/jahe.jpg",
    tint: "#d8b27a",
    category: "Rimpang Hangat",
    group: "Rimpang",
    description: "Jahe adalah tanaman berimpang yang rimpangnya berasa pedas hangat dan beraroma tajam. Rimpang jahe sangat populer sebagai bumbu dapur dan bahan minuman penghangat badan.",
    origin: "Diperkirakan berasal dari kawasan Asia Selatan hingga Asia Tenggara, lalu menyebar ke banyak wilayah tropis.",
    distribution: "Kini ditanam di banyak negara tropis, termasuk Indonesia, India, dan Tiongkok. Di Indonesia jahe ditanam di berbagai daerah.",
    characteristics: "Tanaman herba tegak setinggi sekitar 0,5–1 meter dengan daun sempit memanjang. Bagian di bawah tanah berupa rimpang bercabang yang tumbuh mendatar.",
    color: "Kulit cokelat muda; daging kuning pucat (pada jahe merah lebih kemerahan).",
    shape: "Rimpang bercabang menyerupai jari-jari yang menggembung, dengan ruas melingkar.",
    texture: "Kulit tipis agak licin; daging padat, berserat, dan berair saat dipotong.",
    aroma: "Tajam, segar, dan hangat.",
    taste: "Pedas hangat.",
    partUsed: "Rimpang (batang di bawah tanah).",
    uses: "Dipakai sebagai bumbu masak, bahan minuman hangat, campuran kue dan manisan, serta bahan jamu tradisional. Rimpang bisa dipakai segar, dikeringkan, atau diolah menjadi serbuk.",
    foods: ["Bumbu tumisan dan pepes", "Pengharum masakan ikan", "Kue dan roti jahe", "Manisan jahe"],
    drinks: ["Wedang jahe", "Bandrek", "Sekoteng", "STMJ (susu, telur, madu, jahe)"],
    dailyUse: "Dipakai di dapur rumah tangga, terutama untuk minuman hangat saat cuaca dingin atau hujan.",
    culturalValue: "Jahe lekat dengan tradisi minuman hangat di banyak daerah, misalnya bandrek di Jawa Barat dan wedang jahe di Jawa. Jahe juga menjadi bagian dari ramuan jamu tradisional.",
    history: "Jahe sudah lama dikenal di Asia sebagai bumbu dan bahan ramuan. Rempah ini ikut diperdagangkan antarwilayah hingga sampai ke Eropa lewat jalur dagang.",
    facts: [
      "Jahe sekerabat dengan kunyit, kencur, lengkuas, temulawak, dan kapulaga: semuanya satu suku Zingiberaceae.",
      "Rasa pedas hangat jahe berasal dari senyawa seperti gingerol.",
      "Di Indonesia dikenal beberapa jenis jahe, misalnya jahe gajah, jahe emprit, dan jahe merah.",
      "Jahe biasa diperbanyak dengan potongan rimpang yang memiliki mata tunas."
    ],
    howToTell: "Dibanding kunyit, daging jahe berwarna kuning pucat (bukan oranye) dan rasanya pedas. Dibanding lengkuas, jahe lebih kecil dan lebih mudah dipatahkan.",
    clues: ["Berbentuk rimpang bercabang seperti jari-jari.", "Rasanya pedas hangat dan aromanya tajam.", "Sering diseduh menjadi minuman penghangat saat hujan."],
    matchClue: "Pedas hangat, bahan wedang dan bandrek",
    challenge: { q: "Bagian jahe yang dimanfaatkan adalah…", options: ["Rimpang", "Daun", "Biji", "Bunga"], answer: 0, explain: "Yang dipakai adalah rimpang, yaitu batang yang tumbuh di bawah tanah." }
  },
  {
    id: "kunyit",
    name: "Kunyit",
    scientificName: "Curcuma longa",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Kunir (Jawa); koneng (Sunda); turmeric (Inggris)",
    image: "assets/kunyit.jpg",
    puzzleImage: "assets/puzzle/kunyit.jpg",
    tint: "#e0a21b",
    category: "Rimpang Pewarna",
    group: "Rimpang",
    description: "Kunyit adalah tanaman berimpang yang dagingnya berwarna kuning-oranye cerah. Warna alami ini membuat kunyit terkenal sebagai bumbu sekaligus pewarna makanan.",
    origin: "Diperkirakan berasal dari Asia Selatan dan Asia Tenggara.",
    distribution: "Tumbuh baik di daerah tropis dan banyak ditanam di berbagai wilayah Indonesia, dari pekarangan rumah hingga kebun.",
    characteristics: "Tanaman herba setinggi sekitar 1 meter dengan daun lebar berbentuk lanset. Rimpang induknya membulat dan memiliki cabang rimpang yang memanjang.",
    color: "Kulit kuning kecokelatan; daging oranye-kuning cerah.",
    shape: "Rimpang induk membulat dengan cabang-cabang lonjong memanjang.",
    texture: "Padat dan agak keras; mudah meninggalkan noda pada tangan, talenan, dan kain.",
    aroma: "Khas, hangat, dan sedikit seperti tanah.",
    taste: "Agak pahit dan sedikit pedas.",
    partUsed: "Rimpang. Daun kunyit juga dipakai pada beberapa masakan.",
    uses: "Dipakai sebagai bumbu dasar kuning, pewarna alami makanan, dan bahan jamu tradisional. Dapat diparut, dihaluskan, atau dikeringkan menjadi bubuk.",
    foods: ["Nasi kuning", "Soto", "Gulai dan kari", "Ayam goreng bumbu kuning", "Ikan bumbu kuning"],
    drinks: ["Jamu kunyit asam", "Minuman kunyit susu (golden milk)"],
    dailyUse: "Sering dipakai di dapur untuk mewarnai nasi dan lauk tanpa pewarna buatan.",
    culturalValue: "Nasi kuning yang berwarna dari kunyit sering hadir pada syukuran dan perayaan, misalnya dibentuk menjadi tumpeng. Kunyit asam juga menjadi jamu yang akrab dalam budaya Jawa.",
    history: "Kunyit sudah lama dimanfaatkan di Asia sebagai bumbu, pewarna, dan bahan upacara. Rempah ini ikut menyebar lewat jalur perdagangan antarbangsa.",
    facts: [
      "Warna kuning-oranye kunyit berasal dari pigmen bernama kurkumin.",
      "Kunyit sekerabat dengan temulawak: sama-sama marga Curcuma, tetapi spesiesnya berbeda.",
      "Noda kunyit sulit hilang dari kain, karena itu kunyit juga dipakai sebagai pewarna alami.",
      "Daun kunyit dipakai pada beberapa masakan tradisional seperti gulai dan rendang."
    ],
    howToTell: "Dibanding jahe, daging kunyit oranye cerah dan mewarnai tangan. Dibanding temulawak, rimpang kunyit lebih kecil, warnanya kuning cerah, sedangkan temulawak lebih besar dan lebih pahit.",
    clues: ["Daging rimpangnya berwarna kuning-oranye cerah.", "Meninggalkan noda kuning di tangan dan talenan.", "Pemberi warna pada nasi kuning."],
    matchClue: "Kuning-oranye, pewarna nasi kuning",
    challenge: { q: "Zat warna alami yang membuat kunyit berwarna kuning-oranye adalah…", options: ["Kurkumin", "Klorofil", "Antosianin", "Gingerol"], answer: 0, explain: "Pigmen kurkumin-lah yang memberi warna kuning-oranye pada kunyit." }
  },
  {
    id: "kencur",
    name: "Kencur",
    scientificName: "Kaempferia galanga",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Cikur (Sunda); aromatic ginger / sand ginger (Inggris)",
    image: "assets//kencur.jpg",
    puzzleImage: "assets/puzzle/kencur.jpg",
    tint: "#c9a57b",
    category: "Rimpang Aromatik",
    group: "Rimpang",
    description: "Kencur adalah rempah berimpang kecil dengan aroma harum yang menyegarkan. Rimpangnya terkenal sebagai bahan jamu beras kencur dan bumbu sambal pecel.",
    origin: "Diperkirakan berasal dari kawasan Asia Tenggara dan Asia Selatan.",
    distribution: "Banyak ditanam di Asia tropis, termasuk di berbagai daerah di Indonesia, sering di pekarangan atau kebun.",
    characteristics: "Tanaman rendah dengan 2–3 helai daun lebar yang tumbuh hampir mendatar di dekat tanah. Bunganya kecil berwarna putih dengan corak ungu.",
    color: "Kulit cokelat muda; daging putih krem.",
    shape: "Rimpang kecil, bulat-lonjong, dan tumbuh bergerombol.",
    texture: "Padat, agak kenyal, dan berair; kulitnya tipis.",
    aroma: "Harum, segar, dan khas.",
    taste: "Pedas hangat dengan sedikit rasa pahit.",
    partUsed: "Rimpang.",
    uses: "Dipakai sebagai bumbu sambal pecel, bahan beras kencur, serta campuran bumbu pada beberapa masakan dan jamu. Biasanya diparut atau dihaluskan.",
    foods: ["Sambal pecel", "Karedok", "Urap"],
    drinks: ["Jamu beras kencur"],
    dailyUse: "Dipakai di dapur untuk bumbu pecel, dan sering dijumpai pada jamu yang dijajakan penjual jamu gendong.",
    culturalValue: "Beras kencur adalah salah satu jamu tradisional Jawa yang populer dan akrab di masyarakat. Kencur juga menjadi bagian dari kekayaan kuliner tradisional seperti pecel.",
    history: "Kencur sudah lama ditanam masyarakat Asia sebagai bumbu dan bahan ramuan. Di Nusantara, kencur menjadi bagian dari tradisi jamu yang diwariskan turun-temurun.",
    facts: [
      "Rimpang kencur termasuk kecil dibanding rempah sekeluarganya.",
      "Daun kencur tumbuh melebar dekat permukaan tanah, tidak menjulang seperti lengkuas.",
      "Kencur (Kaempferia galanga) dan lengkuas (Alpinia galanga) sama-sama memakai kata galanga, tetapi berbeda marga.",
      "Dalam bahasa Sunda, kencur disebut cikur."
    ],
    howToTell: "Dibanding jahe, kencur lebih kecil, beraroma lebih harum, dan dagingnya putih krem. Dibanding lengkuas, kencur jauh lebih kecil dan tidak keras berserat.",
    clues: ["Rimpangnya kecil dengan daging putih krem.", "Aromanya harum menyegarkan dan khas.", "Bahan utama jamu beras kencur."],
    matchClue: "Rimpang kecil, bahan beras kencur",
    challenge: { q: "Ciri tanaman kencur yang paling mudah dikenali adalah…", options: ["Daun lebar tumbuh menempel dekat tanah", "Batang merambat di pagar", "Berbuah polong hijau", "Tumbuh setinggi 3 meter"], answer: 0, explain: "Kencur berdaun lebar yang tumbuh hampir mendatar di dekat tanah." }
  },
  {
    id: "lengkuas",
    name: "Lengkuas",
    scientificName: "Alpinia galanga",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Laos (Jawa); laja (Sunda); galangal (Inggris)",
    image: "assets/lengkuas.jpg",
    puzzleImage: "assets/puzzle/lengkuas.jpg",
    tint: "#b9895a",
    category: "Rimpang Bumbu",
    group: "Rimpang",
    description: "Lengkuas adalah rimpang besar yang keras dan berserat. Aromanya segar dan rasanya pedas tajam, sehingga banyak dipakai pada masakan berkuah dan bersantan.",
    origin: "Diperkirakan berasal dari kawasan Asia Tenggara dan sekitarnya.",
    distribution: "Tumbuh di daerah tropis Asia dan banyak ditanam di Indonesia, Malaysia, dan Thailand sebagai bumbu penting.",
    characteristics: "Tanaman herba tegak yang bisa mencapai ketinggian 1,5–2 meter atau lebih, dengan daun panjang tersusun dua baris. Rimpangnya besar dan menjalar.",
    color: "Kulit cokelat kemerahan hingga kekuningan dengan cincin yang lebih pucat; daging putih kekuningan.",
    shape: "Rimpang tebal, memanjang, bercabang, dengan ruas cincin yang jelas.",
    texture: "Keras, liat, dan berserat sehingga biasanya dimemarkan, bukan dimakan.",
    aroma: "Segar, sedikit seperti pinus atau sitrus.",
    taste: "Pedas tajam dan sedikit pahit.",
    partUsed: "Rimpang.",
    uses: "Dimemarkan atau diiris lalu dimasukkan ke dalam kuah, santan, atau bumbu halus untuk menambah aroma segar.",
    foods: ["Soto", "Rawon", "Gulai", "Rendang", "Opor", "Ayam bumbu kuning"],
    drinks: [],
    drinksNote: "Lengkuas lebih sering dipakai sebagai bumbu masak daripada minuman.",
    dailyUse: "Cukup digeprek (dimemarkan) lalu dimasukkan ke panci kuah. Biasanya disisihkan saat makan karena keras.",
    culturalValue: "Lengkuas (laos) menjadi bagian penting bumbu dasar masakan tradisional Nusantara, terutama hidangan berkuah dan bersantan yang sering hadir di acara keluarga.",
    history: "Seperti rempah rimpang lainnya, lengkuas lama dipakai masyarakat Asia Tenggara sebagai bumbu masak dan bahan ramuan, serta ikut diperdagangkan antarwilayah.",
    facts: [
      "Lengkuas disebut laos di Jawa dan laja di Sunda.",
      "Lengkuas hampir selalu dimemarkan (digeprek) agar aromanya keluar.",
      "Rimpang lengkuas biasanya jauh lebih besar dan lebih keras daripada jahe.",
      "Lengkuas juga dipakai dalam masakan Thailand, misalnya tom kha."
    ],
    howToTell: "Dibanding jahe, lengkuas lebih besar, lebih keras, dan punya cincin ruas yang jelas. Dibanding kencur, lengkuas jauh lebih besar dan lebih berserat.",
    clues: ["Rimpang besar, keras, dan berserat.", "Biasanya dimemarkan sebelum dimasukkan ke kuah.", "Bumbu penting pada soto dan rawon."],
    matchClue: "Rimpang keras berserat, bumbu soto",
    challenge: { q: "Mengapa lengkuas biasanya dimemarkan sebelum dimasak?", options: ["Agar aroma dan rasanya keluar", "Agar warnanya menjadi kuning", "Agar bisa dimakan langsung", "Agar rasanya menjadi manis"], answer: 0, explain: "Memarkan lengkuas membantu aroma dan rasanya keluar ke dalam masakan." }
  },
  {
    id: "serai",
    name: "Serai",
    scientificName: "Cymbopogon citratus",
    family: "Poaceae (rumput-rumputan)",
    otherNames: "Sereh; lemongrass (Inggris)",
    image: "assets/serai.jpg",
    puzzleImage: "assets/puzzle/serai.jpg",
    tint: "#8fae5c",
    category: "Batang Aromatik",
    group: "Batang",
    description: "Serai adalah tanaman rumput beraroma lemon yang segar. Bagian yang dipakai sebagai bumbu adalah pangkal batangnya, sementara daunnya juga bisa dimanfaatkan untuk aroma.",
    origin: "Diperkirakan berasal dari kawasan Asia Selatan dan Asia Tenggara.",
    distribution: "Tumbuh baik di daerah tropis dan sering ditanam di pekarangan rumah di Indonesia.",
    characteristics: "Tumbuh berumpun seperti rumput besar dengan daun panjang meruncing yang tepinya tajam. Tinggi rumpun bisa mencapai sekitar 1–1,5 meter.",
    color: "Pangkal batang putih kehijauan, kadang agak keunguan; daun hijau.",
    shape: "Pangkal batang menggembung dan berlapis-lapis seperti bawang daun.",
    texture: "Berserat dan liat; lapisan luar yang keras biasanya dibuang.",
    aroma: "Segar seperti lemon dan harum.",
    taste: "Segar dengan sedikit rasa sitrus; biasanya tidak dimakan langsung.",
    partUsed: "Pangkal batang dan daun.",
    uses: "Dimemarkan lalu dimasukkan ke masakan atau seduhan untuk memberi aroma segar dan membantu mengurangi bau amis.",
    foods: ["Soto", "Gulai", "Rendang", "Pepes ikan", "Ayam bakar bumbu", "Tom yum (Thailand)"],
    drinks: ["Wedang serai", "Teh serai", "Minuman rempah hangat"],
    dailyUse: "Mudah ditanam di pot atau pekarangan, lalu dipetik seperlunya untuk masakan atau diseduh.",
    culturalValue: "Serai hadir dalam banyak masakan Nusantara dan menjadi bagian dari tradisi tanaman pekarangan yang bermanfaat di rumah.",
    history: "Serai sudah lama dibudidayakan di Asia tropis sebagai bumbu dan bahan beraroma, dan kini ditanam di banyak negara.",
    facts: [
      "Serai bukan rimpang. Ia termasuk rumput-rumputan (Poaceae).",
      "Aroma lemon pada serai berasal dari senyawa sitral, bukan dari buah jeruk.",
      "Serai wangi (Cymbopogon nardus) dikenal sebagai sumber minyak sereh dan berbeda dari serai dapur.",
      "Serai sering dimemarkan agar aromanya keluar lebih kuat."
    ],
    howToTell: "Berbeda dari rempah lainnya, serai tidak tumbuh sebagai rimpang di bawah tanah, tetapi berupa rumpun batang dan daun seperti rumput dengan aroma lemon.",
    clues: ["Berbentuk batang berlapis seperti bawang daun, bukan rimpang.", "Aromanya segar seperti lemon.", "Sering dimemarkan untuk soto, gulai, atau wedang."],
    matchClue: "Harum lemon, pangkal batang dimemarkan",
    challenge: { q: "Serai termasuk golongan tumbuhan…", options: ["Rumput-rumputan", "Jahe-jahean", "Polong-polongan", "Palem-paleman"], answer: 0, explain: "Serai termasuk suku Poaceae, yaitu rumput-rumputan." }
  },
  {
    id: "temulawak",
    name: "Temulawak",
    scientificName: "Curcuma xanthorrhiza",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Koneng gede (Sunda); Javanese turmeric (Inggris)",
    image: "assets/temulawak.jpg",
    puzzleImage: "assets/puzzle/temulawak.jpg",
    tint: "#d9812b",
    category: "Rimpang Jamu",
    group: "Rimpang",
    description: "Temulawak adalah rimpang besar berdaging oranye-kekuningan yang berasa pahit. Rempah ini dikenal luas sebagai bahan jamu tradisional dan dianggap berasal dari Indonesia.",
    origin: "Dianggap berasal dari Indonesia, khususnya Pulau Jawa, lalu menyebar ke negara tetangga.",
    distribution: "Banyak ditanam di Indonesia, terutama di Jawa, dan juga dikenal di beberapa negara Asia Tenggara lainnya.",
    characteristics: "Tanaman herba berumpun setinggi sekitar 1–2 meter dengan daun lebar yang sering memiliki garis ungu di sepanjang tulang daunnya. Rimpang induknya besar dengan cabang rimpang di sekelilingnya.",
    color: "Kulit kuning kecokelatan; daging oranye-kekuningan hingga jingga tua.",
    shape: "Rimpang besar, tebal, dan bercabang; ukurannya lebih besar daripada kunyit.",
    texture: "Padat dan keras, sedikit berair saat diiris.",
    aroma: "Tajam dan khas.",
    taste: "Pahit.",
    partUsed: "Rimpang.",
    uses: "Diiris atau dikeringkan lalu direbus atau diseduh sebagai jamu, atau diolah menjadi serbuk dan minuman kemasan.",
    foods: [],
    foodsNote: "Temulawak lebih sering diolah menjadi minuman jamu daripada dipakai sebagai bumbu masak.",
    drinks: ["Jamu temulawak", "Wedang temulawak", "Minuman temulawak instan"],
    dailyUse: "Biasanya dibeli sebagai irisan kering atau serbuk untuk diseduh di rumah.",
    culturalValue: "Temulawak adalah salah satu bahan jamu Indonesia. Budaya jamu (kesehatan dan kebugaran) sendiri diakui UNESCO sebagai Warisan Budaya Takbenda pada 2023.",
    history: "Temulawak telah lama dimanfaatkan masyarakat Jawa dalam ramuan tradisional dan menjadi salah satu tanaman jamu penting di Indonesia.",
    facts: [
      "Temulawak sekerabat dengan kunyit karena sama-sama marga Curcuma.",
      "Rimpangnya lebih besar daripada kunyit dan rasanya lebih pahit.",
      "Dalam bahasa Sunda, temulawak disebut koneng gede, artinya kunyit besar.",
      "Temulawak dianggap sebagai tanaman asli Indonesia."
    ],
    howToTell: "Dibanding kunyit, temulawak lebih besar, dagingnya lebih jingga tua, dan rasanya lebih pahit. Dibanding jahe, temulawak tidak pedas dan jauh lebih oranye.",
    clues: ["Rimpang besar berdaging oranye-kekuningan.", "Rasanya pahit.", "Bahan jamu yang dianggap asli Indonesia."],
    matchClue: "Rimpang besar berasa pahit, bahan jamu",
    challenge: { q: "Dibanding kunyit, temulawak umumnya…", options: ["Lebih besar dan lebih pahit", "Lebih kecil dan manis", "Berwarna putih bersih", "Berupa biji kecil"], answer: 0, explain: "Rimpang temulawak lebih besar dan rasanya lebih pahit daripada kunyit." }
  },
  {
    id: "kapulaga",
    name: "Kapulaga",
    scientificName: "Elettaria cardamomum",
    family: "Zingiberaceae (jahe-jahean)",
    otherNames: "Kapol (Sunda); cardamom (Inggris)",
    image: "assets/kapulaga.jpg",
    puzzleImage: "assets/puzzle/kapulaga.jpg",
    tint: "#7aa361",
    category: "Buah Aromatik",
    group: "Buah/Biji",
    description: "Kapulaga adalah rempah harum yang diambil dari buah polong kecil berwarna hijau berisi biji-biji hitam mungil. Aromanya manis, hangat, dan wangi.",
    origin: "Berasal dari India bagian selatan dan sekitarnya, termasuk Sri Lanka.",
    distribution: "Kini ditanam di beberapa negara tropis. Di Indonesia juga dikenal kapulaga lokal (kapulaga jawa, Amomum compactum) yang mirip.",
    characteristics: "Tanaman herba tinggi sekitar 2–4 meter dengan daun panjang. Bunga dan buahnya tumbuh pada tangkai dekat permukaan tanah.",
    color: "Polong hijau (dapat memudar menjadi hijau pucat setelah dikeringkan); biji cokelat kehitaman.",
    shape: "Polong kecil berbentuk lonjong, berisi biji-biji kecil bersudut.",
    texture: "Kulit polong tipis dan berserat; biji keras dan kecil.",
    aroma: "Harum, manis, dan hangat dengan sentuhan segar.",
    taste: "Pedas manis hangat dengan sensasi segar.",
    partUsed: "Buah (polong) dan biji.",
    uses: "Biji atau polong utuh digeprek lalu dimasak bersama makanan atau diseduh. Sering dipakai pada hidangan berkuah, nasi berbumbu, kue, dan minuman.",
    foods: ["Kari dan gulai", "Nasi kebuli", "Kue dan roti berbumbu"],
    drinks: ["Kopi kapulaga", "Teh rempah (chai)", "Wedang rempah"],
    dailyUse: "Cukup beberapa butir karena aromanya kuat. Biasanya disimpan utuh agar wanginya awet.",
    culturalValue: "Kapulaga banyak dipakai pada masakan dan minuman rempah di berbagai budaya, dari Asia Selatan hingga Timur Tengah dan Nusantara, serta kerap hadir pada sajian istimewa.",
    history: "Kapulaga sudah diperdagangkan sejak zaman kuno, termasuk lewat jalur dagang dari India menuju Timur Tengah dan Eropa.",
    facts: [
      "Kapulaga sering dijuluki ratu rempah (queen of spices).",
      "Kapulaga sering disebut sebagai salah satu rempah termahal di dunia, setelah saffron dan vanili.",
      "Kapulaga sekeluarga dengan jahe, kunyit, dan lengkuas.",
      "Yang dipakai adalah buah dan bijinya, bukan rimpangnya seperti kerabat-kerabatnya."
    ],
    howToTell: "Berbeda dari rempah rimpang, kapulaga berupa polong kecil hijau berisi biji hitam, bukan akar atau rimpang.",
    clues: ["Berupa polong kecil berwarna hijau.", "Berisi biji-biji hitam mungil yang wangi.", "Dijuluki ratu rempah."],
    matchClue: "Biji kecil dalam polong hijau",
    challenge: { q: "Bagian kapulaga yang digunakan adalah…", options: ["Buah dan biji", "Rimpang", "Akar", "Kulit batang"], answer: 0, explain: "Kapulaga dimanfaatkan dari buah (polong) dan bijinya." }
  }
];

const getSpice = (id) => spices.find((s) => s.id === id);

/* =========================================================
   QUIZ DATA (bank soal 22 butir; tiap sesi diambil 10 acak)
   ========================================================= */
const quizBank = [
  { category: "Nama Rempah", difficulty: "Mudah", image: "jahe", q: "Rempah apakah yang terlihat pada foto ini?", options: ["Jahe", "Kunyit", "Kencur", "Lengkuas"], answer: "Jahe", explain: "Jahe berimpang bercabang seperti jari-jari, berkulit cokelat muda, dan berasa pedas hangat." },
  { category: "Nama Rempah", difficulty: "Mudah", image: "kunyit", q: "Rempah apakah yang terlihat pada foto ini?", options: ["Kunyit", "Jahe", "Temulawak", "Kencur"], answer: "Kunyit", explain: "Kunyit mudah dikenali dari daging rimpangnya yang kuning-oranye cerah." },
  { category: "Nama Rempah", difficulty: "Sedang", image: "serai", q: "Rempah apakah yang terlihat pada foto ini?", options: ["Serai", "Lengkuas", "Kapulaga", "Kencur"], answer: "Serai", explain: "Serai berupa batang berlapis seperti bawang daun dan beraroma lemon." },
  { category: "Nama Rempah", difficulty: "Sedang", image: "kapulaga", q: "Rempah apakah yang terlihat pada foto ini?", options: ["Kapulaga", "Serai", "Kencur", "Temulawak"], answer: "Kapulaga", explain: "Kapulaga berupa polong kecil hijau yang berisi biji-biji hitam wangi." },
  { category: "Nama Rempah", difficulty: "Sedang", image: "kencur", q: "Rempah apakah yang terlihat pada foto ini?", options: ["Kencur", "Jahe", "Lengkuas", "Temulawak"], answer: "Kencur", explain: "Kencur berimpang kecil berdaging putih krem dengan aroma harum yang khas." },
  { category: "Nama Ilmiah", difficulty: "Sedang", q: "Nama ilmiah kunyit adalah…", options: ["Curcuma longa", "Zingiber officinale", "Alpinia galanga", "Kaempferia galanga"], answer: "Curcuma longa", explain: "Kunyit bernama ilmiah Curcuma longa. Zingiber officinale adalah jahe." },
  { category: "Nama Ilmiah", difficulty: "Sedang", q: "Zingiber officinale adalah nama ilmiah dari…", options: ["Jahe", "Kunyit", "Kencur", "Serai"], answer: "Jahe", explain: "Zingiber officinale adalah nama ilmiah jahe." },
  { category: "Nama Ilmiah", difficulty: "Sulit", q: "Alpinia galanga adalah nama ilmiah dari…", options: ["Lengkuas", "Kencur", "Temulawak", "Kapulaga"], answer: "Lengkuas", explain: "Alpinia galanga adalah lengkuas, sedangkan kencur bernama Kaempferia galanga." },
  { category: "Pemanfaatan", difficulty: "Mudah", q: "Rempah apa yang memberi warna kuning pada nasi kuning?", options: ["Kunyit", "Jahe", "Serai", "Kapulaga"], answer: "Kunyit", explain: "Pigmen kurkumin pada kunyit memberi warna kuning-oranye pada nasi kuning." },
  { category: "Bagian Tanaman", difficulty: "Sedang", q: "Bagian serai yang paling sering dipakai sebagai bumbu masak adalah…", options: ["Pangkal batang", "Akar", "Biji", "Bunga"], answer: "Pangkal batang", explain: "Pangkal batang serai dimemarkan lalu dimasukkan ke masakan atau seduhan." },
  { category: "Aroma", difficulty: "Mudah", q: "Aroma serai paling mirip dengan…", options: ["Lemon yang segar", "Kopi", "Coklat", "Kayu manis"], answer: "Lemon yang segar", explain: "Serai (lemongrass) beraroma segar seperti lemon karena senyawa sitral." },
  { category: "Bagian Tanaman", difficulty: "Sedang", q: "Bagian kapulaga yang digunakan adalah…", options: ["Buah dan biji", "Rimpang", "Akar", "Kulit batang"], answer: "Buah dan biji", explain: "Kapulaga dimanfaatkan dari buah (polong) dan bijinya." },
  { category: "Minuman", difficulty: "Mudah", q: "Jamu apakah yang bahan utamanya adalah kencur?", options: ["Beras kencur", "Kunyit asam", "Temulawak", "Wedang serai"], answer: "Beras kencur", explain: "Beras kencur adalah jamu tradisional dengan kencur sebagai bahan utamanya." },
  { category: "Ciri-ciri", difficulty: "Sedang", q: "Rempah rimpang besar berasa pahit yang dianggap asli Indonesia dan sering menjadi jamu adalah…", options: ["Temulawak", "Jahe", "Kencur", "Kapulaga"], answer: "Temulawak", explain: "Temulawak dianggap berasal dari Indonesia dan dikenal sebagai bahan jamu berasa pahit." },
  { category: "Makanan", difficulty: "Sedang", q: "Mengapa lengkuas biasanya dimemarkan sebelum dimasak?", options: ["Agar aroma dan rasanya keluar", "Agar warnanya menjadi kuning", "Agar bisa dimakan langsung", "Agar rasanya menjadi manis"], answer: "Agar aroma dan rasanya keluar", explain: "Lengkuas keras dan berserat, jadi dimemarkan agar aromanya keluar ke dalam kuah." },
  { category: "Ciri-ciri", difficulty: "Sulit", q: "Jahe, kunyit, kencur, lengkuas, dan kapulaga termasuk dalam suku…", options: ["Zingiberaceae (jahe-jahean)", "Poaceae (rumput-rumputan)", "Fabaceae (polong-polongan)", "Myrtaceae (jambu-jambuan)"], answer: "Zingiberaceae (jahe-jahean)", explain: "Kelimanya satu suku Zingiberaceae. Serai berbeda: ia termasuk rumput-rumputan (Poaceae)." },
  { category: "Ciri-ciri", difficulty: "Sedang", q: "Dari rempah berikut, manakah yang BUKAN rimpang?", options: ["Serai", "Jahe", "Kunyit", "Lengkuas"], answer: "Serai", explain: "Serai berupa rumpun batang dan daun, bukan rimpang yang tumbuh di bawah tanah." },
  { category: "Warna", difficulty: "Sulit", q: "Zat warna alami yang membuat kunyit berwarna kuning-oranye adalah…", options: ["Kurkumin", "Klorofil", "Antosianin", "Gingerol"], answer: "Kurkumin", explain: "Kurkumin adalah pigmen kuning-oranye pada kunyit. Klorofil membuat daun hijau." },
  { category: "Fakta Menarik", difficulty: "Sulit", q: "Rasa pedas hangat pada jahe terutama berasal dari senyawa…", options: ["Gingerol", "Kurkumin", "Sitral", "Klorofil"], answer: "Gingerol", explain: "Gingerol adalah senyawa yang memberi rasa pedas hangat pada jahe." },
  { category: "Fakta Menarik", difficulty: "Mudah", q: "Kapulaga sering dijuluki…", options: ["Ratu rempah", "Raja bumbu", "Si pahit", "Emas hijau"], answer: "Ratu rempah", explain: "Kapulaga dijuluki ratu rempah (queen of spices) karena aromanya yang harum." },
  { category: "Budaya", difficulty: "Mudah", q: "Daerah di Indonesia yang dikenal sebagai Kepulauan Rempah adalah…", options: ["Maluku", "Bali", "Kalimantan", "Nusa Tenggara Timur"], answer: "Maluku", explain: "Maluku dikenal sebagai Kepulauan Rempah karena terkenal sebagai penghasil cengkeh dan pala." },
  { category: "Lingkungan", difficulty: "Mudah", q: "Salah satu cara menjaga rempah tetap lestari di lingkungan rumah adalah…", options: ["Menanamnya di pot atau pekarangan", "Membuang sisa rempah ke selokan", "Mencabut semua tanaman di halaman", "Membakar daun rempah"], answer: "Menanamnya di pot atau pekarangan", explain: "Menanam rempah di pot atau pekarangan menyediakan bumbu segar dan menghijaukan rumah." },
  { category: "Minuman", difficulty: "Mudah", q: "Bandrek, sekoteng, dan wedang sama-sama sering memakai rempah…", options: ["Jahe", "Kencur", "Kapulaga", "Temulawak"], answer: "Jahe", explain: "Jahe memberi rasa pedas hangat pada minuman seperti bandrek, sekoteng, dan wedang jahe." }
];

/* MITOS ATAU FAKTA DATA */
const mythBank = [
  { s: "Jahe merupakan tanaman yang dimanfaatkan bagian rimpangnya.", fact: true, e: "Fakta. Rimpang jahe adalah bagian yang dipakai sebagai bumbu dan minuman." },
  { s: "Serai termasuk rempah rimpang seperti jahe.", fact: false, e: "Mitos. Serai adalah rumput-rumputan; yang dipakai pangkal batang dan daunnya." },
  { s: "Warna kuning pada nasi kuning berasal dari kunyit.", fact: true, e: "Fakta. Kurkumin pada kunyit memberi warna kuning-oranye." },
  { s: "Bagian kapulaga yang dipakai adalah akarnya.", fact: false, e: "Mitos. Yang dipakai adalah buah (polong) dan bijinya." },
  { s: "Semua rempah hanya bisa tumbuh di Indonesia.", fact: false, e: "Mitos. Banyak rempah tumbuh di berbagai negara tropis, misalnya kapulaga yang berasal dari India." },
  { s: "Jahe dan lengkuas masih satu keluarga tumbuhan (Zingiberaceae).", fact: true, e: "Fakta. Keduanya anggota suku jahe-jahean." },
  { s: "Temulawak dan kunyit adalah dua nama untuk rempah yang sama persis.", fact: false, e: "Mitos. Keduanya sekerabat tetapi beda spesies; temulawak lebih besar dan lebih pahit." },
  { s: "Kencur adalah bahan utama jamu beras kencur.", fact: true, e: "Fakta. Beras kencur dibuat dari kencur dan beras." },
  { s: "Rempah hanya bisa dipakai untuk masakan, tidak untuk minuman.", fact: false, e: "Mitos. Rempah juga dipakai dalam minuman seperti wedang jahe, bandrek, dan jamu." },
  { s: "Nama ilmiah jahe adalah Zingiber officinale.", fact: true, e: "Fakta. Zingiber officinale adalah nama ilmiah jahe." },
  { s: "Maluku dikenal sebagai Kepulauan Rempah.", fact: true, e: "Fakta. Maluku terkenal sejak lama sebagai penghasil cengkeh dan pala." },
  { s: "Serai beraroma segar seperti lemon.", fact: true, e: "Fakta. Itulah sebabnya serai dalam bahasa Inggris disebut lemongrass." },
  { s: "Bagian dalam kunyit berwarna putih bersih.", fact: false, e: "Mitos. Daging kunyit berwarna kuning-oranye cerah." },
  { s: "Lengkuas biasanya dimemarkan agar aromanya keluar.", fact: true, e: "Fakta. Lengkuas keras dan berserat, jadi dimemarkan sebelum dimasukkan ke masakan." }
];

/* DATA TAMBAHAN: Pernah sadar nggak, fakta umum, ... */
const flipFacts = [
  { q: "Pernah sadar nggak? Warna kuning pada nasi kuning berasal dari rempah apa?", a: "Dari kunyit. Pigmen kurkumin di dalam rimpangnya memberi warna kuning-oranye alami." },
  { q: "Pernah sadar nggak? Serai wangi seperti lemon, tapi ia bukan jeruk. Lalu ia termasuk tumbuhan apa?", a: "Serai termasuk rumput-rumputan. Aroma lemonnya berasal dari senyawa sitral." },
  { q: "Pernah sadar nggak? Jahe, kunyit, kencur, dan lengkuas ternyata masih satu keluarga.", a: "Mereka sama-sama suku Zingiberaceae atau jahe-jahean, begitu juga temulawak dan kapulaga." },
  { q: "Pernah sadar nggak? Kapulaga punya julukan istimewa di dunia rempah. Apa itu?", a: "Ratu rempah (queen of spices), karena aromanya yang harum dan manis." },
  { q: "Pernah sadar nggak? Pulau-pulau di Indonesia bagian timur ini dulu jadi tujuan pelayaran dunia karena rempah.", a: "Itu Kepulauan Maluku, yang dijuluki Kepulauan Rempah." }
];

const extraFacts = [
  { text: "Maluku dijuluki Kepulauan Rempah karena sejak lama terkenal sebagai penghasil cengkeh dan pala.", tag: "Sejarah" },
  { text: "Jahe, kunyit, kencur, lengkuas, temulawak, dan kapulaga adalah anggota suku Zingiberaceae (jahe-jahean).", tag: "Biologi" },
  { text: "Serai adalah satu-satunya dari tujuh rempah di situs ini yang termasuk rumput-rumputan.", tag: "Biologi" },
  { text: "Budaya jamu Indonesia diakui UNESCO sebagai Warisan Budaya Takbenda pada tahun 2023.", tag: "Budaya" },
  { text: "Menanam rempah di pot atau pekarangan membuat bumbu segar selalu dekat dengan dapur.", tag: "Lingkungan" }
];

/* =========================================================
   GLOBAL STATE
   ========================================================= */
const STORAGE_KEY = "literasiRempah.v1";
const QUIZ_LENGTH = 10;
const QUIZ_SECONDS = 25;
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const defaultState = () => ({
  xp: 0,
  level: 1,
  explored: [],
  games: { puzzle: 0, guess: 0, memory: 0, match: 0, word: 0, myth: 0 },
  badges: [],
  quizBest: null,
  quizPlays: 0
});
let state = defaultState();
let activeGame = "puzzle";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pad = (n) => String(n).padStart(2, "0");
const fmtTime = (s) => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
const firstSentence = (t) => t.split(". ")[0].replace(/\.$/, "") + ".";
const GENERIC_PH = "FOTO REMPAH BELUM TERSEDIA";

/* Foto asli dengan placeholder otomatis bila file belum ada */
function photo(s, opts = {}) {
  const label = opts.label || `FOTO ASLI ${s.name.toUpperCase()}`;
  const alt = opts.alt || `Foto asli ${s.name}`;
  return `<span class="photo ${opts.cls || ""}" style="--tint:${s.tint}"><img src="${s.image}" alt="${alt}" loading="${opts.eager ? "eager" : "lazy"}" onerror="photoFail(this)"><span class="ph">${label}</span></span>`;
}
function photoFail(img) {
  if (img && img.parentElement) img.parentElement.classList.add("missing");
}

/* =========================================================
   LOCAL STORAGE
   ========================================================= */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
    const d = defaultState();
    state = { ...d, ...p, games: { ...d.games, ...(p.games || {}) } };
    state.explored = Array.isArray(state.explored) ? state.explored.filter((id) => getSpice(id)) : [];
    state.badges = Array.isArray(state.badges) ? state.badges : [];
    state.xp = Number(state.xp) || 0;
  } catch (e) {
    state = defaultState();
  }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* penyimpanan tidak tersedia; situs tetap berjalan */
  }
}
function resetState() {
  state = defaultState();
  saveState();
  refreshProgressUI();
  toast("Progres sudah direset. Selamat menjelajah lagi!");
}

/* =========================================================
   TOAST
   ========================================================= */
function toast(msg, type = "info") {
  const box = $("#toasts");
  if (!box) return;
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.textContent = msg;
  box.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 400);
  }, 3600);
  while (box.children.length > 4) box.firstChild.remove();
}

/* =========================================================
   LEVEL SYSTEM
   ========================================================= */
const LEVELS = [
  { lv: 1, name: "Pemula", min: 0 },
  { lv: 2, name: "Penjelajah", min: 50 },
  { lv: 3, name: "Pecinta Rempah", min: 150 },
  { lv: 4, name: "Ahli Rempah", min: 300 },
  { lv: 5, name: "Master Rempah", min: 500 }
];
function levelInfo(xp) {
  let cur = LEVELS[0];
  LEVELS.forEach((l) => { if (xp >= l.min) cur = l; });
  const next = LEVELS[cur.lv] || null;
  const pct = next ? Math.min(100, Math.round(((xp - cur.min) / (next.min - cur.min)) * 100)) : 100;
  return { cur, next, pct, toNext: next ? next.min - xp : 0 };
}

/* =========================================================
   XP SYSTEM
   ========================================================= */
function addXP(amount) {
  if (!amount) return;
  const before = levelInfo(state.xp).cur.lv;
  state.xp += amount;
  const info = levelInfo(state.xp);
  state.level = info.cur.lv;
  saveState();
  refreshProgressUI();
  if (info.cur.lv > before) {
    toast("⭐ Kamu naik level!", "success");
    setTimeout(() => showLevelUp(info.cur), 800);
  }
}
function showLevelUp(level) {
  $("#levelUpText").textContent = `Kamu sekarang adalah ${level.name}! (Level ${level.lv})`;
  $("#levelUp").hidden = false;
  document.body.classList.add("no-scroll");
  launchConfetti(2200);
  $("#levelUpClose").focus();
}
function closeLevelUp() {
  $("#levelUp").hidden = true;
  if ($("#spiceModal").hidden) document.body.classList.remove("no-scroll");
}
function renderXP() {
  const info = levelInfo(state.xp);
  $("#navXp").textContent = state.xp;
  $("#navLevel").textContent = `Level ${info.cur.lv} · ${info.cur.name}`;
  $("#navBar").style.width = info.pct + "%";
}

/* =========================================================
   BADGES
   ========================================================= */
const BADGES = [
  { id: "first", icon: "🌱", name: "First Explorer", desc: "Pertama kali membuka detail rempah." },
  { id: "puzzle", icon: "🧩", name: "Puzzle Master", desc: "Menyelesaikan puzzle." },
  { id: "detective", icon: "🔎", name: "Rempah Detective", desc: "Menyelesaikan Tebak Rempah." },
  { id: "memory", icon: "🧠", name: "Memory Master", desc: "Menyelesaikan Memory." },
  { id: "champion", icon: "🏆", name: "Quiz Champion", desc: "Mendapatkan nilai sempurna." },
  { id: "explorer", icon: "🌿", name: "Spice Explorer", desc: "Mengeksplorasi semua 7 rempah." }
];
function awardBadge(id) {
  if (state.badges.includes(id)) return;
  state.badges.push(id);
  saveState();
  renderBadges();
  toast("🏆 Badge baru terbuka!", "success");
}
function renderBadges() {
  const grid = $("#badgeGrid");
  if (!grid) return;
  grid.innerHTML = BADGES.map((b) => {
    const on = state.badges.includes(b.id);
    return `<li class="badge ${on ? "on" : "off"}"><span class="b-ico" aria-hidden="true">${b.icon}</span><strong>${b.name}</strong><small>${b.desc}</small><span class="b-state">${on ? "✓ Diperoleh" : "Belum diperoleh"}</span></li>`;
  }).join("");
}
function finishGame(key, xp, msg) {
  state.games[key] = (state.games[key] || 0) + 1;
  saveState();
  if (msg) toast(msg, "success");
  addXP(xp);
  refreshProgressUI();
  launchConfetti();
}

/* Dashboard */
function renderDashboard() {
  const info = levelInfo(state.xp);
  $("#dashLevel").textContent = `Level ${info.cur.lv} · ${info.cur.name}`;
  $("#dashXpText").textContent = `${state.xp} XP`;
  $("#dashBar").style.width = info.pct + "%";
  $("#dashToNext").textContent = info.next ? `${info.toNext} XP menuju Level ${info.next.lv} (${info.next.name})` : "Level tertinggi tercapai. Kamu Master Rempah!";
  $("#dashExplored").textContent = `${state.explored.length}/${spices.length}`;
  $("#dashGames").textContent = Object.values(state.games).reduce((a, b) => a + b, 0);
  $("#dashQuiz").textContent = state.quizBest === null ? "—" : state.quizBest;
  const nothing = state.xp === 0 && state.badges.length === 0 && state.explored.length === 0;
  $("#dashEmpty").hidden = !nothing;
}
function refreshProgressUI() {
  renderXP();
  renderDashboard();
  renderBadges();
  renderSpiceGrid();
}

/* =========================================================
   CONFETTI
   ========================================================= */
let confettiRaf = null;
function launchConfetti(ms = 2800) {
  if (reduceMotion) return;
  const canvas = $("#confetti");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const colors = ["#D9A441", "#C97932", "#A8C39B", "#3F6B4F", "#F6F0DF", "#704C35"];
  const parts = Array.from({ length: 140 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.4,
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 4,
    size: 6 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  const start = performance.now();
  if (confettiRaf) cancelAnimationFrame(confettiRaf);
  const frame = (now) => {
    const t = now - start;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    parts.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, 1 - Math.max(0, t - ms + 800) / 800);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });
    if (t < ms) confettiRaf = requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };
  confettiRaf = requestAnimationFrame(frame);
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function initNavigation() {
  const toggle = $("#navToggle");
  const nav = $("#mainNav");
  const closeNav = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Buka menu"); };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });
  $$("#mainNav a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !e.target.closest(".navbar")) closeNav();
  });

  const links = $$("#mainNav a");
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => {
          const on = a.getAttribute("href") === "#" + en.target.id;
          a.classList.toggle("active", on);
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    targets.forEach((t) => spy.observe(t));
  }
}

/* =========================================================
   SCROLL EFFECT
   ========================================================= */
function initScrollEffects() {
  const nav = $("#navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Count-up statistik
  const nums = $$(".stat-num[data-count]");
  const runCount = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const dur = 1100;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const io2 = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => { if (en.isIntersecting) { runCount(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach((n) => io2.observe(n));
  }

  // Parallax ringan pada kolase hero
  const hero = $("#beranda");
  if (hero && !reduceMotion && window.matchMedia("(pointer:fine)").matches) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      $$(".cwrap").forEach((w) => {
        const d = Number(w.dataset.depth) || 10;
        w.style.transform = `translate3d(${(dx * d).toFixed(1)}px,${(dy * d).toFixed(1)}px,0)`;
      });
    });
    hero.addEventListener("mouseleave", () => $$(".cwrap").forEach((w) => (w.style.transform = "")));
  }
}

/* Kolase hero */
function renderCollage() {
  const layout = [
    { id: "jahe", l: 1, t: 2, r: -6, depth: 14, dur: 7, delay: 0 },
    { id: "kunyit", l: 34, t: 0, r: 3, depth: 22, dur: 8, delay: -2 },
    { id: "kencur", l: 67, t: 5, r: -3, depth: 10, dur: 6.5, delay: -4 },
    { id: "lengkuas", l: 0, t: 31, r: 5, depth: 18, dur: 7.5, delay: -1 },
    { id: "temulawak", l: 35, t: 29, r: -4, depth: 28, dur: 9, delay: -3 },
    { id: "serai", l: 68, t: 34, r: 5, depth: 12, dur: 7, delay: -5 },
    { id: "kapulaga", l: 18, t: 61, r: -3, depth: 20, dur: 8.5, delay: -2.5 }
  ];
  $("#heroCollage").innerHTML = layout.map((c) => {
    const s = getSpice(c.id);
    return `<div class="cwrap" data-depth="${c.depth}" style="left:${c.l}%;top:${c.t}%"><button class="ccard" data-open-spice="${s.id}" style="--r:${c.r}deg;--dur:${c.dur}s;--delay:${c.delay}s" aria-label="Buka detail ${s.name}">${photo(s, { eager: true })}<span class="cap">${s.name}</span></button></div>`;
  }).join("") + `<div class="collage-badge" aria-hidden="true"><span>7 rempah<br>foto asli</span></div>`;
}

/* Pernah sadar nggak */
function renderFlipCards() {
  $("#flipGrid").innerHTML = flipFacts.map((f, i) => `
    <button class="flip reveal" style="--d:${i * 0.06}s" aria-pressed="false">
      <span class="flip-inner">
        <span class="flip-face flip-front"><small>Pernah sadar nggak?</small><span class="q">${f.q.replace("Pernah sadar nggak? ", "")}</span><small>Ketuk untuk jawaban</small></span>
        <span class="flip-face flip-back"><small>Jawabannya</small><p>${f.a}</p><small>Ketuk untuk menutup</small></span>
      </span>
    </button>`).join("");
  $$("#flipGrid .flip").forEach((b) => b.addEventListener("click", () => {
    b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true"));
  }));
}

/* Kartu "Kenapa belajar rempah" */
function initWhyCards() {
  $$(".why-btn").forEach((btn) => btn.addEventListener("click", () => {
    const extra = document.getElementById(btn.getAttribute("aria-controls"));
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    extra.hidden = open;
  }));
}

/* Rempah di sekitar kita */
function initPantry() {
  $("#pantryList").innerHTML = spices.map((s) => `<label class="pantry-item"><input type="checkbox" value="${s.id}"> ${s.name}</label>`).join("");
  $("#pantryList").addEventListener("change", () => {
    const n = $$("#pantryList input:checked").length;
    const msg = n === 0 ? "Belum ada yang dicentang. Tidak apa-apa, coba tanyakan ke orang di rumah!"
      : n < 3 ? `Kamu menemukan ${n} dari 7 rempah. Awal yang bagus!`
      : n < 7 ? `Wah, ${n} dari 7 rempah ada di rumahmu. Dapurmu kaya rempah!`
      : "Semua 7 rempah ada di rumahmu. Dapurmu seperti museum rempah!";
    $("#pantryResult").textContent = msg;
  });
}

/* =========================================================
   SPICE EXPLORER
   ========================================================= */
function renderSpiceGrid() {
  const grid = $("#spiceGrid");
  if (!grid) return;
  grid.innerHTML = spices.map((s, i) => {
    const done = state.explored.includes(s.id);
    return `<article class="spice-card reveal in" data-open-spice="${s.id}">
      ${photo(s)}
      <div class="sc-body">
        <span class="tag">${s.category}</span>
        <h3>${s.name}</h3>
        <p class="sc-sci">${s.scientificName}</p>
        <p class="sc-desc">${firstSentence(s.description)}</p>
        <div class="sc-foot">
          <button class="btn btn-dark small" data-open-spice="${s.id}" aria-label="Pelajari ${s.name}">Pelajari</button>
          ${done ? `<span class="sc-done">✓ Sudah dijelajahi</span>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
}

function markExplored(id) {
  if (state.explored.includes(id)) return;
  state.explored.push(id);
  saveState();
  toast("🌿 Rempah baru sudah kamu jelajahi! +5 XP", "success");
  addXP(5);
  awardBadge("first");
  if (state.explored.length === spices.length) awardBadge("explorer");
  refreshProgressUI();
}

/* =========================================================
   SPICE DETAIL
   ========================================================= */
const detail = { id: null, tab: "kenali", opener: null };

function openSpice(id, opener) {
  const s = getSpice(id);
  if (!s) return;
  detail.id = id;
  detail.tab = "kenali";
  if (opener) detail.opener = opener;
  renderDetailHeader(s);
  setDetailTab("kenali", false);
  $("#spiceModal").hidden = false;
  document.body.classList.add("no-scroll");
  $(".modal-panel").scrollTop = 0;
  requestAnimationFrame(() => $("#spiceClose").focus());
  markExplored(id);
}
function closeSpice() {
  $("#spiceModal").hidden = true;
  if ($("#levelUp").hidden) document.body.classList.remove("no-scroll");
  if (detail.opener && document.contains(detail.opener)) detail.opener.focus();
}
function renderDetailHeader(s) {
  $("#detailPhoto").innerHTML = `${photo(s, { eager: true })}<div class="quick"><span>${s.family.split(" (")[0]}</span><span>${s.group === "Buah/Biji" ? "Buah / biji" : s.group}</span><span>${s.category}</span></div>`;
  $("#detailCategory").textContent = s.category;
  $("#spiceModalTitle").textContent = s.name;
  $("#detailSci").textContent = s.scientificName;
}
function setDetailTab(tab, focus = true) {
  detail.tab = tab;
  $$("#detailTabs button").forEach((b) => {
    const on = b.dataset.tab === tab;
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
    if (on && focus) b.focus();
  });
  const s = getSpice(detail.id);
  const panel = $("#detailPanel");
  panel.setAttribute("aria-labelledby", "tab-" + tab);
  panel.innerHTML = tabRenderers[tab](s);
  panel.style.animation = "none";
  void panel.offsetWidth;
  panel.style.animation = "";
  if (tab === "fakta") bindChallenge(s);
}
const dlItem = (k, v, wide) => `<div class="info-item${wide ? " wide" : ""}"><dt>${k}</dt><dd>${v}</dd></div>`;
const pills = (arr, alt) => arr.map((x) => `<li class="pill${alt ? " alt" : ""}">${x}</li>`).join("");

const tabRenderers = {
  kenali: (s) => `
    <p>${s.description}</p>
    <dl class="info-list">
      ${dlItem("Nama ilmiah", `<i>${s.scientificName}</i>`)}
      ${dlItem("Suku", s.family)}
      ${dlItem("Nama lain", s.otherNames, true)}
      ${dlItem("Asal", s.origin, true)}
      ${dlItem("Persebaran", s.distribution, true)}
      ${dlItem("Bagian yang dipakai", s.partUsed, true)}
    </dl>`,
  ciri: (s) => `
    <p>${s.characteristics}</p>
    <dl class="info-list">
      ${dlItem("Warna", s.color)}
      ${dlItem("Bentuk", s.shape)}
      ${dlItem("Tekstur", s.texture)}
      ${dlItem("Aroma", s.aroma)}
      ${dlItem("Rasa", s.taste)}
      ${dlItem("Bagian yang dipakai", s.partUsed)}
    </dl>
    <div class="callout"><strong>Cara membedakan dengan rempah lain</strong>${s.howToTell}</div>`,
  guna: (s) => `
    <div><h4>Cara pemanfaatan</h4><p>${s.uses}</p></div>
    <div><h4>Contoh makanan</h4>${s.foods.length ? `<ul class="pill-list">${pills(s.foods)}</ul>` : `<p class="note">${s.foodsNote || "-"}</p>`}</div>
    <div><h4>Contoh minuman</h4>${s.drinks.length ? `<ul class="pill-list">${pills(s.drinks, true)}</ul>` : `<p class="note">${s.drinksNote || "-"}</p>`}</div>
    <div><h4>Penggunaan sehari-hari</h4><p>${s.dailyUse}</p></div>
    <p class="note">Rempah dan jamu bukan pengganti obat dari dokter. Tanyakan pada orang dewasa atau tenaga kesehatan bila ada keluhan.</p>`,
  budaya: (s) => `
    <div class="callout"><strong>Nilai budaya</strong>${s.culturalValue}</div>
    <div><h4>Sejarah dan latar belakang</h4><p>${s.history}</p></div>`,
  fakta: (s) => `
    <ol class="fact-list">${s.facts.map((f, i) => `<li><span class="n">${i + 1}</span><span>${f}</span></li>`).join("")}</ol>
    <div class="challenge" id="challengeBox">
      <h4>Tantangan mini</h4>
      <p>${s.challenge.q}</p>
      <div class="challenge-opts">${s.challenge.options.map((o, i) => `<button data-i="${i}">${o}</button>`).join("")}</div>
      <p class="out" id="challengeOut" aria-live="polite"></p>
    </div>`
};

function bindChallenge(s) {
  $$("#challengeBox .challenge-opts button").forEach((btn) => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.i);
    const ok = i === s.challenge.answer;
    $$("#challengeBox .challenge-opts button").forEach((b) => {
      b.disabled = true;
      const bi = Number(b.dataset.i);
      if (bi === s.challenge.answer) { b.classList.add("good"); b.textContent = "✓ " + b.textContent; }
      else if (bi === i) { b.classList.add("bad"); b.textContent = "✕ " + b.textContent; }
    });
    $("#challengeOut").textContent = (ok ? "✓ Tepat! " : "✕ Belum tepat. ") + s.challenge.explain;
  }));
}

function initDetailModal() {
  $("#spiceClose").addEventListener("click", closeSpice);
  $("#spiceModal .modal-backdrop").addEventListener("click", closeSpice);
  $("#detailTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-tab]");
    if (b) setDetailTab(b.dataset.tab);
  });
  $("#detailTabs").addEventListener("keydown", (e) => {
    const tabs = $$("#detailTabs button");
    const idx = tabs.findIndex((b) => b.dataset.tab === detail.tab);
    let n = null;
    if (e.key === "ArrowRight") n = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    if (n !== null) { e.preventDefault(); setDetailTab(tabs[n].dataset.tab); }
  });
  const go = (dir) => {
    const idx = spices.findIndex((s) => s.id === detail.id);
    openSpice(spices[(idx + dir + spices.length) % spices.length].id);
  };
  $("#detailPrev").addEventListener("click", () => go(-1));
  $("#detailNext").addEventListener("click", () => go(1));
  // Perangkap fokus sederhana
  $("#spiceModal").addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const f = $$("button:not([disabled]),[tabindex='0']", $(".modal-panel")).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* =========================================================
   FACT GENERATOR
   ========================================================= */
const factHistory = [];
function buildFactPool() {
  return spices.flatMap((s) => s.facts.map((f) => ({ text: f, tag: s.name, id: s.id }))).concat(extraFacts.map((f) => ({ ...f, id: null })));
}
function showRandomFact() {
  const pool = buildFactPool();
  const avoid = Math.min(10, pool.length - 1);
  const recent = factHistory.slice(-avoid);
  const choices = pool.filter((f) => !recent.includes(f.text));
  const pick = choices[Math.floor(Math.random() * choices.length)];
  factHistory.push(pick.text);
  const card = $("#factCard");
  card.innerHTML = `<p class="fact-tag">Fakta · ${pick.tag}</p><p class="fact-text">${pick.text}</p>${pick.id ? `<button class="btn btn-outline small" data-open-spice="${pick.id}">Pelajari ${pick.tag}</button>` : ""}`;
  card.classList.remove("pop");
  void card.offsetWidth;
  card.classList.add("pop");
}

/* =========================================================
   GAME MENU (semua game langsung terbuka)
   ========================================================= */
const gameInit = {};
function selectGame(key, focus) {
  if (!document.getElementById("game-" + key)) return;
  activeGame = key;
  $$(".game-tab").forEach((t) => {
    const on = t.dataset.game === key;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    if (on && focus) t.focus();
  });
  $$(".game-panel").forEach((p) => (p.hidden = p.id !== "game-" + key));
  if (gameInit[key]) gameInit[key]();
}
function initGameMenu() {
  const tabs = $$(".game-tab");
  tabs.forEach((t) => t.addEventListener("click", () => selectGame(t.dataset.game)));
  $("#gameMenu").addEventListener("keydown", (e) => {
    const idx = tabs.findIndex((t) => t.dataset.game === activeGame);
    let n = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (idx - 1 + tabs.length) % tabs.length;
    if (n !== null) { e.preventDefault(); selectGame(tabs[n].dataset.game, true); }
  });
}
const resultCard = (title, stats, xpText, again) => `
  <h4>${title}</h4>
  <div class="res-grid">${stats.map(([v, l]) => `<div><strong>${v}</strong><span>${l}</span></div>`).join("")}</div>
  <p><strong>${xpText}</strong></p>
  <div class="btn-row" style="margin-top:14px">${again}</div>`;

/* =========================================================
   PUZZLE GAME
   ========================================================= */
const puzzle = { spiceId: "jahe", size: 3, order: [], selected: null, moves: 0, hints: 0, seconds: 0, timer: null, done: false, img: null, token: 0 };
const imageCache = {};

function probeImage(src) {
  return new Promise((res) => {
    const im = new Image();
    im.onload = () => res({ ok: true, w: im.naturalWidth, h: im.naturalHeight });
    im.onerror = () => res({ ok: false });
    im.src = src;
  });
}
/* Placeholder digambar lewat canvas bila foto belum ada, agar puzzle tetap bisa dimainkan */
function makePlaceholderImage(s) {
  const c = document.createElement("canvas");
  c.width = c.height = 900;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, 900, 900);
  grad.addColorStop(0, s.tint);
  grad.addColorStop(1, "#183C2B");
  g.fillStyle = grad;
  g.fillRect(0, 0, 900, 900);
  const cols = ["rgba(246,240,223,.28)", "rgba(217,164,65,.35)", "rgba(168,195,155,.35)", "rgba(112,76,53,.3)"];
  for (let i = 0; i < 14; i++) {
    g.fillStyle = cols[i % cols.length];
    g.beginPath();
    g.arc((i * 211) % 900, (i * 337) % 900, 60 + ((i * 53) % 110), 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = "rgba(246,240,223,.35)";
  g.lineWidth = 14;
  for (let i = -900; i < 1800; i += 130) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 900, 900); g.stroke(); }
  g.fillStyle = "rgba(246,240,223,.92)";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = "800 80px 'Nunito Sans',sans-serif";
  g.fillText("FOTO ASLI", 450, 380);
  g.font = "800 120px 'Nunito Sans',sans-serif";
  g.fillText(s.name.toUpperCase(), 450, 510);
  return c.toDataURL("image/png");
}
async function getPuzzleImage(s) {
  if (imageCache[s.id]) return imageCache[s.id];
  for (const src of [s.puzzleImage, s.image]) {
    const r = await probeImage(src);
    if (r.ok && r.w && r.h) return (imageCache[s.id] = { src, ratio: r.w / r.h, real: true });
  }
  return (imageCache[s.id] = { src: makePlaceholderImage(s), ratio: 1, real: false });
}
/* Potongan foto dihitung dengan CSS (background-size/position), tanpa file potongan */
function tileBg(piece, n, ratio) {
  const row = Math.floor(piece / n), col = piece % n;
  const w = Math.max(ratio, 1) * n, h = Math.max(1 / ratio, 1) * n;
  const px = (((w - n) / 2 + col) / (w - 1)) * 100;
  const py = (((h - n) / 2 + row) / (h - 1)) * 100;
  return `background-size:${w * 100}% ${h * 100}%;background-position:${px}% ${py}%;`;
}
function initPuzzleControls() {
  $("#puzzleSpiceChips").innerHTML = spices.map((s) => `<button class="chip" data-id="${s.id}" aria-pressed="${s.id === puzzle.spiceId}">${s.name}</button>`).join("");
  $("#puzzleSpiceChips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    puzzle.spiceId = b.dataset.id;
    $$("#puzzleSpiceChips .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    newPuzzle();
  });
  $("#puzzleLevelChips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    puzzle.size = Number(b.dataset.size);
    $$("#puzzleLevelChips .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    newPuzzle();
  });
  $("#puzzleHintBtn").addEventListener("click", puzzleHint);
  $("#puzzleRestartBtn").addEventListener("click", newPuzzle);

  const board = $("#puzzleBoard");
  let dragFrom = null;
  board.addEventListener("click", (e) => {
    const t = e.target.closest(".ptile");
    if (t) puzzleSelect(Number(t.dataset.pos));
  });
  board.addEventListener("keydown", (e) => {
    const t = e.target.closest(".ptile");
    if (!t) return;
    const pos = Number(t.dataset.pos), n = puzzle.size;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); puzzleSelect(pos); return; }
    const moves = { ArrowRight: pos + 1, ArrowLeft: pos - 1, ArrowDown: pos + n, ArrowUp: pos - n };
    if (e.key in moves) {
      e.preventDefault();
      const to = moves[e.key];
      const sameRow = Math.floor(to / n) === Math.floor(pos / n);
      if (to >= 0 && to < n * n && (e.key === "ArrowUp" || e.key === "ArrowDown" || sameRow)) {
        const el = board.querySelector(`[data-pos="${to}"]`);
        if (el) el.focus();
      }
    }
  });
  board.addEventListener("dragstart", (e) => {
    const t = e.target.closest(".ptile");
    if (!t || puzzle.done) return;
    dragFrom = Number(t.dataset.pos);
    t.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    try { e.dataTransfer.setData("text/plain", String(dragFrom)); } catch (err) { /* abaikan */ }
  });
  board.addEventListener("dragover", (e) => { if (dragFrom !== null) e.preventDefault(); });
  board.addEventListener("drop", (e) => {
    e.preventDefault();
    const t = e.target.closest(".ptile");
    if (t && dragFrom !== null) puzzleSwap(dragFrom, Number(t.dataset.pos));
    dragFrom = null;
  });
  board.addEventListener("dragend", () => { dragFrom = null; $$(".ptile.dragging", board).forEach((x) => x.classList.remove("dragging")); });
}
async function newPuzzle() {
  clearInterval(puzzle.timer);
  puzzle.timer = null;
  const my = ++puzzle.token;
  const s = getSpice(puzzle.spiceId);
  const img = await getPuzzleImage(s);
  if (my !== puzzle.token) return;
  puzzle.img = img;
  const total = puzzle.size * puzzle.size;
  let o;
  do { o = shuffle([...Array(total).keys()]); } while (o.every((v, i) => v === i));
  Object.assign(puzzle, { order: o, selected: null, moves: 0, hints: 0, seconds: 0, done: false });
  $("#puzzleResult").hidden = true;
  $("#puzzlePreview").hidden = true;
  $("#puzzleHintBtn").disabled = false;
  renderPuzzleBoard();
  updatePuzzleStats();
}
function renderPuzzleBoard() {
  const { size, order, img } = puzzle;
  const board = $("#puzzleBoard");
  const hadFocus = board.contains(document.activeElement) ? document.activeElement.dataset.pos : null;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.setProperty("--img", `url("${img.src}")`);
  board.innerHTML = order.map((piece, pos) => {
    const ok = piece === pos;
    return `<div class="ptile${ok ? " ok" : ""}${puzzle.selected === pos ? " sel" : ""}" role="button" tabindex="0" draggable="${!puzzle.done}" data-pos="${pos}" aria-label="Kepingan posisi ${pos + 1}${ok ? ", sudah di tempat yang benar" : ""}${puzzle.selected === pos ? ", terpilih" : ""}" style="${tileBg(piece, size, img.ratio)}"></div>`;
  }).join("");
  if (hadFocus !== null) { const el = board.querySelector(`[data-pos="${hadFocus}"]`); if (el) el.focus(); }
  $("#puzzlePreview").style.backgroundImage = `url("${img.src}")`;
}
function updatePuzzleStats() {
  const total = puzzle.size * puzzle.size;
  const right = puzzle.order.filter((v, i) => v === i).length;
  $("#pTime").textContent = fmtTime(puzzle.seconds);
  $("#pMoves").textContent = puzzle.moves;
  $("#pHints").textContent = 3 - puzzle.hints;
  $("#pProgressBar").style.width = (right / total) * 100 + "%";
  $("#pProgressText").textContent = `${right} dari ${total} kepingan tepat`;
}
function startPuzzleTimer() {
  if (puzzle.timer) return;
  puzzle.timer = setInterval(() => {
    if (activeGame === "puzzle" && !document.hidden && !puzzle.done) { puzzle.seconds++; updatePuzzleStats(); }
  }, 1000);
}
function puzzleSelect(pos) {
  if (puzzle.done) return;
  if (puzzle.selected === null) puzzle.selected = pos;
  else if (puzzle.selected === pos) puzzle.selected = null;
  else { puzzleSwap(puzzle.selected, pos); return; }
  renderPuzzleBoard();
}
function puzzleSwap(a, b) {
  if (puzzle.done || a === b) return;
  startPuzzleTimer();
  const o = puzzle.order;
  [o[a], o[b]] = [o[b], o[a]];
  puzzle.moves++;
  puzzle.selected = null;
  renderPuzzleBoard();
  updatePuzzleStats();
  if (o.every((v, i) => v === i)) finishPuzzle();
}
function puzzleHint() {
  if (puzzle.done || puzzle.hints >= 3) return;
  puzzle.hints++;
  const pv = $("#puzzlePreview");
  pv.hidden = false;
  clearTimeout(puzzleHint.t);
  puzzleHint.t = setTimeout(() => (pv.hidden = true), 2500);
  if (puzzle.hints >= 3) $("#puzzleHintBtn").disabled = true;
  updatePuzzleStats();
}
function finishPuzzle() {
  puzzle.done = true;
  clearInterval(puzzle.timer);
  puzzle.timer = null;
  renderPuzzleBoard();
  const base = { 3: 500, 4: 800, 5: 1200 }[puzzle.size];
  const score = Math.max(100, base * 2 - puzzle.seconds * 2 - puzzle.moves * 3 - puzzle.hints * 50);
  const res = $("#puzzleResult");
  res.innerHTML = resultCard("🎉 PUZZLE BERHASIL!", [[fmtTime(puzzle.seconds), "Waktu"], [puzzle.moves, "Langkah"], [score, "Skor"], ["+30", "XP"]], "Kamu mendapat +30 XP. Hebat!",
    `<button class="btn btn-dark" id="puzzleAgain">↻ Main Lagi</button><a class="btn btn-outline" href="#games" data-pick="puzzle">Pilih rempah lain</a>`);
  res.hidden = false;
  $("#puzzleAgain").addEventListener("click", newPuzzle);
  finishGame("puzzle", 30, "🎉 Puzzle selesai! +30 XP");
  awardBadge("puzzle");
  res.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
}
gameInit.puzzle = () => { if (!puzzle.order.length) newPuzzle(); };

/* =========================================================
   GUESS THE SPICE (Tebak Rempah)
   ========================================================= */
const guess = { list: [], i: 0, clues: 1, answered: false, score: 0, correct: 0, options: [] };
function guessStart() {
  guess.list = shuffle(spices).slice(0, 5);
  Object.assign(guess, { i: 0, score: 0, correct: 0 });
  renderGuessRound();
}
function renderGuessRound() {
  const s = guess.list[guess.i];
  guess.clues = 1;
  guess.answered = false;
  guess.options = shuffle([s, ...shuffle(spices.filter((x) => x.id !== s.id)).slice(0, 3)]);
  $("#guessArea").innerHTML = `
    <div class="game-bar"><span>Soal <b>${guess.i + 1}/${guess.list.length}</b></span><span>Skor <b id="gScore">${guess.score}</b></span></div>
    <div class="guess-wrap">
      <div class="guess-photo blur-1" id="gPhoto">${photo(s, { label: GENERIC_PH, alt: "Foto rempah yang harus ditebak" })}</div>
      <div>
        <h4>Petunjuk</h4>
        <ol class="clue-list" id="clueList"></ol>
        <button class="btn btn-ghost small" id="clueBtn">💡 Petunjuk berikutnya</button>
        <div class="opt-grid" id="guessOpts" role="group" aria-label="Pilihan jawaban">${guess.options.map((o) => `<button class="opt" data-id="${o.id}">${o.name}</button>`).join("")}</div>
        <div id="guessFb" aria-live="polite"></div>
        <div class="game-actions" id="guessNext"></div>
      </div>
    </div>`;
  renderClues();
  $("#clueBtn").addEventListener("click", () => {
    if (guess.clues < 3 && !guess.answered) { guess.clues++; renderClues(); }
  });
  $("#guessOpts").addEventListener("click", (e) => {
    const b = e.target.closest(".opt");
    if (b && !guess.answered) answerGuess(b.dataset.id);
  });
}
function renderClues() {
  const s = guess.list[guess.i];
  $("#clueList").innerHTML = s.clues.slice(0, guess.clues).map((c) => `<li>${c}</li>`).join("");
  $("#gPhoto").className = `guess-photo blur-${guess.clues}`;
  $("#clueBtn").hidden = guess.clues >= 3;
  $("#clueBtn").textContent = `💡 Petunjuk berikutnya (${guess.clues}/3)`;
}
function answerGuess(id) {
  const s = guess.list[guess.i];
  guess.answered = true;
  const ok = id === s.id;
  $$("#guessOpts .opt").forEach((b) => {
    b.disabled = true;
    if (b.dataset.id === s.id) { b.classList.add("good"); b.innerHTML = `<span class="mk">✓</span>${b.textContent}`; }
    else if (b.dataset.id === id) { b.classList.add("bad"); b.innerHTML = `<span class="mk">✕</span>${b.textContent}`; }
  });
  $("#gPhoto").className = "guess-photo";
  $("#clueBtn").hidden = true;
  const pts = ok ? 4 - guess.clues : 0;
  if (ok) { guess.correct++; guess.score += pts; addXP(5); }
  $("#gScore").textContent = guess.score;
  $("#guessFb").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? `✓ BENAR! +${pts} poin, +5 XP` : `✕ BELUM TEPAT. Jawaban yang benar: ${s.name}`}<small>${s.name} (${s.scientificName}). ${firstSentence(s.description)} Bagian yang dipakai: ${s.partUsed}</small></div>`;
  const last = guess.i === guess.list.length - 1;
  $("#guessNext").innerHTML = `<button class="btn btn-primary" id="guessNextBtn">${last ? "Lihat hasil" : "Lanjut →"}</button>`;
  $("#guessNextBtn").focus();
  $("#guessNextBtn").addEventListener("click", () => {
    if (last) finishGuess(); else { guess.i++; renderGuessRound(); }
  });
}
function finishGuess() {
  const xpGain = guess.correct * 5 + 20;
  $("#guessArea").innerHTML = `<div class="result-card">${resultCard("🔎 Misi Selesai!", [[`${guess.correct}/${guess.list.length}`, "Benar"], [guess.score, "Skor"], [`+${xpGain}`, "Total XP"]], "Kamu mendapat +20 XP untuk menyelesaikan game.", `<button class="btn btn-dark" id="guessAgain">↻ Main Lagi</button>`)}</div>`;
  $("#guessAgain").addEventListener("click", guessStart);
  finishGame("guess", 20, "🔎 Tebak Rempah selesai! +20 XP");
  awardBadge("detective");
}
gameInit.guess = () => { if (!$("#guessArea").children.length) guessStart(); };

/* =========================================================
   MEMORY GAME
   ========================================================= */
const mem = { cards: [], flipped: [], matched: 0, attempts: 0, seconds: 0, timer: null, lock: false, pairs: 6, done: false };
function memoryStart() {
  clearInterval(mem.timer);
  mem.timer = null;
  const pick = shuffle(spices).slice(0, mem.pairs);
  mem.cards = shuffle(pick.flatMap((s) => [{ s, k: 0 }, { s, k: 1 }]));
  Object.assign(mem, { flipped: [], matched: 0, attempts: 0, seconds: 0, lock: false, done: false });
  $("#memoryArea").innerHTML = `
    <div class="game-bar" aria-live="off"><span>Waktu <b id="mTime">00:00</b></span><span>Percobaan <b id="mTry">0</b></span><span>Pasangan <b id="mPairs">0/${mem.pairs}</b></span></div>
    <div class="mem-grid" id="memGrid">${mem.cards.map((c, i) => `
      <button class="mem-card" data-i="${i}" aria-label="Kartu ${i + 1}, tertutup">
        <span class="mem-inner"><span class="mem-face mem-front" aria-hidden="true">🌿</span><span class="mem-face mem-back">${photo(c.s)}</span></span>
      </button>`).join("")}</div>
    <div id="memResult"></div>
    <div class="game-actions"><button class="btn btn-ghost small" id="memRestart">↻ Acak ulang</button></div>`;
  $("#memRestart").addEventListener("click", memoryStart);
  $("#memGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".mem-card");
    if (b) memFlip(Number(b.dataset.i));
  });
}
function memFlip(i) {
  if (mem.lock || mem.done || mem.flipped.includes(i)) return;
  const el = $(`.mem-card[data-i="${i}"]`);
  if (el.classList.contains("matched")) return;
  if (!mem.timer) {
    mem.timer = setInterval(() => {
      if (activeGame === "memory" && !document.hidden && !mem.done) { mem.seconds++; $("#mTime").textContent = fmtTime(mem.seconds); }
    }, 1000);
  }
  el.classList.add("flip");
  el.setAttribute("aria-label", `Kartu ${i + 1}, foto ${mem.cards[i].s.name}`);
  mem.flipped.push(i);
  if (mem.flipped.length < 2) return;
  mem.attempts++;
  $("#mTry").textContent = mem.attempts;
  const [a, b] = mem.flipped;
  if (mem.cards[a].s.id === mem.cards[b].s.id) {
    [a, b].forEach((x) => {
      const c = $(`.mem-card[data-i="${x}"]`);
      c.classList.add("matched");
      c.disabled = true;
      c.setAttribute("aria-label", `Kartu ${x + 1}, ${mem.cards[x].s.name}, sudah cocok`);
      c.insertAdjacentHTML("beforeend", `<span class="mem-tick">✓ cocok</span>`);
    });
    mem.flipped = [];
    mem.matched++;
    $("#mPairs").textContent = `${mem.matched}/${mem.pairs}`;
    if (mem.matched === mem.pairs) finishMemory();
  } else {
    mem.lock = true;
    setTimeout(() => {
      [a, b].forEach((x) => {
        const c = $(`.mem-card[data-i="${x}"]`);
        c.classList.remove("flip");
        c.setAttribute("aria-label", `Kartu ${x + 1}, tertutup`);
      });
      mem.flipped = [];
      mem.lock = false;
    }, 900);
  }
}
function finishMemory() {
  mem.done = true;
  clearInterval(mem.timer);
  mem.timer = null;
  const score = Math.max(100, 1000 - mem.attempts * 30 - mem.seconds * 3);
  $("#memResult").innerHTML = `<div class="result-card">${resultCard("🧠 Memory Selesai!", [[fmtTime(mem.seconds), "Waktu"], [mem.attempts, "Percobaan"], [score, "Skor"], ["+20", "XP"]], "Semua pasangan ditemukan. Kamu mendapat +20 XP!", `<button class="btn btn-dark" id="memAgain">↻ Main Lagi</button>`)}</div>`;
  $("#memAgain").addEventListener("click", memoryStart);
  finishGame("memory", 20, "🧠 Memory selesai! +20 XP");
  awardBadge("memory");
}
gameInit.memory = () => { if (!$("#memoryArea").children.length) memoryStart(); };

/* =========================================================
   MATCHING GAME (Pasangkan Rempah)
   ========================================================= */
const BAGIAN_TARGETS = [{ key: "Rimpang", label: "RIMPANG" }, { key: "Batang", label: "BATANG AROMATIK" }, { key: "Buah/Biji", label: "BUAH / BIJI" }];
const match = { mode: "ciri", left: [], right: [], sel: null, done: {}, usedRight: new Set(), mistakes: 0 };
function matchStart(mode) {
  match.mode = mode || match.mode;
  Object.assign(match, { sel: null, done: {}, usedRight: new Set(), mistakes: 0 });
  if (match.mode === "ciri") {
    const pick = shuffle(spices).slice(0, 5);
    match.left = pick.map((s) => ({ id: s.id, label: s.name }));
    match.right = shuffle(pick.map((s) => ({ key: s.id, label: s.matchClue })));
  } else {
    match.left = shuffle(spices).slice(0, 6).map((s) => ({ id: s.id, label: s.name }));
    match.right = BAGIAN_TARGETS;
  }
  renderMatch();
}
function renderMatch(shakeKey) {
  const ciri = match.mode === "ciri";
  const doneCount = Object.keys(match.done).length;
  $("#matchArea").innerHTML = `
    <div class="chips" style="margin-bottom:14px" role="group" aria-label="Mode permainan">
      <button class="chip" data-mode="ciri" aria-pressed="${ciri}">Rempah → Ciri khas</button>
      <button class="chip" data-mode="bagian" aria-pressed="${!ciri}">Rempah → Bagian yang dipakai</button>
    </div>
    <div class="game-bar"><span>Cocok <b>${doneCount}/${match.left.length}</b></span><span>Salah <b>${match.mistakes}</b></span></div>
    <div class="match-wrap">
      <div class="match-col"><h4>Rempah</h4>${match.left.map((l) => {
        const d = match.done[l.id];
        return `<button class="m-item${d ? " done" : ""}${match.sel === l.id ? " sel" : ""}" data-left="${l.id}" ${d ? "disabled" : ""} ${match.sel === l.id ? 'aria-pressed="true"' : ""}>${d ? "✓ " : ""}${l.label}${d ? `<small>${d}</small>` : ""}</button>`;
      }).join("")}</div>
      <div class="match-col"><h4>${ciri ? "Ciri khas" : "Bagian yang dipakai"}</h4>${match.right.map((r) => {
        const used = ciri && match.usedRight.has(r.key);
        return `<button class="m-item${used ? " done" : ""}${shakeKey === r.key ? " shake" : ""}" data-right="${r.key}" ${used ? "disabled" : ""}>${used ? "✓ " : ""}${r.label}</button>`;
      }).join("")}</div>
    </div>
    <div id="matchFb" aria-live="polite">${shakeKey ? `<div class="feedback bad">✕ Belum cocok. Coba pasangan lain!</div>` : match.sel ? `<div class="feedback ok" style="background:#fff7e0;color:#4a3a14;border-left-color:var(--yellow)">Pilih pasangannya di kolom kanan.</div>` : ""}</div>
    <div id="matchResult"></div>
    <div class="game-actions"><button class="btn btn-ghost small" id="matchRestart">↻ Acak ulang</button></div>`;
  $$("#matchArea [data-mode]").forEach((b) => b.addEventListener("click", () => matchStart(b.dataset.mode)));
  $("#matchRestart").addEventListener("click", () => matchStart());
  $$("#matchArea [data-left]").forEach((b) => b.addEventListener("click", () => { match.sel = match.sel === b.dataset.left ? null : b.dataset.left; renderMatch(); }));
  $$("#matchArea [data-right]").forEach((b) => b.addEventListener("click", () => matchPick(b.dataset.right)));
}
function matchPick(key) {
  if (!match.sel) { toast("Pilih rempah di kolom kiri dulu."); return; }
  const s = getSpice(match.sel);
  const ok = match.mode === "ciri" ? key === s.id : s.group === key;
  if (ok) {
    const label = match.mode === "ciri" ? s.matchClue : BAGIAN_TARGETS.find((t) => t.key === key).label;
    match.done[s.id] = label;
    if (match.mode === "ciri") match.usedRight.add(key);
    match.sel = null;
    renderMatch();
    if (Object.keys(match.done).length === match.left.length) finishMatch();
  } else {
    match.mistakes++;
    renderMatch(key);
  }
}
function finishMatch() {
  $("#matchResult").innerHTML = `<div class="result-card">${resultCard("🔗 Semua Cocok!", [[match.left.length, "Pasangan"], [match.mistakes, "Salah"], ["+20", "XP"]], "Kamu mendapat +20 XP!", `<button class="btn btn-dark" id="matchAgain">↻ Main Lagi</button>`)}</div>`;
  $("#matchAgain").addEventListener("click", () => matchStart());
  finishGame("match", 20, "🔗 Pasangkan Rempah selesai! +20 XP");
}
gameInit.match = () => { if (!$("#matchArea").children.length) matchStart(); };

/* =========================================================
   WORD GAME (Susun Kata)
   ========================================================= */
const word = { list: [], i: 0, target: "", letters: [], slots: [], hints: 0, attempts: 0, solved: 0, locked: false };
function scramble(w) {
  let r, t = 0;
  do { r = shuffle(w.split("")); t++; } while (r.join("") === w && t < 25);
  return r;
}
function wordStart() {
  word.list = shuffle(spices);
  word.i = 0;
  word.solved = 0;
  word.attempts = 0;
  wordRound();
}
function wordRound() {
  const s = word.list[word.i];
  word.target = s.name.toUpperCase();
  word.letters = scramble(word.target).map((ch) => ({ ch, used: false }));
  word.slots = Array(word.target.length).fill(null);
  word.hints = 0;
  word.locked = false;
  $("#wordArea").innerHTML = `
    <div class="word-card">
      <div class="game-bar" style="justify-content:center"><span>Kata <b>${word.i + 1}/${word.list.length}</b></span><span>Percobaan <b id="wTry">${word.attempts}</b></span></div>
      <p class="word-clue">Petunjuk: ${s.clues[1]}</p>
      <div class="slots" id="wSlots" role="group" aria-label="Jawaban"></div>
      <div class="letters" id="wLetters" role="group" aria-label="Huruf acak"></div>
      <div id="wFb" aria-live="polite"></div>
      <div class="game-actions" style="justify-content:center" id="wActions">
        <button class="btn btn-ghost small" id="wClear">⌫ Hapus</button>
        <button class="btn btn-ghost small" id="wShuffle">🔀 Acak huruf</button>
        <button class="btn btn-ghost small" id="wHint">💡 Petunjuk huruf</button>
      </div>
    </div>`;
  renderWord();
  $("#wClear").addEventListener("click", () => { if (!word.locked) wordClear(); });
  $("#wShuffle").addEventListener("click", () => { if (!word.locked) wordReshuffle(); });
  $("#wHint").addEventListener("click", wordHint);
}
function renderWord() {
  $("#wSlots").innerHTML = word.slots.map((li, i) => `<button class="slot${li !== null ? " filled" : ""}" data-slot="${i}" aria-label="Huruf ke-${i + 1}${li !== null ? ": " + word.letters[li].ch + ", ketuk untuk hapus" : " kosong"}">${li !== null ? word.letters[li].ch : ""}</button>`).join("");
  $("#wLetters").innerHTML = word.letters.map((l, i) => `<button class="ltr" data-l="${i}" ${l.used ? "disabled" : ""} aria-label="Huruf ${l.ch}">${l.ch}</button>`).join("");
  $$("#wSlots .slot").forEach((b) => b.addEventListener("click", () => wordRemove(Number(b.dataset.slot))));
  $$("#wLetters .ltr").forEach((b) => b.addEventListener("click", () => wordPlace(Number(b.dataset.l))));
}
function wordPlace(li) {
  if (word.locked || word.letters[li].used) return;
  const slot = word.slots.indexOf(null);
  if (slot < 0) return;
  word.slots[slot] = li;
  word.letters[li].used = true;
  renderWord();
  if (!word.slots.includes(null)) wordCheck();
}
function wordRemove(slot) {
  if (word.locked || word.slots[slot] === null) return;
  word.letters[word.slots[slot]].used = false;
  word.slots[slot] = null;
  renderWord();
}
function wordClear() {
  word.slots = word.slots.map(() => null);
  word.letters.forEach((l) => (l.used = false));
  renderWord();
}
function wordReshuffle() {
  wordClear();
  word.letters = scramble(word.target).map((ch) => ({ ch, used: false }));
  renderWord();
}
function wordHint() {
  if (word.locked) return;
  const current = word.slots.map((li) => (li === null ? "" : word.letters[li].ch)).join("");
  const prefix = word.target.startsWith(current.replace(/ /g, "")) && !word.slots.slice(0, current.length).includes(null) ? current.length : 0;
  wordClear();
  for (let p = 0; p <= prefix && p < word.target.length - 0; p++) {
    const idx = word.letters.findIndex((l) => !l.used && l.ch === word.target[p]);
    if (idx >= 0) { word.slots[p] = idx; word.letters[idx].used = true; }
  }
  word.hints++;
  renderWord();
  if (!word.slots.includes(null)) wordCheck();
}
function wordCheck() {
  const attempt = word.slots.map((li) => word.letters[li].ch).join("");
  word.attempts++;
  $("#wTry").textContent = word.attempts;
  const s = word.list[word.i];
  if (attempt === word.target) {
    word.locked = true;
    word.solved++;
    $("#wSlots").classList.add("good");
    const last = word.i === word.list.length - 1;
    $("#wFb").innerHTML = `<div class="feedback ok">✓ BENAR! Jawabannya ${s.name}<small>${s.scientificName}. ${firstSentence(s.description)}</small></div>`;
    $("#wActions").innerHTML = `<button class="btn btn-primary" id="wNext">${last ? "Lihat hasil" : "Lanjut →"}</button>`;
    $("#wNext").focus();
    $("#wNext").addEventListener("click", () => { if (last) finishWord(); else { word.i++; wordRound(); } });
  } else {
    word.locked = true;
    $("#wSlots").classList.add("bad");
    $("#wFb").innerHTML = `<div class="feedback bad">✕ BELUM TEPAT. Coba susun ulang!</div>`;
    setTimeout(() => { word.locked = false; wordClear(); $("#wSlots").classList.remove("bad"); $("#wFb").innerHTML = ""; }, 900);
  }
}
function finishWord() {
  $("#wordArea").innerHTML = `<div class="result-card">${resultCard("🔤 Semua Kata Tersusun!", [[`${word.solved}/${word.list.length}`, "Kata"], [word.attempts, "Percobaan"], ["+20", "XP"]], "Kamu mendapat +20 XP!", `<button class="btn btn-dark" id="wAgain">↻ Main Lagi</button>`)}</div>`;
  $("#wAgain").addEventListener("click", wordStart);
  finishGame("word", 20, "🔤 Susun Kata selesai! +20 XP");
}
function initWordKeyboard() {
  document.addEventListener("keydown", (e) => {
    if (activeGame !== "word" || word.locked || e.ctrlKey || e.metaKey || e.altKey) return;
    const panel = $("#game-word");
    if (panel.hidden || !panel.contains(document.activeElement)) return;
    if (e.key === "Backspace") {
      const last = word.slots.map((v, i) => (v !== null ? i : -1)).filter((i) => i >= 0).pop();
      if (last !== undefined) { e.preventDefault(); wordRemove(last); }
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      const idx = word.letters.findIndex((l) => !l.used && l.ch === e.key.toUpperCase());
      if (idx >= 0) wordPlace(idx);
    }
  });
}
gameInit.word = () => { if (!$("#wordArea").children.length) wordStart(); };

/* =========================================================
   MYTH OR FACT
   ========================================================= */
const myth = { list: [], i: 0, correct: 0, answered: false };
function mythStart() {
  myth.list = shuffle(mythBank).slice(0, 8);
  Object.assign(myth, { i: 0, correct: 0, answered: false });
  renderMyth();
}
function renderMyth() {
  const q = myth.list[myth.i];
  myth.answered = false;
  $("#mythArea").innerHTML = `
    <div class="myth-card">
      <div class="game-bar" style="justify-content:center"><span>Soal <b>${myth.i + 1}/${myth.list.length}</b></span><span>Benar <b>${myth.correct}</b></span></div>
      <p class="myth-statement">${q.s}</p>
      <div class="myth-actions" role="group" aria-label="Pilih jawaban">
        <button class="btn-myth" data-ans="false">✕ MITOS</button>
        <button class="btn-fact" data-ans="true">✓ FAKTA</button>
      </div>
      <div id="mythFb" aria-live="polite"></div>
      <div class="game-actions" style="justify-content:center" id="mythNext"></div>
    </div>`;
  $$("#mythArea [data-ans]").forEach((b) => b.addEventListener("click", () => answerMyth(b.dataset.ans === "true", b)));
}
function answerMyth(choice, btn) {
  if (myth.answered) return;
  myth.answered = true;
  const q = myth.list[myth.i];
  const ok = choice === q.fact;
  $$("#mythArea [data-ans]").forEach((b) => (b.disabled = true));
  btn.classList.add("chosen");
  if (ok) { myth.correct++; addXP(5); }
  $("#mythFb").innerHTML = `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✓ BENAR! +5 XP" : `✕ BELUM TEPAT. Pernyataan ini adalah ${q.fact ? "FAKTA" : "MITOS"}.`}<small>${q.e}</small></div>`;
  const last = myth.i === myth.list.length - 1;
  $("#mythNext").innerHTML = `<button class="btn btn-primary" id="mythNextBtn">${last ? "Lihat hasil" : "Lanjut →"}</button>`;
  $("#mythNextBtn").focus();
  $("#mythNextBtn").addEventListener("click", () => { if (last) finishMyth(); else { myth.i++; renderMyth(); } });
}
function finishMyth() {
  const gained = myth.correct * 5 + 20;
  $("#mythArea").innerHTML = `<div class="result-card">${resultCard("⚖️ Selesai!", [[`${myth.correct}/${myth.list.length}`, "Benar"], [`+${gained}`, "Total XP"]], "Kamu mendapat +20 XP untuk menyelesaikan game.", `<button class="btn btn-dark" id="mythAgain">↻ Main Lagi</button>`)}</div>`;
  $("#mythAgain").addEventListener("click", mythStart);
  finishGame("myth", 20, "⚖️ Mitos atau Fakta selesai! +20 XP");
}
gameInit.myth = () => { if (!$("#mythArea").children.length) mythStart(); };

/* =========================================================
   QUIZ
   ========================================================= */
const quiz = { questions: [], i: 0, answers: [], timeLeft: QUIZ_SECONDS, timer: null, totalSeconds: 0, answered: false };
const photoAvail = {};
async function spiceHasPhoto(id) {
  if (!(id in photoAvail)) photoAvail[id] = (await probeImage(getSpice(id).image)).ok;
  return photoAvail[id];
}
function renderQuizIntro() {
  $("#quizArea").innerHTML = `
    <div class="quiz-intro">
      <h3>QUIZ TIME 🌿</h3>
      <p>Uji pengetahuanmu tentang rempah Indonesia.</p>
      <ul><li>${QUIZ_LENGTH} soal acak</li><li>${QUIZ_SECONDS} detik per soal</li><li>+10 XP tiap jawaban benar</li></ul>
      ${state.quizBest !== null ? `<p><strong>Nilai terbaikmu: ${state.quizBest}</strong></p>` : ""}
      <button class="btn btn-primary" id="quizStart">🚀 Mulai Kuis</button>
      <p class="muted-dark" style="font-size:.88rem;color:#5b6657">Kuis ini bebas diulang kapan saja, tanpa syarat apa pun.</p>
    </div>`;
  $("#quizStart").addEventListener("click", startQuiz);
}
async function startQuiz() {
  clearInterval(quiz.timer);
  const btn = $("#quizStart");
  if (btn) { btn.disabled = true; btn.textContent = "Menyiapkan soal…"; }
  const ids = [...new Set(quizBank.filter((q) => q.image).map((q) => q.image))];
  await Promise.all(ids.map(spiceHasPhoto));
  const usable = quizBank.filter((q) => !q.image || photoAvail[q.image]);
  quiz.questions = shuffle(usable).slice(0, QUIZ_LENGTH).map((q) => ({ ...q, options: shuffle(q.options) }));
  Object.assign(quiz, { i: 0, answers: [], totalSeconds: 0 });
  renderQuestion();
}
function renderQuestion() {
  const q = quiz.questions[quiz.i];
  const total = quiz.questions.length;
  quiz.answered = false;
  quiz.timeLeft = QUIZ_SECONDS;
  const letters = ["A", "B", "C", "D"];
  $("#quizArea").innerHTML = `
    <div class="quiz-top"><span>Soal ${quiz.i + 1} dari ${total}</span><span class="q-timer" id="qTimer" role="timer" aria-label="Sisa waktu">⏱ ${QUIZ_SECONDS} dtk</span></div>
    <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${quiz.i}"><div style="width:${(quiz.i / total) * 100}%"></div></div>
    <div class="time-track"><div id="qTrack" style="width:100%"></div></div>
    <div class="q-meta"><span>${q.category}</span><span>${q.difficulty}</span></div>
    ${q.image ? `<div class="q-photo">${photo(getSpice(q.image), { label: GENERIC_PH, alt: "Foto rempah untuk soal ini" })}</div>` : ""}
    <h3 class="q-text">${q.q}</h3>
    <div class="answers" id="answers">${q.options.map((o, i) => `<button class="answer" data-a="${i}"><span class="letter">${letters[i]}</span><span>${o}</span></button>`).join("")}</div>
    <div id="qFeedback" aria-live="polite"></div>
    <div class="quiz-next" id="qNext"></div>`;
  $("#answers").addEventListener("click", (e) => {
    const b = e.target.closest(".answer");
    if (b && !quiz.answered) answerQuiz(Number(b.dataset.a));
  });
  clearInterval(quiz.timer);
  quiz.timer = setInterval(() => {
    quiz.timeLeft--;
    const t = $("#qTimer"), tr = $("#qTrack");
    if (t) { t.textContent = `⏱ ${quiz.timeLeft} dtk`; t.classList.toggle("low", quiz.timeLeft <= 5); }
    if (tr) tr.style.width = (quiz.timeLeft / QUIZ_SECONDS) * 100 + "%";
    if (quiz.timeLeft <= 0) answerQuiz(null);
  }, 1000);
}
function answerQuiz(idx) {
  if (quiz.answered) return;
  quiz.answered = true;
  clearInterval(quiz.timer);
  const q = quiz.questions[quiz.i];
  const used = QUIZ_SECONDS - Math.max(0, quiz.timeLeft);
  quiz.totalSeconds += used;
  const chosen = idx === null ? null : q.options[idx];
  const ok = chosen === q.answer;
  quiz.answers.push({ chosen, ok });
  $$("#answers .answer").forEach((b) => {
    b.disabled = true;
    const text = q.options[Number(b.dataset.a)];
    if (text === q.answer) { b.classList.add("correct"); b.querySelector(".letter").textContent = "✓"; }
    else if (text === chosen) { b.classList.add("wrong"); b.querySelector(".letter").textContent = "✕"; }
  });
  if (ok) addXP(10);
  const head = ok ? "✓ BENAR! Hebat! Jawabanmu tepat." : idx === null ? "⏰ WAKTU HABIS" : "✕ BELUM TEPAT";
  $("#qFeedback").innerHTML = `<div class="q-explain ${ok ? "ok" : "bad"}"><strong>${head}${ok ? " +10 XP" : ""}</strong>${ok ? "" : `Jawaban yang benar: <b>${q.answer}</b>. `}${q.explain}</div>`;
  const last = quiz.i === quiz.questions.length - 1;
  $("#qNext").innerHTML = `<button class="btn btn-primary" id="qNextBtn">${last ? "Lihat hasil" : "Soal berikutnya →"}</button>`;
  $("#qNextBtn").focus();
  $("#qNextBtn").addEventListener("click", () => { if (last) finishQuiz(); else { quiz.i++; renderQuestion(); } });
}
function quizMessage(p) {
  if (p >= 90) return "Luar biasa! Kamu sudah sangat mengenal dunia rempah.";
  if (p >= 80) return "Hebat! Pengetahuanmu tentang rempah sudah sangat baik.";
  if (p >= 70) return "Bagus! Sedikit lagi kamu bisa menjadi ahli rempah.";
  if (p >= 50) return "Lumayan! Coba baca kembali beberapa materi dan ulangi kuis.";
  return "Jangan menyerah! Yuk, eksplorasi rempah lagi lalu coba kuisnya.";
}
function finishQuiz() {
  const total = quiz.questions.length;
  const correct = quiz.answers.filter((a) => a.ok).length;
  const pct = Math.round((correct / total) * 100);
  state.quizPlays++;
  if (state.quizBest === null || pct > state.quizBest) state.quizBest = pct;
  saveState();
  refreshProgressUI();
  if (correct === total) { awardBadge("champion"); }
  if (pct >= 70) launchConfetti();
  const review = quiz.questions.map((q, i) => {
    const a = quiz.answers[i];
    return `<div class="review-item ${a.ok ? "r-ok" : "r-bad"}"><h4>${i + 1}. ${q.q}</h4>
      <p><span class="st">${a.ok ? "✓ Benar" : "✕ Salah"}</span> · Jawabanmu: <b>${a.chosen === null ? "tidak dijawab (waktu habis)" : a.chosen}</b></p>
      ${a.ok ? "" : `<p>Jawaban benar: <b>${q.answer}</b></p>`}<p>${q.explain}</p></div>`;
  }).join("");
  $("#quizArea").innerHTML = `
    <div class="quiz-result">
      <p class="eyebrow">Hasil kuis</p>
      <div class="score-ring" style="--p:${pct}"><div><span>${pct}<small>nilai</small></span></div></div>
      <p class="quiz-msg">${quizMessage(pct)}</p>
      <div class="res-grid">
        <div><strong>${correct}</strong><span>Benar</span></div>
        <div><strong>${total - correct}</strong><span>Salah</span></div>
        <div><strong>${pct}%</strong><span>Persentase</span></div>
        <div><strong>+${correct * 10}</strong><span>XP</span></div>
        <div><strong>${fmtTime(quiz.totalSeconds)}</strong><span>Waktu</span></div>
      </div>
      <div class="btn-row">
        <button class="btn btn-primary" id="quizRetry">↻ Coba Lagi</button>
        <button class="btn btn-outline" id="quizReview">📖 Lihat Pembahasan</button>
        <a class="btn btn-outline" href="#jelajah">🌱 Pelajari Rempah</a>
        <a class="btn btn-outline" href="#beranda">🏠 Kembali ke Beranda</a>
      </div>
      <details class="review" id="reviewBox"><summary>Review jawaban (${total} soal)</summary>${review}</details>
    </div>`;
  $("#quizRetry").addEventListener("click", startQuiz);
  $("#quizReview").addEventListener("click", () => {
    const d = $("#reviewBox");
    d.open = true;
    d.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
}

/* =========================================================
   EVENTS UMUM & DIALOG
   ========================================================= */
function initGlobalEvents() {
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open-spice]");
    if (o) { e.preventDefault(); openSpice(o.dataset.openSpice, o.closest("button") || o); return; }
    const pick = e.target.closest("[data-pick]");
    if (pick) { e.preventDefault(); $("#puzzleSpiceChips").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!$("#levelUp").hidden) closeLevelUp();
    else if (!$("#spiceModal").hidden) closeSpice();
    else { const nav = $("#mainNav"); if (nav.classList.contains("open")) { nav.classList.remove("open"); $("#navToggle").setAttribute("aria-expanded", "false"); } }
  });
  // Kartu spesies: tekan Enter pada kartu
  $("#factBtn").addEventListener("click", showRandomFact);
  $("#levelUpClose").addEventListener("click", closeLevelUp);

  const dlg = $("#confirmDialog");
  $("#resetBtn").addEventListener("click", () => {
    if (typeof dlg.showModal === "function") dlg.showModal();
    else if (window.confirm("Reset semua progres?")) resetState();
  });
  $("#confirmNo").addEventListener("click", () => dlg.close());
  $("#confirmYes").addEventListener("click", () => { dlg.close(); resetState(); });
  window.addEventListener("resize", () => {
    const c = $("#confetti");
    if (c && c.width) { c.width = window.innerWidth * (window.devicePixelRatio || 1); c.height = window.innerHeight * (window.devicePixelRatio || 1); }
  });
}

/* =========================================================
   INITIALIZATION
   ========================================================= */
function init() {
  loadState();
  $("#year").textContent = new Date().getFullYear();
  renderCollage();
  renderFlipCards();
  initWhyCards();
  initPantry();
  initNavigation();
  initScrollEffects();
  initDetailModal();
  initGameMenu();
  initPuzzleControls();
  initWordKeyboard();
  initGlobalEvents();
  renderQuizIntro();
  refreshProgressUI();
  selectGame("puzzle");
}
document.addEventListener("DOMContentLoaded", init);
