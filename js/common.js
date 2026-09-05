/* ═══════════════════════════════════
   FROZEN VIOLET — Portfolio Script
   ═══════════════════════════════════ */

// ─── SCROLL REVEAL ───
const revEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
const revObs = new IntersectionObserver((entries)=>{
  entries.forEach((e, i) => {
    if(e.isIntersecting){
      // Stagger siblings within same parent
      const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal, .reveal-l, .reveal-r'));
      const idx = siblings.indexOf(e.target);
      const delay = Math.min(idx * 70, 350);
      setTimeout(()=> e.target.classList.add('in'), delay);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin:'0px 0px -32px 0px' });

revEls.forEach(el => revObs.observe(el));


// ─── COUNTER ANIMATION (hero chips + stats strip) ───
function animateCounter(el, target, duration){
  if(el._counterTimer) clearInterval(el._counterTimer);
  let start = 0;
  const step = target / (duration / 16);
  el.textContent = '0';
  el._counterTimer = setInterval(()=>{
    start += step;
    if(start >= target){ el.textContent = target.toLocaleString(); clearInterval(el._counterTimer); el._counterTimer = null; return; }
    el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

// Hero chips
const chipObs = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const num = e.target.querySelector('.chip-n');
    if(num && num.dataset.target) animateCounter(num, parseInt(num.dataset.target), 1000);
    chipObs.unobserve(e.target);
  });
}, {threshold:.5});
document.querySelectorAll('.hero-chip').forEach(c => chipObs.observe(c));

// Stats strip
const statObs = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const num = e.target.querySelector('.stat-num');
    if(num && num.dataset.target) animateCounter(num, parseInt(num.dataset.target), 1400);
    statObs.unobserve(e.target);
  });
}, {threshold:.4});
document.querySelectorAll('.stat-box').forEach(s => statObs.observe(s));

// Inline count-up numbers (e.g. within work descriptions)
const countUpObs = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    if(e.target.dataset.target) animateCounter(e.target, parseInt(e.target.dataset.target), 1600);
    countUpObs.unobserve(e.target);
  });
}, {threshold:.6});
document.querySelectorAll('.count-up').forEach(c => countUpObs.observe(c));

// Replay the count-up every time its card is hovered
document.querySelectorAll('.count-up').forEach(counter => {
  const card = counter.closest('.tl-card') || counter.closest('.tl-item');
  if(!card || !counter.dataset.target) return;
  card.addEventListener('mouseenter', () => {
    animateCounter(counter, parseInt(counter.dataset.target), 1400);
  });
});

// ─── PROFICIENCY BARS ───
const profObs = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const fill = e.target.querySelector('.prof-fill');
    if(fill) fill.style.width = fill.dataset.w + '%';
    profObs.unobserve(e.target);
  });
}, {threshold:.3});
document.querySelectorAll('.prof-row').forEach(r => profObs.observe(r));


// ─── SMOOTH ANCHOR SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a =>{
  a.addEventListener('click', e =>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
