const paginationContainer = document.getElementById('pagination'); // container ปุ่มเพจ

const itemsPerPage = 9;
let currentPage = 1;

// 📥 ดึงสินค้าจาก API
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    products = data;
    renderPagination(products.length);
    renderProducts();
  } catch (err) {
    console.error('โหลดข้อมูลไม่ได้:', err);
  }
}

// 🧱 Render สินค้าเฉพาะหน้าปัจจุบัน
function renderProducts(items = products) {
  productGrid.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  currentItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('pr-card');
    card.innerHTML = `
      <div class="pr-img">
        <span class="tag">${item.category}</span>
        <img src="${item.image}" alt="${item.title}">
        <button class="fav-btn">♡</button>
      </div>
      <h3 title="${item.title}">${item.title}</h3>
      <p class="category">${item.category}</p>
      <p class="des">${item.description}</p>
      <div class="card-bottom">
        <span class="price">$${item.price}</span>
        <button class="buy-btn">Buy</button>
      </div>
    `;
    productGrid.appendChild(card);
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

// 📄 Render Pagination
function renderPagination(totalItems) {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // ปุ่ม Prev
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '‹ Prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
      renderPagination(products.length);
    }
  });
  paginationContainer.appendChild(prevBtn);

  // หมายเลขเพจ
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    if (i === currentPage) pageBtn.classList.add('active');
    pageBtn.addEventListener('click', () => {
      currentPage = i;
      renderProducts();
      renderPagination(products.length);
    });
    paginationContainer.appendChild(pageBtn);
  }

  // ปุ่ม Next
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next ›';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts();
      renderPagination(products.length);
    }
  });
  paginationContainer.appendChild(nextBtn);
}

// 🔍 ค้นหาสินค้าแบบเรียลไทม์
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  currentPage = 1; // รีเซ็ตหน้า
  renderPagination(filtered.length);
  renderProducts(filtered);
});

// 🚀 โหลดสินค้าตอนเปิดเว็บ
fetchProducts();
