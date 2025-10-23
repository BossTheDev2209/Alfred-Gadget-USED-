// 📦 ดึง fake API
const productGrid = document.getElementById('productGrid');
const searchInput = document.querySelector('.navbar-search input');

let products = [];

// 🌐 URL ของ Fake API
const API_URL = 'https://fakestoreapi.com/products';

// 📥 ดึงข้อมูลจาก API
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    products = data;
    renderProducts(products);
  } catch (err) {
    console.error('โหลดข้อมูลไม่ได้ไรวะ :/', err);
  }
}

// 🧱 สร้างการ์ดสินค้า
function renderProducts(items) {
  productGrid.innerHTML = ''; // เคลียร์ product เดิม

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('pr-card');
    card.innerHTML = `
      <div class="pr-img">
        <span class="tag">${item.category}</span>
        <img src="${item.image}" alt="${item.title}">
        <button class="fav-btn">♡</button>
      </div>
      <h3>${item.title}</h3>
      <p class="category">${item.category}</p>
      <p class="des">${item.description}</p>
      <div class="card-bottom">
        <span class="price">$${item.price}</span>
        <button class="buy-btn">Buy</button>
      </div>
    `;

    productGrid.appendChild(card);

    // 🪄 ใส่ class 'show' แบบ stagger
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100);
  });
}

// 🔍 Realtime Search
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

// 🚀 โหลดสินค้าทันทีตอนเปิดเว็บ
fetchProducts();
