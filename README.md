# Kagumi Sewa Kebaya - Website Profil Bisnis & Katalog Persewaan

Website profil bisnis dan sistem katalog persewaan kebaya modern untuk **Kagumi Sewa Kebaya** (Way Halim, Bandar Lampung). Dibangun dengan arsitektur multi-halaman berbasis **HTML5**, **Tailwind CSS (CDN)**, dan **Vanilla JavaScript**, menghadirkan estetika mewah butik kebaya (*luxury boutique*) dengan paduan tipografi *Playfair Display* dan *Plus Jakarta Sans*.

---

## 🌟 Ikhtisar Halaman & Fitur Website

Website ini terdiri dari 5 halaman utama yang saling terintegrasi:

### 1. Beranda Utama (`index.html`)
- **Luxury Split Hero Banner**: Menampilkan visual elegan [`hero.png`](hero.png) berpadu dengan proposisi nilai, tombol pemesanan WhatsApp, tombol katalog, dan modal Syarat & Ketentuan Sewa.
- **4 Kartu Keunggulan Butik**:
  - *Free Resize Fit*: Penyesuaian ukuran badan tanpa biaya penjahit.
  - *Free Laundry Treatment*: Pengembalian langsung tanpa perlu dicuci (sterilisasi uap higienis).
  - *Payet Butik Premium*: Furing katun adem & jahitan desainer.
  - *Studio Way Halim*: Lokasi strategis dekat PKOR Bandar Lampung.
- **Katalog Pilihan Beranda**: Menampilkan 6 koleksi kebaya terbaik dalam susunan grid adaptif (format responsif 2 2 pada smartphone/tablet, dan 3 3 pada desktop) lengkap dengan harga, badge, rating, dan tombol order WhatsApp.
- **Tentang Kami Ringkas & Kisah Kagumi**: Ringkasan filosofi butik dan statistik klien (2.400+ pelanggan).
- **Artikel & Tips Pilihan**: Menampilkan 3 artikel terpopuler seputar panduan kebaya wisuda & lamaran dalam format responsif 2 2 di mobile.
- **Lokasi & Jam Operasional Studio**: Dilengkapi peta Google Maps dan panduan arah.

### 2. Katalog Kebaya Lengkap (`katalog.html`)
- **Galeri Foto Lokal**: Menggunakan koleksi foto kebaya dari folder [`gambar/`](gambar/) (`gambar1.jpg` s/d `gambar8.jpeg`).
- **Live Search & Filter**:
  - Pencarian nama kebaya, warna, bahan kain, atau tema acara secara instan.
  - Filter kategori tab: *Wisuda Series*, *Engagement & Lamaran*, *Emerald Blue*, *Matcha Strobe*, *Butter Yellow*, dan *Pastel & Earth Tone*.
  - Pengurutan (*Sorting*): Terpopuler, Harga Terendah, Harga Tertinggi, dan Rating Tertinggi.
- **Pagination Dinamis (> 6 Produk)**:
  - Dibatasi maksimal **6 kebaya per halaman**.
  - Kontrol navigasi nomor halaman (*1*, *2*, dst.), tombol *Sebelumnya* & *Selanjutnya*, dan indikator rentang produk.
  - *Smooth scroll* otomatis ke atas grid saat berpindah halaman.
  - Otomatis disembunyikan (*hidden*) bila filter menghasilkan $\le 6$ produk.
- **Modal Detail Kebaya**: Pop-up spesifikasi bahan, galeri thumbnail, pilihan ukuran, kelengkapan paket, dan generator link order WhatsApp otomatis.
- **Modal Syarat & Ketentuan Sewa**: Pop-up ketentuan booking DP 50%, durasi 3 hari, dan jaminan identitas.

### 3. Profil & Kisah Kami (`tentang.html`)
- **Kisah Pendirian**: Cerita perjalanan Kagumi Sewa Kebaya sejak 2021 mendampingi mahasiswi dan calon pengantin di Lampung.
- **Filosofi Nama "Kagumi"**: Makna rasa kagum dan percaya diri bagi setiap wanita yang mengenakannya.
- **Visi & Misi**: Komitmen menghadirkan kebaya berkualitas tinggi dengan harga sewa terjangkau.
- **4 Nilai Utama**: *Keanggunan Tradisi*, *Kenyamanan Prioritas*, *Higienitas & Sterilisasi*, dan *Pelayanan Sepenuh Hati*.
- **Pencapaian**: 2.400+ klien puas, 150+ variasi model, dan 100% Free Resize & Laundry.
- **Pengalaman Studio Way Halim**: Ruang fitting ber-AC, privat bagi muslimah, serta pendampingan stylist gratis.

