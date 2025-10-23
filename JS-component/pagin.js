const topPagination = document.getElementById('pagination-top');
const bottomPagination = document.getElementById('pagination-bottom');

const itemsPerPage = 12;
let currentPage = 1;
let filteredItems = []; // ← เก็บสินค้าที่ถูก search

// 📥 Fetch Product
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    products = data;
    filteredItems = products;
    renderProducts();
    renderPagination(filteredItems.length);
  } catch (err) {
    console.error('โหลดข้อมูลไม่ได้:', err);
  }
}

// 🧱 Render สินค้าต่อหน้า
function renderProducts() {
  productGrid.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

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

// 📄 Render Pagination (ใช้ได้ทั้งบน/ล่าง)
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  topPagination.innerHTML = '';
  bottomPagination.innerHTML = '';

  const createPagination = (container) => {
    // Prev
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹ Prev';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderProducts();
        renderPagination(filteredItems.length);
      }
    });
    container.appendChild(prevBtn);

    // เลขหน้า
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      if (i === currentPage) pageBtn.classList.add('active');
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        renderProducts();
        renderPagination(filteredItems.length);
      });
      container.appendChild(pageBtn);
    }

    // Next
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next ›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
        renderPagination(filteredItems.length);
      }
    });
    container.appendChild(nextBtn);

    // ช่องพิมพ์เลขหน้า
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.max = totalPages;
    input.placeholder = 'Go to...';
    input.classList.add('page-input');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const page = Number(input.value);
        if (page >= 1 && page <= totalPages) {
          currentPage = page;
          renderProducts();
          renderPagination(filteredItems.length);
        } else {
          input.value = '';
        }
      }
    });
    container.appendChild(input);
  };

  createPagination(topPagination);
  createPagination(bottomPagination);
}

// 🔍 ค้นหา
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  filteredItems = products.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderProducts();
  renderPagination(filteredItems.length);
});

// 🚀 โหลดข้อมูล
fetchProducts();
