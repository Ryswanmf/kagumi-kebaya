// Data Informasi Bisnis & Katalog Kagumi Sewa Kebaya Bandar Lampung
const BUSINESS_DATA = {
  name: "Kagumi Sewa Kebaya",
  logo: "logo-kagumi.png",
  username: "@kagumi.sewakebaya",
  tagline: "Sewa Kebaya Wisuda, Lamaran & Pesta Elegan di Bandar Lampung",
  whatsappNumber: "6282281998800", // Ganti dengan nomor WhatsApp bisnis Anda (format: 628...)
  whatsappDisplay: "+62 822-8199-8800",
  instagramUrl: "https://instagram.com/kagumi.sewakebaya",
  location: "Way Halim, Bandar Lampung, Lampung",
  mapsUrl: "https://maps.google.com/?q=Way+Halim+Bandar+Lampung",
  operatingHours: "Senin - Sabtu: 09.00 - 18.00 WIB (Minggu dengan reservasi)",
  stats: {
    posts: "148",
    followers: "18.5K",
    following: "125",
    clients: "2.400+"
  },
  bio: [
    "✨ Persewaan Kebaya Modern, Wisuda & Lamaran",
    "📍 Studio: Way Halim, Bandar Lampung",
    "👗 Free Resize Custom Fit & Free Laundry Treatment",
    "✨ Booking min. H-7 untuk mengamankan jadwal fitting"
  ]
};

// Data Sorotan Cerita (Story Highlights)
const HIGHLIGHTS = [
  {
    id: "emerald",
    title: "Emerald Blue",
    cover: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "emerald"
  },
  {
    id: "matcha",
    title: "Matcha Strobe",
    cover: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "matcha"
  },
  {
    id: "butter",
    title: "Butter Yellow",
    cover: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "butter"
  },
  {
    id: "engagement",
    title: "Engagement",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "engagement"
  },
  {
    id: "wisuda",
    title: "Wisuda Look",
    cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "wisuda"
  },
  {
    id: "pastel",
    title: "Pastel Rose",
    cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=300&auto=format&fit=crop",
    categoryFilter: "pastel"
  },
  {
    id: "syarat",
    title: "S&K Sewa",
    cover: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=300&auto=format&fit=crop",
    action: "openTermsModal"
  }
];