### 4. Artikel & Panduan Kebaya (`artikel.html`)
- **9 Panduan Edukatif & Inspiratif**:
  - Tips memilih kebaya wisuda sesuai bentuk tubuh (Petite, Curvy, Athletic).
  - Tren warna kebaya lamaran 2026 (*Matcha Strobe*, *Butter Yellow*, *Rose Gold*).
  - Perbandingan biaya sewa vs jahit kebaya sendiri.
  - Styling hijab clean look & pashmina silk untuk kebaya modern.
  - Cara mengukur lingkar dada & pinggang mandiri untuk *custom resize*.
  - Checklist persiapan H-7 wisuda kampus (Unila, Itera, UIN Raden Intan).
  - Kesalahan umum saat memilih kebaya wisuda.
  - Eksplorasi palet warna pastel & earthy tone.
  - Panduan perawatan aksesoris bros dan kain songket.
- **Foto Kebaya Asli**: Menggunakan foto-foto kebaya, busana wisuda, hijab, dan kain batik tradisional berkualitas tinggi.
- **Pencarian & Filter Kategori**: Filter kategori *Tips Wisuda*, *Tren Fashion*, *Tips Hijab*, *Smart Budget*, dan *Panduan Ukuran*.
- **Pagination Dinamis (> 6 Artikel)**: Membatasi 6 artikel per halaman dengan navigasi halaman interaktif.
- **Layout Grid Responsif (2 2 Mobile & 3 3 Desktop)**: Tampilan kartu artikel otomatis menyesuaikan 2 kolom (format 2 2) pada smartphone dan 3 kolom di layar desktop.
- **Modal Baca Artikel Lengkap**: Pembaca dapat membaca isi tulisan secara penuh dalam format modal bersih tanpa reload halaman.

### 5. Kontak & Reservasi Studio (`kontak.html`)
- **3 Kartu Akses Cepat**:
  - *WhatsApp Fast Response*: +62 822-8199-8800 (Konsultasi & booking jadwal fitting).
  - *Instagram Resmi*: `@kagumi.sewakebaya` (Katalog harian & ulasan klien).
  - *Studio Way Halim*: Fasilitas fitting room ber-AC dan area parkir luas.
- **Formulir Reservasi Fitting Interaktif**:
  - Form isian: Nama, Nomor WhatsApp, Kategori Acara (Wisuda, Lamaran, Prewed, Bridesmaid, Pesta), Tanggal Acara, Rencana Tanggal & Jam Fitting, serta Catatan Khusus/Ukuran Badan.
  - Tombol submit otomatis menyusun pesan WhatsApp terstruktur dan membuka percakapan ke admin.
- **Informasi Jam Buka & Alur Sewa**:
  - Senin – Sabtu: 09.00 – 18.00 WIB (Minggu khusus reservasi fitting).
  - 4 langkah alur sewa: *Pilih Model &rarr; Fitting & Free Resize &rarr; Ambil H-1 &rarr; Kembalikan (Free Laundry)*.
- **Peta Interaktif Google Maps**: Embed lokasi Way Halim, panduan arah dari kampus Unila, Itera, dan pusat kota, serta tombol minta *Share Location* via WhatsApp.
- **FAQ Kunjungan & Fitting**: Tanya jawab aturan fitting, ketiadaan biaya resize, dan sewa luar kota.

---

## 📁 Struktur Berkas Proyek

```
Kagumi-Kebaya/
├── index.html          # Beranda utama (Hero, Keunggulan, 6 Produk (3 3), Profil, 3 Artikel, Kontak)
├── katalog.html        # Katalog lengkap (Filter, Live Search, Sort, Modal Detail, Pagination >6)
├── tentang.html        # Profil butik, filosofi, visi misi, 4 nilai utama, dan pencapaian
├── artikel.html        # Galeri artikel & panduan kebaya (Filter, Modal Baca, Pagination >6)
├── kontak.html         # Halaman kontak, formulir reservasi fitting ke WA, jam buka, peta, FAQ
├── README.md           # Dokumentasi komprehensif proyek
├── Kagumi-Kebaya.txt   # Dokumen acuan instruksi proyek
├── logo-kagumi.png     # Logo resmi dan favicon Kagumi Sewa Kebaya
├── hero.png            # Ilustrasi banner utama di section hero beranda
├── gambar/             # Koleksi foto kebaya lokal untuk katalog
│   ├── gambar1.jpg
│   ├── gambar2.jpg
│   ├── gambar3.jpg
│   ├── gambar4.jpg
│   ├── gambar5.jpg
│   ├── gambar6.jpg
│   ├── gambar7.JPG
│   └── gambar8.jpeg
├── css/
│   └── style.css       # Font Playfair Display & Plus Jakarta Sans, scrollbar kustom
└── js/
    ├── data.js         # Sumber data BUSINESS_DATA, PRODUCTS (9 item), ARTICLES (9 item), RENTAL_TERMS
    └── app.js          # Logika interaksi beranda (render 6 produk 3 3, render 3 artikel, modal S&K & produk)
```

