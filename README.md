# 🎀 Jewerly.Shop.id

**Jewerly.Shop.id** adalah website toko perhiasan berbasis HTML, CSS, dan JavaScript dengan konsep **Y2K, handmade, dan playful-elegant**.  
Website ini menampilkan koleksi tas denim berbahan kain perca, keychain lucu, dompet estetik, serta jewelry yang dirancang untuk ekspresi diri sehari-hari.

🔗 **Live Website:**  
https://naelznd.github.io/Jewerly.Shop.id/

---

## ✨ Fitur Utama

- 🌙 **Dark Mode & Light Mode** (tersimpan otomatis)
- 📱 **Responsive Design** (desktop & mobile)
- 🍔 **Burger Menu untuk Mobile**
- 🖼️ **Carousel Otomatis**
- 💬 **Section Testimonial**
- 🎨 **Hover & Transition Animation**
- 📌 **Modal Alert (Welcome Pop-up)**

---

## 🧩 Struktur Project

# 🎀 Jewerly.Shop.id

**Jewerly.Shop.id** adalah website toko perhiasan berbasis HTML, CSS, dan JavaScript dengan konsep **Y2K, handmade, dan playful-elegant**.  
Website ini menampilkan koleksi tas denim berbahan kain perca, keychain lucu, dompet estetik, serta jewelry yang dirancang untuk ekspresi diri sehari-hari.

🔗 **Live Website:**  
https://naelznd.github.io/Jewerly.Shop.id/

---

## ✨ Fitur Utama

- 🌙 **Dark Mode & Light Mode** (tersimpan otomatis)
- 📱 **Responsive Design** (desktop & mobile)
- 🍔 **Burger Menu untuk Mobile**
- 🖼️ **Carousel Otomatis**
- 💬 **Section Testimonial**
- 🎨 **Hover & Transition Animation**
- 📌 **Modal Alert (Welcome Pop-up)**

---

## 🧩 Struktur Project

Jewerly.Shop.id/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/ (gambar & media pendukung)


---

## 🚀 Cara Menjalankan Project

1. Clone repository:
   ```bash
   git clone https://github.com/naelznd/
2. Masuk ke folder project:
cd Jewerly.Shop.id
3. Buka index.html di browser
atau jalankan dengan Live Server di VS Code.
🛠️ Teknologi yang Digunakan
HTML5 — Struktur halaman
CSS3 — Styling, layout, dan responsive design
JavaScript — Interaksi (dark mode, burger menu, carousel, modal)
GitHub Pages — Hosting website

📌 Penjelasan Section
🧭 Navbar
Navigasi HOME, ABOUT, LOGIN, COMMENT
Burger menu aktif di layar mobile
Toggle Dark Mode

🖼️ Home / Carousel
Slide gambar jewelry berjalan otomatis
Caption estetik dengan font Playfair Display

💎 About
Card produk dengan deskripsi Y2K & handmade
Hover animation untuk visual yang hidup

🔐 Login / Call To Action
Deskripsi brand yang lebih personal
Tombol interaktif untuk eksplorasi koleksi

💬 Comment / Testimonial
Testimoni pelanggan dengan animasi masuk
Layout grid responsif

👩‍🎨 Tentang Pembuat
DWL Nayla Artika Dwi Kesya
Mahasiswa Desain Web
Project ini dibuat sebagai bagian dari UAS Desain Web Lanjutan.
GitHub: https://github.com/naelznd
Website: https://naelznd.github.io/Jewerly.Shop.id/

📄 Lisensi
Project ini dibuat untuk keperluan pembelajaran dan pengembangan.
Bebas dipelajari dan dikembangkan, tidak untuk diklaim sebagai karya pihak lain tanpa izin.
name: Deploy Jewerly Shop Website

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload website files
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4



