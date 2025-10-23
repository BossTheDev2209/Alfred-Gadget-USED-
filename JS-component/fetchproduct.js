//ดึง fake api
const productGrid = document.getElementById('productGrid');
const searchInput = document.querySelector('.navbar-search input');

let products = [];

//url
const API_URL = 'https://fakestoreapi.com/products';

async function fetchProducts(){
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        products = data;
        renderProducts(products);
    } catch(err){
        console.error('โหลดข้อมูลไม่ได้ไรวะ :/', err);
    }
}

//RENDER CARD!!
function renderProducts(items){
    productGrid.innerHTML = ''; //Clearing
    items.forEach(item => {
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
    // class show หลัง render เพื่อให้เกิด animation
        productGrid.appendChild(card);
          requestAnimationFrame(() => {
        card.classList.add('show');
      });
    });
}

//Realtime search
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

//โหลดสินค้าตอนเปิดเว็บ
fetchProducts();