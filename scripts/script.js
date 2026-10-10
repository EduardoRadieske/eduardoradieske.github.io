document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.getElementById('themeSwitch');
  const themeIcon = document.getElementById('themeIcon');
  const navbarNav = document.getElementById('navbarNav');

  function applyTheme(theme, savePreference = false) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    themeSwitch.checked = theme === 'dark';
    themeIcon.className = theme === 'dark' ? 'bi bi-moon' : 'bi bi-sun';

    if (savePreference) {
      localStorage.setItem('theme-portfolio-default', theme);
    }
  }

  const savedTheme = localStorage.getItem('theme-portfolio-default');
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

  themeSwitch.addEventListener('change', function () {
    applyTheme(this.checked ? 'dark' : 'light', true);
  });

  navbarNav.addEventListener('click', function (event) {
    if (event.target.closest('.nav-link') && navbarNav.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navbarNav).hide();
    }
  });
});
