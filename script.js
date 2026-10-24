// Set tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Pengaturan mode gelap / terang
const themeBtn = document.getElementById('theme-btn');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeBtn.textContent = 'Terang';
}

themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
  themeBtn.textContent = nextTheme === 'dark' ? 'Terang' : 'Gelap';
});