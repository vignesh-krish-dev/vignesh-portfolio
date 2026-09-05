// ─── NAV + BTT ───
const nav = document.getElementById('nav');
const btt = document.getElementById('btt');

window.addEventListener('scroll', ()=>{
  nav.classList.toggle('stuck', scrollY > 40);
  btt.classList.toggle('on', scrollY > 500);
  setActiveNav();
}, {passive:true});

if(btt) btt.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));


// ─── BURGER ───
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if(burger && navLinks){
  let navScrollY = 0;

  const menuOpen = () => navLinks.classList.contains('open');

  const openMenu = () => {
    navScrollY = window.scrollY;
    burger.classList.add('x');
    navLinks.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    // lock the page behind the panel without losing scroll position
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + navScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    const first = navLinks.querySelector('a');
    if(first) first.focus();
  };

  const closeMenu = (refocus) => {
    burger.classList.remove('x');
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, navScrollY);
    if(refocus) burger.focus();
  };

  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'navLinks');
  burger.setAttribute('aria-label', 'Menu');

  burger.addEventListener('click', ()=>{ menuOpen() ? closeMenu(false) : openMenu(); });

  navLinks.querySelectorAll('a').forEach(a =>{
    a.addEventListener('click', ()=>{ if(menuOpen()) closeMenu(false); });
  });

  // Escape closes; Tab is trapped inside the open panel
  document.addEventListener('keydown', e =>{
    if(!menuOpen()) return;
    if(e.key === 'Escape'){ e.preventDefault(); closeMenu(true); return; }
    if(e.key !== 'Tab') return;
    // must be in DOM order — the social icons and the burger sit AFTER the link
    // list in the markup, and all of them stay visible while the panel is open
    const focusable = [
      ...navLinks.querySelectorAll('a'),
      ...document.querySelectorAll('.nav-social a'),
      burger
    ].filter(el => el.offsetParent !== null || el === burger);
    if(!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  });

  // if the viewport grows back to the desktop bar, drop the mobile state
  window.addEventListener('resize', ()=>{
    if(menuOpen() && window.innerWidth > 900) closeMenu(false);
  });
}


// ─── ACTIVE NAV ───
const sections = document.querySelectorAll('section[id]');
function setActiveNav(){
  const y = scrollY + 90;
  sections.forEach(s =>{
    const lnk = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if(lnk) lnk.classList.toggle('on', y >= s.offsetTop && y < s.offsetTop + s.offsetHeight);
  });
}

