// ─── CERTIFICATE LIGHTBOX ───
const certLightbox = document.getElementById('certLightbox');
if(certLightbox){
  const lbImg = document.getElementById('lightboxImg');
  const lbName = document.getElementById('lightboxName');
  const lbOrg = document.getElementById('lightboxOrg');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  const certCards = Array.from(document.querySelectorAll('.cert-card'));
  let lastFocused = null;
  let currentIndex = 0;

  const updateNavState = () => {
    lbPrev.disabled = currentIndex === 0;
    lbNext.disabled = currentIndex === certCards.length - 1;
  };
  const showCert = index => {
    currentIndex = index;
    const card = certCards[currentIndex];
    lbImg.src = card.dataset.full;
    lbImg.alt = card.dataset.name || '';
    lbName.textContent = card.dataset.name || '';
    lbOrg.textContent = card.dataset.org || '';
    updateNavState();
  };
  const navEl = document.getElementById('nav');
  // html{scrollbar-gutter:stable} already holds the scrollbar's space open, so
  // hiding the scrollbar changes no widths and nothing needs nudging. Only fall
  // back to manual padding on browsers without gutter support — running both
  // would over-compensate and cause the very shift we are removing.
  const needsManualPad = !(window.CSS && CSS.supports &&
                           CSS.supports('scrollbar-gutter', 'stable'));

  const openLightbox = card => {
    lastFocused = document.activeElement;
    showCert(certCards.indexOf(card));
    certLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    if(needsManualPad){
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      if(scrollbarW > 0){
        document.body.style.paddingRight = scrollbarW + 'px';
        // #nav is position:fixed with left:0;right:0, so it is sized against the
        // viewport rather than body's padding box
        if(navEl) navEl.style.right = scrollbarW + 'px';
      }
    }
    lbClose.focus();
  };
  const closeLightbox = () => {
    certLightbox.classList.remove('active');
    document.body.style.overflow = '';
    if(needsManualPad){
      document.body.style.paddingRight = '';
      if(navEl) navEl.style.right = '';
    }
    if(lastFocused) lastFocused.focus();
  };
  const goPrev = () => { if(currentIndex > 0) showCert(currentIndex - 1); };
  const goNext = () => { if(currentIndex < certCards.length - 1) showCert(currentIndex + 1); };

  const spawnRipple = (card, x, y) => {
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const ripple = document.createElement('span');
    ripple.className = 'cert-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - rect.left - size / 2) + 'px';
    ripple.style.top = (y - rect.top - size / 2) + 'px';
    card.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  };

  certCards.forEach(card => {
    card.addEventListener('click', e => {
      spawnRipple(card, e.clientX, e.clientY);
      setTimeout(() => openLightbox(card), 260);
    });
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openLightbox(card);
      }
    });
  });
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', goPrev);
  lbNext.addEventListener('click', goNext);
  certLightbox.addEventListener('click', e => {
    if(!e.target.closest('.lightbox-panel') && !e.target.closest('.lightbox-nav')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if(!certLightbox.classList.contains('active')) return;
    if(e.key === 'Escape') closeLightbox();
    else if(e.key === 'ArrowLeft'){ e.preventDefault(); goPrev(); }
    else if(e.key === 'ArrowRight'){ e.preventDefault(); goNext(); }
  });
}