---

## 🎨 Palet Desain & Tipografi

- **Font Family**:
  - Judul / Heading: `Playfair Display` (Serif elegan & klasik butik)
  - Isi Teks / UI: `Plus Jakarta Sans` (Sans-serif modern, bersih, dan mudah dibaca)
- **Warna Utama**:
  - `brand-dark`: `#1c1917` (Stone-900 / Neutral-950)
  - `brand-gold`: `#c5a059` / `#f5efdf` (Aksen kemewahan butik)
  - `brand-rose`: `#d48b96` / `#fdf0f2` (Nuansa pastel anggun)
  - `brand-whatsapp`: `#25D366` / `#20ba59` (Tombol aksi chat WhatsApp)
  - `background`: `#faf9f6` (Off-white hangat)

---

## 🚀 Cara Menjalankan Website

Website ini dibuat *pure front-end* tanpa memerlukan kompilasi rumit (*no build step required*):

### Opsi 1: Buka Langsung di Browser
Klik dua kali file `index.html` pada File Explorer untuk membukanya di Google Chrome, Microsoft Edge, Firefox, atau Safari.

### Opsi 2: Menggunakan Live Server (VS Code)
1. Buka folder `Kagumi-Kebaya` di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan pada `index.html` &rarr; pilih **"Open with Live Server"**.

### Opsi 3: Menggunakan Server Lokal Ringan
```bash
# Menggunakan Python 3:
python -m http.server 8000

# Atau menggunakan PHP Built-in Server:
php -S localhost:8000
```
Akses di browser melalui alamat: `http://localhost:8000`.

---

## ⚙️ Panduan Pengelolaan & Kustomisasi Data

Seluruh data utama tersentralisasi pada berkas [`js/data.js`](js/data.js):

### 1. Mengubah Nomor WhatsApp & Identitas Bisnis
Buka [`js/data.js`](js/data.js) pada objek `BUSINESS_DATA`:
```javascript
const BUSINESS_DATA = {
  name: "Kagumi Sewa Kebaya",
  whatsappNumber: "6282281998800", // Nomor tujuan WhatsApp (format internasional tanpa tanda +)
  whatsappDisplay: "+62 822-8199-8800",
  instagramUrl: "https://instagram.com/kagumi.sewakebaya",
  location: "Way Halim, Bandar Lampung, Lampung",
  operatingHours: "Senin - Sabtu: 09.00 - 18.00 WIB (Minggu dengan reservasi)",
  ...
};
```

### 2. Menambah atau Mengubah Koleksi Kebaya
Tambahkan objek baru ke dalam array `PRODUCTS` di [`js/data.js`](js/data.js):
```javascript
{
  id: 10,
  name: "Kebaya Lavender Princess",
  category: "pastel",
  categoryName: "Pastel Series",
  price: 275000,
  rentalDuration: "3 Hari",
  badge: "New Arrival",
  rating: 4.9,
  reviewsCount: 15,
  image: "gambar/gambarX.jpg",
  gallery: ["gambar/gambarX.jpg"],
  sizes: ["S", "M", "L", "Free Custom Resize"],
  material: "French Chantilly Lace dengan Payet Mutiara Swarovski",
  description: "Deskripsi siluet dan keunggulan kebaya...",
  includes: [
    "Kebaya Atasan Full Payet",
    "Rok Songket Senada",
    "Kamisol / Manset",
    "Free Resize & Laundry"
  ]
}
```

### 3. Menambah Artikel Baru
Tambahkan objek artikel ke array `ARTICLES` di [`js/data.js`](js/data.js):
```javascript
{
  id: 10,
  title: "Judul Artikel Panduan Kebaya Baru",
  category: "Tips Wisuda",
  date: "15 Oktober 2026",
  readingTime: "4 menit baca",
  summary: "Ringkasan isi artikel...",
  image: "URL_FOTO_KEBAYA_INTERNET",
  content: `Isi artikel lengkap...`
}
```

---

&copy; 2026 **Kagumi Sewa Kebaya** &bull; Way Halim, Bandar Lampung, Provinsi Lampung. Seluruh hak cipta dilindungi undang-undang.
