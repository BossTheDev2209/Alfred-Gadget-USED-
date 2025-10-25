window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header.navbar');
  if (window.scrollY > 50) {           // เมื่อ scroll เกิน 50px
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});
