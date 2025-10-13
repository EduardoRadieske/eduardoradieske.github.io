function updateIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'bi bi-moon' : 'bi bi-sun';
}

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const collapse = document.getElementById('navbarNav');

  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const isMobileView = window.getComputedStyle(navbarToggler).display !== 'none';

      if (isMobileView && collapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        bsCollapse.hide();
      }
    });
  });
});

const themeSwitch = document.getElementById('themeSwitch');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme-portfolio-default') === 'dark') {
  htmlElement.setAttribute('data-bs-theme', 'dark');
  themeSwitch.checked = true;

  updateIcon('dark');
}

themeSwitch.addEventListener('change', function () {
  const theme = this.checked ? 'dark' : 'light';
  htmlElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme-portfolio-default', theme);
  updateIcon(theme);
});