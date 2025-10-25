const themeToggle = document.getElementById('themeToggle');
let currentTheme = document.documentElement.getAttribute('data-theme')

themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'; //newtheme = check if current theme = light if not used dark, else = light
    document.documentElement.setAttribute('data-theme', newTheme);
    currentTheme = newTheme;
    themeToggle.src = newTheme === 'dark' ? 'Icon/moon.png' : 'Icon/sun.png'; //change icon with same logic
});