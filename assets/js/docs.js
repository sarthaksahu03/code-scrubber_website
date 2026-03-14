(() => {
  const links    = document.querySelectorAll('.ds-link');
  const sections = document.querySelectorAll('.doc-section');

  function showSection(key) {
    sections.forEach(s => s.classList.toggle('active', s.dataset.doc === key));
    links.forEach(l => l.classList.toggle('active', l.dataset.doc === key));
    // Update URL hash without scroll jump
    history.replaceState(null, '', '#' + key);
  }

  links.forEach(link => {
    link.addEventListener('click', () => showSection(link.dataset.doc));
  });

  // Load from URL hash or default to first section
  const hash = window.location.hash.replace('#', '');
  const firstKey = links[0]?.dataset.doc;
  showSection(hash && document.querySelector(`[data-doc="${hash}"]`) ? hash : firstKey);
})();