// Data Produk Katalog Kebaya
const PRODUCTS = [
  {
    id: 1,
    name: "Kebaya Modern Emerald Aurora",
    category: "emerald",
    categoryName: "Emerald Series",
    price: 275000,
    rentalDuration: "3 Hari",
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 38,
    image: "gambar/gambar1.jpg",
    gallery: [
      "gambar/gambar1.jpg",
      "gambar/gambar2.jpg"
    ],
    sizes: ["S", "M", "L", "Free Custom Resize"],
    material: "French Chantilly Lace dengan Payet Mutiara Swarovski & Rok Songket Palembang",
    description: "Kebaya modern bernuansa Emerald Blue mewah dengan taburan payet mutiara handmade. Sangat elegan untuk acara wisuda, lamaran, maupun pesta malam. Pola potongan memberi siluet tubuh yang ramping dan jenjang.",
    includes: [
      "Kebaya Atasan Full Payet Premium",
      "Kain / Rok Lilit Songket Senada",
      "Manset / Kamisol (Bustier)",
      "Free Resize ke Ukuran Tubuh Anda",
      "Free Laundry Treatment (Tinggal Pakai & Kembali Tanpa Cuci)"
    ]
  },
  {
    id: 2,
    name: "Kebaya Kurung Matcha Strobe Glow",
    category: "matcha",
    categoryName: "Matcha Series",
    price: 250000,
    rentalDuration: "3 Hari",
    badge: "Trending 2026",
    rating: 4.8,
    reviewsCount: 42,
    image: "gambar/gambar2.jpg",
    gallery: [
      "gambar/gambar2.jpg",
      "gambar/gambar3.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "Free Custom Resize"],
    material: "Soft Tulle Salur dengan Aksen Bordir Timbul & Slit Belakang",
    description: "Warna matcha strobe yang sedang digemari di kalangan mahasiswi wisuda dan calon pengantin lamaran. Warna sage/matcha lembut yang segar di kulit dan sangat photogenic untuk kamera studio maupun outdoor.",
    includes: [
      "Kebaya Semi Kurung Aksen Payet Daun",
      "Rok Span Belah Belakang Nyaman Berjalan",
      "Inner Hijab Friendly / Bustier",
      "Free Resize ke Ukuran Tubuh Anda",
      "Free Laundry Treatment (Kembalikan Tanpa Dicuci)"
    ]
  },
  {
    id: 3,
    name: "Kebaya Peplum Butter Yellow Bloom",
    category: "butter",
    categoryName: "Butter Series",
    price: 260000,
    rentalDuration: "3 Hari",
    badge: "Favorite",
    rating: 5.0,
    reviewsCount: 29,
    image: "gambar/gambar3.jpg",
    gallery: [
      "gambar/gambar3.jpg",
      "gambar/gambar4.jpg"
    ],
    sizes: ["S", "M", "L", "Free Custom Resize"],
    material: "Brocade 3D Flora dengan Sentuhan Mutiara Pastel & Silk Organza",
    description: "Kombinasi warna mentega (Butter Yellow) cerah yang manis memberikan aura ceria nan anggun. Model peplum di pinggang menyamarkan lekuk perut dan memberi kesan ramping seketika.",
    includes: [
      "Kebaya Peplum Brocade 3D",
      "Rok Batik Motif Parang Modern",
      "Kamisol Senada",
      "Free Resize Tubuh",
      "Free Laundry Service"
    ]
  },
  {
    id: 4,
    name: "Kebaya Lamaran Rose Gold Grace",
    category: "engagement",
    categoryName: "Engagement Series",
    price: 320000,
    rentalDuration: "3 Hari",
    badge: "Exclusive",
    rating: 4.9,
    reviewsCount: 56,
    image: "gambar/gambar4.jpg",
    gallery: [
      "gambar/gambar4.jpg",
      "gambar/gambar5.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "Free Custom Resize"],
    material: "Premium French Lace dengan Manik Crystal & Ekor Tulle Halus",
    description: "Dirancang istimewa untuk momen sakral pertunangan dan lamaran. Warna dusty rose gold yang memancarkan aura lembut calon pengantin, lengkap dengan taburan kristal di sepanjang kerah sabrina modern.",
    includes: [
      "Kebaya Dress Tunang Ekor Lepas-Pasang",
      "Rok Songket Mewah Aksen Benang Emas",
      "Kemben / Bustier Tulang Anti Melorot",
      "Free Resize Fitting di Studio Way Halim",
      "Free Laundry Lengkap"
    ]
  },
  {
    id: 5,
    name: "Kebaya Wisuda Classic Lilac Mist",
    category: "wisuda",
    categoryName: "Wisuda Series",
    price: 240000,
    rentalDuration: "3 Hari",
    badge: "Wisuda Populer",
    rating: 4.8,
    reviewsCount: 64,
    image: "gambar/gambar5.jpg",
    gallery: [
      "gambar/gambar5.jpg",
      "gambar/gambar8.jpeg"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Free Custom Resize"],
    material: "Chantilly Brocade Halus Anti Gatal & Furing Katun Adem",
    description: "Pilihan nomor satu para wisudawati Universitas Lampung (Unila), Itera, UIN RIL, dan kampus sekitarnya. Nyaman dipakai seharian dari prosesi sidang hingga foto studio tanpa terasa gerah.",
    includes: [
      "Kebaya Modern Kerah V/Kutubaru",
      "Rok Lilit Katun Prima Batik Halus",
      "Bustier / Manset Hijab Warna Nude",
      "Free Resize Sesuai Lingkar Dada/Pinggang",
      "Free Laundry"
    ]
  },
  {
    id: 6,
    name: "Kebaya Kartini Modern Terracotta",
    category: "pastel",
    categoryName: "Earthy Series",
    price: 265000,
    rentalDuration: "3 Hari",
    badge: "New Arrival",
    rating: 4.9,
    reviewsCount: 22,
    image: "gambar/gambar8.jpeg",
    gallery: [
      "gambar/gambar8.jpeg",
      "gambar/gambar1.jpg"
    ],
    sizes: ["S", "M", "L", "Free Custom Resize"],
    material: "Sutra Jacquard Emboss dengan Bordir Kerancang Halus",
    description: "Siluet Kartini yang timeless dikombinasikan dengan sentuhan warna terracotta hangat yang elegan. Menghadirkan kesan ningrat berwibawa namun tetap modis dan kekinian.",
    includes: [
      "Kebaya Model Kartini Kancing Bungkus",
      "Kain Batik Tradisional Wiron Rapi",
      "Inner / Kemben Satin Adem",
      "Free Resize Tubuh",
      "Free Cuci & Setrika Uap Steril"
    ]
  },
  {
    id: 7,
    name: "Kebaya Royal Navy Blue Velvet",
    category: "emerald",
    categoryName: "Deep Tone Series",
    price: 285000,
    rentalDuration: "3 Hari",
    badge: "Luxury",
    rating: 5.0,
    reviewsCount: 31,
    image: "gambar/gambar1.jpg",
    gallery: [
      "gambar/gambar1.jpg",
      "gambar/gambar3.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "Free Custom Resize"],
    material: "Beludru (Velvet) Stretch Premium dengan Sulam Payet Emas Antik",
    description: "Kain beludru stretch kualitas tinggi yang elastis membalut tubuh dengan anggun. Sangat cocok bagi Anda yang menginginkan penampilan mewah nan glamor di acara indoor maupun malam hari.",
    includes: [
      "Kebaya Beludru Kerah Tradisional",
      "Kain Batik Prada Emas Halus",
      "Free Resize Penyesuaian",
      "Free Laundry"
    ]
  },
  {
    id: 8,
    name: "Kebaya Champagne Gold Shimmer",
    category: "butter",
    categoryName: "Gold Series",
    price: 295000,
    rentalDuration: "3 Hari",
    badge: "Best Pick",
    rating: 4.9,
    reviewsCount: 47,
    image: "gambar/gambar2.jpg",
    gallery: [
      "gambar/gambar2.jpg",
      "gambar/gambar4.jpg"
    ],
    sizes: ["S", "M", "L", "Free Custom Resize"],
    material: "Metallic Tulle Organza dengan Taburan Glass Beads Mengkilap",
    description: "Pancaran warna champagne gold berkilau natural di bawah cahaya sorot panggung dan lampu pelaminan. Sangat disukai untuk acara resepsi, wisuda pascasarjana, maupun lamaran adat.",
    includes: [
      "Kebaya Panjang Atasan Champagne Glitz",
      "Rok Lilit Senada Bordir Komputer",
      "Bustier Tali Belakang Ergonomis",
      "Free Resize & Steam Laundry"
    ]
  },
  {
    id: 9,
    name: "Kebaya Modern Sage Blossom",
    category: "matcha",
    categoryName: "Matcha Series",
    price: 270000,
    rentalDuration: "3 Hari",
    badge: "Favorit Wisuda",
    rating: 4.9,
    reviewsCount: 35,
    image: "gambar/gambar3.jpg",
    gallery: [
      "gambar/gambar3.jpg",
      "gambar/gambar5.jpg"
    ],
    sizes: ["S", "M", "L", "Free Custom Resize"],
    material: "Soft Chantilly Tulle dengan Aksen Sulam Tangan & Rok Plisket Batik",
    description: "Desain sage green lembut dengan kombinasi bordir daun modern. Memberikan nuansa tenang, anggun, dan segar saat diabadikan dalam foto wisuda dan pertunangan.",
    includes: [
      "Kebaya Sage Green Full Furing Adem",
      "Rok Plisket Batik Motif Parang Halus",
      "Kamisol Senada",
      "Free Resize Custom Fit",
      "Free Laundry Treatment"
    ]
  }
];

// Data Artikel Seputar Kebaya
const ARTICLES = [
  {
    id: 1,
    title: "Panduan Lengkap Memilih Kebaya Wisuda Sesuai Bentuk Tubuh",
    category: "Tips Wisuda",
    date: "12 Oktober 2026",
    readingTime: "4 menit baca",
    summary: "Ketahui potongan kebaya yang paling tepat untuk tipe tubuh petite, curvy, maupun athletic agar tampil percaya diri saat wisuda.",
    image: "https://images.pexels.com/photos/11593610/pexels-photo-11593610.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Memilih kebaya untuk hari wisuda bukanlah perkara sepele. Busana ini akan diabadikan dalam foto bertoga seumur hidup Anda. Berikut beberapa panduan dari stylist Kagumi Sewa Kebaya:
      
      1. Untuk Tubuh Petite (Mungil):
      Pilihlah model kebaya kutubaru modern dengan panjang tepat di atas panggul untuk memberikan ilusi kaki lebih panjang. Hindari ekor yang terlalu menjuntai berat.

      2. Untuk Tubuh Curvy / Berisi:
      Model kerah V-neck atau sabrina lebar sangat baik untuk memperpanjang leher. Potongan peplum asimetris juga membantu menyamarkan area perut secara natural.

      3. Pemilihan Bahan:
      Pastikan bahan kebaya menggunakan furing katun yang adem dan menyerap keringat. Di Kagumi Sewa Kebaya, seluruh kebaya telah disesuaikan agar nyaman dipakai seharian di iklim tropis Bandar Lampung.
    `
  },
  {
    id: 2,
    title: "Tren Warna Kebaya Lamaran 2026: Dari Earthy Tone hingga Matcha Strobe",
    category: "Tren Fashion",
    date: "05 Oktober 2026",
    readingTime: "3 menit baca",
    summary: "Warna-warna pastel lembut dan earth tone alami mendominasi tren pertunangan tahun ini. Simak inspirasi palet terbaiknya.",
    image: "https://images.unsplash.com/photo-1779501029074-3d48e7f6bbb9?auto=format&fit=crop&w=800&q=80",
    content: `
      Tahun 2026 membawa tren warna kebaya yang lebih natural, tenang, dan berkarakter. Tiga warna favorit pelanggan di studio kami:
      
      - Matcha Strobe: Warna hijau sage lembut yang memberi kesan damai dan segar.
      - Butter Yellow: Warna kuning mentega yang hangat dan estetik di foto kamera mirrorless.
      - Emerald Blue: Kemewahan biru permata yang memberi aura berkelas di malam hari.
      
      Kagumi Sewa Kebaya selalu memperbarui koleksi berkala agar Anda mendapatkan busana yang selalu relevan dengan tren terkini.
    `
  },
  {
    id: 3,
    title: "Mengapa Lebih Untung Sewa Kebaya Dibanding Menjahit Sendiri?",
    category: "Smart Budget",
    date: "28 September 2026",
    readingTime: "5 menit baca",
    summary: "Hemat jutaan rupiah, bebas pusing memikirkan biaya bahan & ongkos jahit, serta bebas biaya perawatan laundry.",
    image: "https://images.pexels.com/photos/33472462/pexels-photo-33472462.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Menjahit kebaya baru lengkap dengan payet mutiara saat ini membutuhkan budget Rp 1.500.000 hingga Rp 4.000.000, dan seringkali hanya dipakai 1-2 kali sebelum tersimpan di lemari.
      
      Dengan menyewa di Kagumi Sewa Kebaya:
      - Hemat hingga 80% biaya pengeluaran busana.
      - Gratis resize agar kebaya pas fit di badan Anda bagaikan dibuat khusus untuk Anda.
      - Gratis laundry steril — Anda cukup mengenakannya lalu mengembalikan tanpa repot mencuci.
    `
  },
  {
    id: 4,
    title: "Inspirasi Padu Padan Hijab Segiempat & Pashmina untuk Kebaya Modern",
    category: "Tips Hijab",
    date: "20 September 2026",
    readingTime: "4 menit baca",
    summary: "Simak trik styling hijab clean look, bahan silk voal, dan aksesoris bros mini agar riasan wajah dan detail kerah kebaya tampak menawan.",
    image: "https://images.unsplash.com/photo-1779619011908-cc586d6b1191?auto=format&fit=crop&w=800&q=80",
    content: `
      Hijab merupakan mahkota bagi muslimah saat mengenakan busana kebaya. Paduan yang serasi akan membuat aura wajah bercahaya dan mempertegas keanggunan payet kebaya:
      
      1. Pemilihan Bahan Hijab:
      Gunakan hijab berbahan voal premium atau silk shimmer dengan kilau lembut. Hindari bahan yang terlalu kaku atau licin agar tidak mudah bergeser saat prosesi wisuda atau acara lamaran.

      2. Model Clean Look:
      Gaya hijab lilit leher yang rapi (clean look) sangat direkomendasikan jika kebaya Anda memiliki detail payet mewah di area dada dan kerah.

      3. Harmonisasi Warna:
      Pilihlah warna hijab satu tingkat lebih muda atau lebih tua (monokrom) dari warna dasar kebaya, atau pilih warna senada dengan rok bawahan songket/batik Anda.
    `
  },
  {
    id: 5,
    title: "Cara Menentukan Ukuran Badan yang Tepat untuk Kebaya Custom Resize",
    category: "Panduan Ukuran",
    date: "14 September 2026",
    readingTime: "3 menit baca",
    summary: "Panduan mudah mengukur lingkar dada, pinggang, dan panggul sendiri di rumah sebelum datang fitting di studio Way Halim.",
    image: "https://images.pexels.com/photos/36657016/pexels-photo-36657016.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Kagumi Sewa Kebaya menyediakan layanan Free Resize agar kebaya sewa jatuh pas di badan layaknya pakaian jahit custom. Berikut 3 ukuran kunci yang perlu Anda siapkan:
      
      1. Lingkar Dada (Bust):
      Ukur melingkari puncak dada tertinggi dengan mengenakan bra/kemben yang nantinya akan dipakai saat hari H.

      2. Lingkar Pinggang (Waist):
      Ukur area pinggang tersempit (biasanya sekitar 2-3 cm di atas pusar) dalam posisi berdiri tegak rileks.

      3. Lingkar Panggul (Hips):
      Ukur melingkari bagian panggul dan bokong terlebar untuk memastikan rok span atau songket nyaman dipakai berjalan dan duduk.
    `
  },
  {
    id: 6,
    title: "Persiapan H-7 Sebelum Acara Wisuda di Bandar Lampung (Unila, Itera, UIN)",
    category: "Tips Wisuda",
    date: "08 September 2026",
    readingTime: "5 menit baca",
    summary: "Checklist persiapan penting mulai dari final fitting kebaya di Way Halim, janji MUA, hingga tips menjaga stamina di hari kelulusan.",
    image: "https://images.pexels.com/photos/35366658/pexels-photo-35366658.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Musim wisuda perguruan tinggi di Lampung seperti Unila, Itera, UIN Raden Intan, dan universitas lainnya selalu menjadi momen yang dinanti. Agar hari besar Anda bebas panik, lakukan checklist H-7 ini:
      
      - H-7: Konfirmasi jadwal MUA (Makeup Artist) dan pastikan tema makeup serasi dengan warna kebaya sewaan Anda.
      - H-3: Jadwalkan fitting akhir di Studio Kagumi Way Halim untuk penyesuaian resize terakhir.
      - H-1: Ambil kebaya lengkap (atasan, bawahan, manset/kamisol). Kebaya dari Kagumi sudah di-steam steril dan digantung rapi, siap pakai tanpa perlu dicuci atau disetrika ulang.
      - Hari H: Nikmati momen wisuda Anda dengan percaya diri dan anggun maksimal!
    `
  },
  {
    id: 7,
    title: "5 Kesalahan Umum Saat Memilih Kebaya Wisuda yang Harus Dihindari",
    category: "Tips Wisuda",
    date: "01 September 2026",
    readingTime: "4 menit baca",
    summary: "Mulai dari salah memilih bahan yang gerah hingga lupa membawa heels saat fitting. Simak panduannya agar tidak menyesal.",
    image: "https://images.pexels.com/photos/8630734/pexels-photo-8630734.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Hari wisuda adalah momen pembuktian perjuangan studi Anda. Jangan sampai terganggu oleh kesalahan busana berikut:
      
      1. Tidak Membawa Sepatu Heels Saat Fitting:
      Selalu bawa sepatu atau sandal berhak yang akan Anda pakai saat wisuda saat melakukan fitting di studio Kagumi Way Halim, agar panjang rok songket pas dan tidak terinjak.
      
      2. Mengabaikan Furing Bagian Dalam:
      Pastikan furing terbuat dari bahan katun atau spandek adem yang menyerap keringat di ruangan sidang yang padat.
      
      3. Booking Terlalu Mepet:
      Koleksi kebaya favorit biasanya cepat di-booking oleh mahasiswi kampus lain. Booking min. H-14 sangat disarankan.
    `
  },
  {
    id: 8,
    title: "Eksplorasi Warna Pastel & Earthy Tone: Mengapa Begitu Digemari Calon Pengantin?",
    category: "Tren Fashion",
    date: "25 Agustus 2026",
    readingTime: "3 menit baca",
    summary: "Sentuhan warna sage green, dusty rose, dan nude mocca menciptakan suasana lamaran yang intim, tenang, dan fotogenik.",
    image: "https://images.unsplash.com/photo-1779505977982-10714de89278?auto=format&fit=crop&w=800&q=80",
    content: `
      Warna-warna lembut kian digemari pada pertunangan modern. Palet earthy tone menyatu sempurna dengan dekorasi rustic maupun modern floral di studio foto Bandar Lampung:
      
      - Tampilan timeless yang tidak lekang oleh zaman saat dilihat kembali 10 tahun mendatang.
      - Sangat ramah kamera (photogenic) baik di pencahayaan indoor maupun outdoor.
      - Cocok dipadukan dengan kemeja batik pria bernuansa sogan atau motif kontemporer.
    `
  },
  {
    id: 9,
    title: "Tips Perawatan Aksesoris Bros, Selop & Kain Songket Agar Selalu Berkilau",
    category: "Smart Budget",
    date: "18 Agustus 2026",
    readingTime: "4 menit baca",
    summary: "Panduan merawat perhiasan kebaya dan kain tenun tradisional agar terhindar dari kusam dan lembab.",
    image: "https://images.pexels.com/photos/37628562/pexels-photo-37628562.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: `
      Aksesoris pelengkap seperti bros dada, giwang, dan songket tenun memerlukan perhatian khusus:
      
      - Simpan bros bersepuh emas di kotak kedap udara yang dilapisi kain beludru lembut.
      - Jangan menyemprotkan parfum langsung ke arah bros mutiara atau payet kebaya.
      - Di Kagumi Sewa Kebaya, seluruh busana dan aksesoris telah melalui inspeksi kualitas sebelum disewakan kepada Anda.
    `
  }
];

// Data Syarat & Ketentuan Penyewaan
const RENTAL_TERMS = [
  {
    icon: "fa-solid fa-money-bill-wave",
    title: "Uang Muka (DP) 50%",
    desc: "Untuk mengunci tanggal pemakaian kebaya, pelanggan wajib membayar DP sebesar 50% dari total biaya sewa. Tanggal tidak dapat di-booking tanpa pembayaran DP."
  },
  {
    icon: "fa-solid fa-clock",
    title: "Durasi Sewa 3 Hari",
    desc: "Paket sewa standar berlaku selama 3 hari: Hari 1 (Pengambilan/Fitting Akhir), Hari 2 (Hari H Acara), Hari 3 (Pengembalian maksimal pukul 18.00 WIB)."
  },
  {
    icon: "fa-solid fa-id-card",
    title: "Jaminan Identitas Asli",
    desc: "Penyewa wajib menitipkan 1 kartu identitas asli yang masih berlaku (KTP / SIM / Kartu Mahasiswa Asli) saat pengambilan busana di studio Way Halim."
  },
  {
    icon: "fa-solid fa-shirt",
    title: "Free Resize & Free Laundry",
    desc: "Kebaya akan disesuaikan (resize ringan tanpa merusak kain) dengan ukuran badan Anda sebelum hari H. Penyewa DILARANG mencuci, menyetrika dengan suhu panas, atau memotong kebaya sendiri."
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Ketentuan Kerusakan / Kehilangan",
    desc: "Penyewa bertanggung jawab menjaga kebaya dari robek, noda permanen, terbakar rokok/setrika, atau kehilangan aksesoris. Kerusakan akan dikenakan biaya perbaikan proporsional."
  },
  {
    icon: "fa-solid fa-calendar-xmark",
    title: "Ketentuan Pembatalan & Keterlambatan",
    desc: "DP yang sudah masuk tidak dapat di-refund jika pembatalan sepihak, namun jadwal dapat digeser (reschedule) maks 1x jika konfirmasi H-7. Keterlambatan pengembalian dikenakan denda Rp 50.000/hari."
  }
];
