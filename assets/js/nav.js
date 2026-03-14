(() => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (
      (page === 'index.html' || page === '' || page === '/') && (href === 'index.html' || href === './') ||
      href !== 'index.html' && href !== './' && page.includes(href.replace('.html', ''))
    ) {
      link.classList.add('active');
    }
  });
})();
