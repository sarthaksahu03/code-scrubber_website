(() => {
  const root  = document.documentElement;
  const btn   = document.getElementById('theme-btn');
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  function applyTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (icon)  icon.textContent  = dark ? '☽' : '☀';
    if (label) label.textContent = dark ? 'dark' : 'light';
  }

  // Load saved preference on page load
  const saved = localStorage.getItem('cs-theme');
  applyTheme(saved === 'dark');

  // Toggle on button click
  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') !== 'dark';
      applyTheme(isDark);
      localStorage.setItem('cs-theme', isDark ? 'dark' : 'light');
    });
  }
})();
