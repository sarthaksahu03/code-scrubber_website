(() => {
  const track   = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const counter  = document.getElementById('carousel-counter');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const TOTAL  = slides.length;
  let cur      = 0;
  let timer    = null;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'c-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Go to slide ${i + 1}`);
    d.addEventListener('click', () => goSlide(i));
    dotsWrap.appendChild(d);
  });

  function updateUI() {
    track.style.transform = `translateX(-${cur * 100}%)`;
    dotsWrap.querySelectorAll('.c-dot').forEach((d, i) =>
      d.classList.toggle('active', i === cur)
    );
    if (counter) {
      counter.textContent =
        String(cur + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
    }
  }

  function goSlide(n) {
    cur = ((n % TOTAL) + TOTAL) % TOTAL;
    updateUI();
    resetAuto();
  }

  function resetAuto() {
    clearInterval(timer);
    timer = setInterval(() => goSlide(cur + 1), 4000);
  }

  // Arrow buttons
  document.getElementById('carousel-prev')?.addEventListener('click', () => goSlide(cur - 1));
  document.getElementById('carousel-next')?.addEventListener('click', () => goSlide(cur + 1));

  // Touch / swipe
  let touchStartX = null;
  const carousel = document.getElementById('carousel');
  carousel?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel?.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goSlide(cur + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  updateUI();
  resetAuto();
})();
