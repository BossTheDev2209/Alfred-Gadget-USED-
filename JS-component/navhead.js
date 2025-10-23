const navbar = document.querySelector('.navbar');

let menuState = 0; // 0 = ปิดหมด, 1 = reveal navhead, 2 = เปิดเมนู
let startY = 0;

//  ปัดขึ้นเพื่อ collapse navhead
window.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener('touchmove', (e) => {
  const diff = startY - e.touches[0].clientY;
  if (diff > 30 && window.innerWidth <= 768) {
    navbar.classList.add('collapsed');
    menuState = 0;
    mobileMenu.classList.remove('show');
  }
  if (diff < -30 && window.innerWidth <= 768) {
    navbar.classList.remove('collapsed');
  }
});

//  Hamburger toggle (สองจังหวะ)
hamburger.addEventListener('click', () => {
  if (menuState === 0) {
    // จังหวะ 1: reveal navhead
    navbar.classList.remove('collapsed');
    menuState = 1;
  } else if (menuState === 1) {
    // จังหวะ 2: เปิดเมนู
    mobileMenu.classList.add('show');
    menuState = 2;
  } else if (menuState === 2) {
    // จังหวะ 3: ปิดเมนู
    mobileMenu.classList.remove('show');
    menuState = 1;
  }
});
