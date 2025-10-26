<h1 align="center">🔷 Alfred Gadget 🔷</h1>
<h3 align="center">Minimal E-Commerce Web Application</h3>

---

## 🧭 About Project

**Alfred Gadget** คือเว็บแอป E-Commerce มินิมอลที่ออกแบบมาเพื่อให้ผู้ใช้สามารถ  
เรียกดูสินค้า  | ค้นหา  | เพิ่มลงตะกร้า  | 

ตัวโปรเจกต์ใช้เทคโนโลยีพื้นฐาน (HTML, CSS, JavaScript Vanilla)  
และจัดโครงสร้างแบบ **Modular + Responsive-first** เพื่อความยืดหยุ่นในการพัฒนาในอนาคต  

---

## ✨ Key Features

- 🧭 **Navbar Responsive 2-Stage System**  
  - Hamburger Menu + ปัดเพื่อย่อ/ขยาย Navhead (Mobile)
  - รองรับ Dark/Light Theme
- 🛒 **Product Grid + Hover Animation**  
  - สินค้าโหลดแบบเรียลไทม์จาก Fake API
  - Responsive เต็มรูปแบบ
- 🧩 **Pagination System**  
  - แสดงสินค้าแบบแบ่งหน้า (Top / Bottom)
  - รองรับพิมพ์เลขหน้า
- 🔎 **Realtime Search**  
  - ค้นหาชื่อและประเภทสินค้าแบบเรียลไทม์
- 🌓 **Dark Mode Toggle**
- 📱 **Mobile-first Design**  
  - ใช้งานได้ทั้ง Desktop / Tablet / Mobile

---

## 📂 Project Structure

```plaintext
Alfred-Gadget-USED/
│
├── CSS-component/           # ไฟล์ CSS Modular
│   ├── burger.css           # Hamburger & mobile menu
│   ├── footer.css           # Footer section
│   ├── navhead.css          # Navbar & Header
│   ├── pagin.css            # Pagination styling
│   ├── product.css          # Product card + grid layout
│   ├── product-hover.css    # Product hover effect
│   ├── scrollbar.css        # Custom scrollbar
│   ├── shrink-nav.css       # Navbar shrink ตอน scroll
│   ├── star.css             # Star rating (placeholder)
│   └── theme.css            # Theme สีหลัก (Light/Dark)
│
├── Icon/                    # Icon assets
│   ├── Alfred Gadget.png
│   ├── heart.png
│   ├── moon.png
│   ├── phone.png
│   ├── search.png
│   ├── shopping-basket.png
│   ├── sun.png
│   └── ...
│
├── JS-component/            # JavaScript Modular
│   ├── burger.js            # Hamburger menu logic
│   ├── DarkMode.js          # Theme toggle
│   ├── fetchproduct.js      # Fetch ข้อมูลสินค้า
│   ├── navhead.js           # Reveal navhead + collapse
│   ├── pagin.js             # Pagination
│   └── shrink-nav.js        # Navbar shrink animation
│
├── index.html               # หน้าเว็บหลัก
└── README.md
