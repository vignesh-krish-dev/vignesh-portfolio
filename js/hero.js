// ─── ROLE REVEAL (vertical carousel rotator) ───
const roles = ['Junior Software Engineer', 'C++ Developer', 'Backend Developer'];
const heroRoleRotator = document.getElementById('heroRoleRotator');
const heroRoleList = document.getElementById('heroRoleList');

if(heroRoleRotator && heroRoleList){
  const HOLD = 2600;   // ms each role stays still
  const GLIDE = 1050;  // ms of travel between roles

  // duplicate the first role at the end so the wrap is invisible
  heroRoleList.innerHTML = [...roles, roles[0]].map(r => `<div>${r}</div>`).join('');

  const lineH = () => parseFloat(getComputedStyle(heroRoleRotator).getPropertyValue('--role-h'));

  let ri = 0;
  function step(){
    ri++;
    heroRoleList.style.transform = `translateY(${-ri * lineH()}px)`;

    if(ri >= roles.length){
      // now showing the duplicate — snap back with no transition so the loop is invisible
      setTimeout(() => {
        heroRoleList.style.transition = 'none';
        heroRoleList.style.transform = 'translateY(0)';
        ri = 0;
        void heroRoleList.offsetHeight; // force reflow before restoring the transition
        heroRoleList.style.transition = '';
      }, GLIDE + 30);
    }
  }

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion) setInterval(step, HOLD + GLIDE);
}



// ─── SPOTLIGHT TEXT REVEAL (badge) ───
const heroBadge = document.getElementById('heroBadge');
const badgeText = heroBadge ? heroBadge.querySelector('.badge-text') : null;
if(heroBadge && badgeText){
  heroBadge.addEventListener('mouseenter', () => heroBadge.classList.add('spotlighting'));
  heroBadge.addEventListener('mouseleave', () => heroBadge.classList.remove('spotlighting'));
  heroBadge.addEventListener('mousemove', e => {
    const rect = badgeText.getBoundingClientRect();
    badgeText.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    badgeText.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
}


// ─── FILL-FROM-CURSOR BUTTON (Get in Touch) ───
document.querySelectorAll('.btn-fill').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--fx', ((e.clientX - rect.left) / rect.width * 100) + '%');
    btn.style.setProperty('--fy', ((e.clientY - rect.top) / rect.height * 100) + '%');
  });
});

