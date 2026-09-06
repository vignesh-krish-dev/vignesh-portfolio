// ─── EXPERIENCE TIMELINE ───
// The cards and their full detail are static markup in index.html, so the content
// is present without JavaScript. This only attaches the expand-to-modal behaviour.

(function initTimeline(){
  const tl = document.getElementById('tl');
  const modal = document.getElementById('tlModal');
  const modalPanel = modal ? modal.querySelector('.tl-modal-panel') : null;
  const modalClose = document.getElementById('tlModalClose');
  const modalIcon = document.getElementById('tlModalIcon');
  const modalTitle = document.getElementById('tlModalTitle');
  const modalScroll = document.getElementById('tlModalScroll');
  const modalWrap = document.getElementById('tlModalWrap');
  const modalDetail = document.getElementById('tlModalDetail');
  if(!tl || !modal) return;

  const cards = Array.from(tl.querySelectorAll('.tl-card'));

  let lastFocused = null;

  function checkEnd(){
    modalWrap.classList.toggle('at-end', modalScroll.scrollTop + modalScroll.clientHeight >= modalScroll.scrollHeight - 4);
  }

  // A viewport resize/rotation reflows the page and fires a scroll event, and that
  // scroll can arrive BEFORE the resize event — so a timer-based guard is unreliable.
  // Compare the viewport box instead: if it changed, this scroll came from the resize.
  let openW = 0, openH = 0, openY = 0;
  function closeOnScroll(){
    if(window.innerWidth !== openW || window.innerHeight !== openH){
      openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
      return;                       // reflow, not a real scroll — keep the card open
    }
    if(Math.abs(window.scrollY - openY) < 4) return;
    closeModal();
  }

  function openModal(pi){
    const card = cards[pi];
    const row = card.closest('.tl-row');
    lastFocused = document.activeElement;

    modal.style.setProperty('--a', row.style.getPropertyValue('--a').trim());
    modalIcon.innerHTML = card.querySelector('.tl-icon').innerHTML;
    modalTitle.textContent = card.querySelector('.work-title').textContent;
    // the detail block is authored in the HTML; move a copy into the modal
    modalDetail.innerHTML = card.querySelector('.tl-detail-src').innerHTML;

    modal.classList.add('active');
    modalScroll.scrollTop = 0;
    setTimeout(checkEnd, 50);
    modalClose.focus();

    // page scroll stays live on purpose: scrolling the page while the modal is open closes it
    openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
    setTimeout(() => window.addEventListener('scroll', closeOnScroll, { passive:true }), 0);
  }

  function closeModal(){
    modal.classList.remove('active');
    window.removeEventListener('scroll', closeOnScroll);
    if(lastFocused) lastFocused.focus();
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => openModal(i));
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openModal(i);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if(!e.target.closest('.tl-modal-panel')) closeModal();
  });
  modalScroll.addEventListener('scroll', checkEnd);
  // a resize/rotate while the modal is open changes how much content fits,
  // so the cached end-of-scroll state must be recomputed
  let modalRt;
  const modalRemeasure = ()=>{
    openW = window.innerWidth; openH = window.innerHeight; openY = window.scrollY;
    if(!modal.classList.contains('active')) return;
    clearTimeout(modalRt); modalRt = setTimeout(checkEnd, 150);
  };
  window.addEventListener('resize', modalRemeasure);
  window.addEventListener('orientationchange', modalRemeasure);
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
})();
