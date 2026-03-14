(() => {
  const list     = document.getElementById('post-list');
  const fullView = document.getElementById('post-full');
  const cards    = document.querySelectorAll('.post-card');
  const backBtn  = document.getElementById('back-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.dataset.post;
      const content = document.getElementById('post-content-' + postId);
      if (!content) return;
      fullView.innerHTML = content.innerHTML;
      fullView.classList.add('visible');
      list.style.display = 'none';

      // Re-attach back button listener after innerHTML swap
      fullView.querySelector('.back-btn')?.addEventListener('click', showList);
      window.scrollTo(0, 0);
    });
  });

  function showList() {
    fullView.classList.remove('visible');
    fullView.innerHTML = '';
    list.style.display = '';
    window.scrollTo(0, 0);
  }

  if (backBtn) backBtn.addEventListener('click', showList);
})();
