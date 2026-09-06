// ═══════════════════════════════════════
// SKILLS SECTION — ported from skills-section.html
// ═══════════════════════════════════════
(function(){
const skSection = document.getElementById('skills');
if(!skSection) return;

const SK_FB={
 cpp:`<svg viewBox="0 0 32 32"><path d="M16 2 28 9v14L16 30 4 23V9z" fill="#00599C"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="11" font-family="monospace" font-weight="bold">C+</text></svg>`,
 py:`<svg viewBox="0 0 32 32"><path d="M15 3h4a5 5 0 0 1 5 5v5H12a4 4 0 0 0-4 4v2H6a4 4 0 0 1-4-4V8a5 5 0 0 1 5-5z" fill="#3B82C4"/><path d="M17 29h-4a5 5 0 0 1-5-5v-5h12a4 4 0 0 0 4-4v-2h2a4 4 0 0 1 4 4v7a5 5 0 0 1-5 5z" fill="#FFD43B"/></svg>`,
 js:`<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#F0DB4F"/><text x="16" y="23" text-anchor="middle" fill="#323330" font-size="15" font-family="monospace" font-weight="bold">JS</text></svg>`,
 sql:`<svg viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="11" ry="4.5" fill="#E8A33D"/><path d="M5 8v16c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5V8" fill="none" stroke="#E8A33D" stroke-width="2.4"/></svg>`,
 html:`<svg viewBox="0 0 32 32"><path d="M5 3h22l-2 23-9 3-9-3z" fill="#E44D26"/><path d="M16 5v22.5l7-2.3L24.6 5z" fill="#F16529"/><path d="M10 9h12l-.4 4H14l.3 3h7l-.7 7-4.6 1.4L11.4 23l-.3-3.4h3l.2 1.6 2.7.8 2.7-.8.3-3.2H10.7z" fill="#fff"/></svg>`,
 css:`<svg viewBox="0 0 32 32"><path d="M5 3h22l-2 23-9 3-9-3z" fill="#264DE4"/><path d="M16 5v22.5l7-2.3L24.6 5z" fill="#2965F1"/><path d="M10.4 9h11.2l-.35 4H14l.3 3h6.8l-.7 7L16 24.4 11.6 23l-.3-3.4h3l.2 1.6 1.5.5 1.6-.5.25-2.6H10.9z" fill="#fff"/></svg>`,
 boot:`<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#7952B3"/><text x="16" y="23" text-anchor="middle" fill="#fff" font-size="17" font-family="serif" font-weight="bold">B</text></svg>`,
 vue:`<svg viewBox="0 0 32 32"><path d="M2 5h6l8 14 8-14h6L16 29z" fill="#41B883"/><path d="M9 5h5l2 3.5L18 5h5L16 17z" fill="#35495E"/></svg>`,
 node:`<svg viewBox="0 0 32 32"><path d="M16 2 28.5 9v14L16 30 3.5 23V9z" fill="#539E43"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="9" font-family="monospace" font-weight="bold">node</text></svg>`,
 react:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="1.6"><ellipse cx="16" cy="16" rx="13" ry="5"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/></g></svg>`,
 fast:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#05998B"/><path d="M17 6 9 18h5l-1 8 9-12h-5z" fill="#fff"/></svg>`,
 pg:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#336791"/><path d="M10 12c0-3 2.6-5 6-5s6 2 6 5c0 5-2 8-2 12M13 24c0-4-1-7-1-11" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>`,
 sqlite:`<svg viewBox="0 0 32 32"><ellipse cx="16" cy="8" rx="10.5" ry="4" fill="#0F80CC"/><path d="M5.5 8v16c0 2.2 4.7 4 10.5 4s10.5-1.8 10.5-4V8" fill="none" stroke="#0F80CC" stroke-width="2.4"/></svg>`,
 shell:`<svg viewBox="0 0 32 32"><rect x="2" y="5" width="28" height="22" rx="3" fill="#1E1E1E" stroke="#4ADE80" stroke-width="1.4"/><path d="M7 12l4 4-4 4M14 20h8" stroke="#4ADE80" stroke-width="1.9" fill="none" stroke-linecap="round"/></svg>`,
 linux:`<svg viewBox="0 0 32 32"><ellipse cx="16" cy="19" rx="9" ry="10" fill="#F5F5F5"/><ellipse cx="16" cy="11" rx="6" ry="7" fill="#1A1A1A"/><circle cx="13.6" cy="10" r="1.7" fill="#fff"/><circle cx="18.4" cy="10" r="1.7" fill="#fff"/><path d="M16 13l-2.2 2.4h4.4z" fill="#F5B325"/></svg>`,
 git:`<svg viewBox="0 0 32 32"><circle cx="8" cy="8" r="3.4" fill="#F1502F"/><circle cx="8" cy="24" r="3.4" fill="#F1502F"/><circle cx="23" cy="16" r="3.4" fill="#F1502F"/><path d="M8 11.5v9M9.6 22 21 17.4" stroke="#F1502F" stroke-width="2" fill="none"/></svg>`,
 vsc:`<svg viewBox="0 0 32 32"><path d="M23 3 11 15 5 10.5 2 12.5 8 16l-6 3.5 3 2L11 17l12 12 7-3.5v-19z" fill="#0F7ACC"/></svg>`,
 socket:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="none" stroke="#EFECF8" stroke-width="1.7"/><path d="M11 21 21 11M12 11h9v9" stroke="#2DD4BF" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
 twilio:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#F22F46"/><circle cx="12.4" cy="12.4" r="2.5" fill="#fff"/><circle cx="19.6" cy="12.4" r="2.5" fill="#fff"/><circle cx="12.4" cy="19.6" r="2.5" fill="#fff"/><circle cx="19.6" cy="19.6" r="2.5" fill="#fff"/></svg>`,
 rest:`<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="none" stroke="#7C5CFF" stroke-width="1.8"/><path d="M6 16h20M16 6c3.4 3.4 3.4 16.6 0 20M16 6c-3.4 3.4-3.4 16.6 0 20" fill="none" stroke="#7C5CFF" stroke-width="1.4"/></svg>`};

const SK_CDN='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const SK_DEV={cpp:'cplusplus/cplusplus-original.svg',py:'python/python-original.svg',
 js:'javascript/javascript-original.svg',sql:'mysql/mysql-original.svg',
 html:'html5/html5-original.svg',css:'css3/css3-original.svg',
 boot:'bootstrap/bootstrap-original.svg',vue:'vuejs/vuejs-original.svg',
 node:'nodejs/nodejs-original.svg',react:'react/react-original.svg',
 fast:'fastapi/fastapi-original.svg',pg:'postgresql/postgresql-original.svg',
 sqlite:'sqlite/sqlite-original.svg',shell:'bash/bash-original.svg',
 linux:'linux/linux-original.svg',git:'git/git-original.svg',
 vsc:'vscode/vscode-original.svg',socket:'socketio/socketio-original.svg',
 twilio:'twilio/twilio-original.svg',rest:'fastapi/fastapi-original.svg'};
window.__SK_FB=SK_FB;
const skIcon=k=>`<img src="${SK_CDN}${SK_DEV[k]}" alt="" loading="lazy"
  onerror="this.parentNode.innerHTML=window.__SK_FB['${k}']">`;

const SK_LANGS=[
  {k:'cpp',n:'C++',v:88,g:'linear-gradient(90deg,#2DD4BF,#4FE3C6)'},
  {k:'py',n:'Python',v:72,g:'linear-gradient(90deg,#5B7CFF,#8AA2FF)'},
  {k:'js',n:'JavaScript',v:78,g:'linear-gradient(90deg,#7C5CFF,#A78BFF)'},
  {k:'sql',n:'SQL',v:80,g:'linear-gradient(90deg,#F5B325,#FFD167)'}];

const SK_SKILLS=[
  {k:'html',n:'HTML',d:'Markup and structure for every page I build'},
  {k:'css',n:'CSS',d:'Layout, responsive design and styling'},
  {k:'boot',n:'Bootstrap',d:'Component library for quick responsive UI'},
  {k:'vue',n:'Vue.js',d:'Frontend framework behind the radiology chat UI'},
  {k:'node',n:'Node.js',d:'JavaScript runtime for backend services'},
  {k:'react',n:'React',d:'Frontend library used to build DevInsight'},
  {k:'fast',n:'FastAPI',d:"Python framework powering DevInsight's API"},
  {k:'pg',n:'PostgreSQL',d:'Primary relational database in production work'},
  {k:'sqlite',n:'SQLite',d:'Lightweight embedded database for side projects'},
  {k:'shell',n:'Shell',d:'Automating environment setup and deployment'},
  {k:'linux',n:'Linux',d:'Daily development and deployment environment'},
  {k:'git',n:'Git',d:'Version control across every project'},
  {k:'vsc',n:'VS Code',d:'Main editor for C++, Python and web work'},
  {k:'socket',n:'Socket.IO',d:'Real-time message transport for live chat'},
  {k:'twilio',n:'Twilio',d:'SMS and fax delivery in the outbound service'},
  {k:'rest',n:'REST APIs',d:'Designing and consuming HTTP service endpoints'},
  {k:'cpp',n:'C++',d:'Primary language for enterprise service work'},
  {k:'py',n:'Python',d:'Backend services, scripting and tooling'},
  {k:'js',n:'JavaScript',d:'Browser and Node.js development'},
  {k:'sql',n:'SQL',d:'Queries, joins and stored procedures'}];

/* ---- bars ---- */
const skLangsEl = document.getElementById('skLangs');
/* rows are static markup in index.html; the bars animate on scroll below */

let skBarsRun=false;
function skRunBars(){
  if(skBarsRun)return; skBarsRun=true;
  skSection.querySelectorAll('.sk-fill').forEach(f=>f.style.width=f.dataset.v+'%');
  skSection.querySelectorAll('.sk-pct').forEach((el,i)=>{
    const t=+el.dataset.t,t0=performance.now()+i*120;
    (function s(n){const p=Math.max(0,Math.min((n-t0)/1400,1));
      el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+'%';
      if(p<1)requestAnimationFrame(s);})(performance.now());});
}
if('IntersectionObserver' in window)
  new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){skRunBars();o.disconnect();}}),
    {threshold:.2}).observe(skSection);
else skRunBars();

/* ---- grid (unique, 20 tiles) ---- */
const skSeen=new Set(),SK_GRID=[];
SK_SKILLS.forEach(s=>{if(!skSeen.has(s.k+s.n)){skSeen.add(s.k+s.n);SK_GRID.push(s);}});
const skIgridEl = document.getElementById('skIgrid');
/* tiles are static markup in index.html */
/* count is written into the HTML */
const skGiByKey={};skSection.querySelectorAll('.sk-gi').forEach(el=>{ if(!skGiByKey[el.dataset.k]) skGiByKey[el.dataset.k]=el; });

/* ---- coverflow bar ---- */
const skTrack=document.getElementById('skTrack'), skVp=document.getElementById('skVp');
const skOne=s=>`<span class="sk-item" data-k="${s.k}">${s.n}</span>`;
/* the marquee items (list + duplicate for seamless wrap) are static markup */

const skItems=[...skTrack.children];
let skMETA=[], skHalf=0, skVpW=0, skReach=0;

function skMeasure(){
  skHalf = skTrack.scrollWidth/2;
  skVpW  = skVp.clientWidth;
  skReach = skVpW/2;
  skMETA = skItems.map(el=>({
    el,
    c: el.offsetLeft + el.offsetWidth/2,
    rest:false
  }));
}
skMeasure();
let skRt;
const skRemeasure=()=>{clearTimeout(skRt);skRt=setTimeout(skMeasure,150);};
window.addEventListener('resize',skRemeasure);
window.addEventListener('orientationchange',skRemeasure);

let skX=0, skPaused=false, skHotKey=null, skLast=performance.now();
const SK_SPEED=0.034;
skVp.addEventListener('mouseenter',()=>skPaused=true);
skVp.addEventListener('mouseleave',()=>skPaused=false);
// touch devices have no hover, so hover-pause is simply unreachable there —
// instead stop advancing whenever the section is off-screen, to save battery
let skOnScreen=true;
if('IntersectionObserver' in window){
  new IntersectionObserver(es=>{ skOnScreen = es[0].isIntersecting; },
    {threshold:0}).observe(skSection);
}

function skLoop(now){
  let dt=now-skLast; skLast=now;
  if(dt>34) dt=34;
  if(!skPaused && skOnScreen){ skX-=SK_SPEED*dt; if(-skX>=skHalf) skX+=skHalf; }
  skTrack.style.transform=`translate3d(${skX.toFixed(2)}px,0,0)`;

  const cx=skReach;
  let bestKey=null, bestD=Infinity, bestEl=null;

  for(let i=0;i<skMETA.length;i++){
    const m=skMETA[i];
    const pos=m.c+skX;
    const dist=Math.abs(pos-cx);

    if(dist>skReach*1.15){
      if(!m.rest){
        m.el.style.transform='rotateY(38deg) scale(0.9)';
        m.el.style.opacity='0.26';
        m.rest=true;
      }
      continue;
    }
    m.rest=false;

    const e0=Math.max(0,1-(dist/skReach)*3.0);
    const e=e0*e0*(3-2*e0);
    const side=(pos-cx)>0?1:-1;
    const rot=-((1-e)*38*side);

    m.el.style.transform=
      `rotateY(${rot.toFixed(1)}deg) translate3d(0,0,${(e*70).toFixed(0)}px) scale(${(0.9+e*0.22).toFixed(3)})`;
    m.el.style.opacity=(0.26+e*0.74).toFixed(2);

    if(dist<bestD){ bestD=dist; bestKey=m.el.dataset.k; bestEl=m.el; }
  }

  if(bestEl!==skLoop._lit){
    if(skLoop._lit) skLoop._lit.classList.remove('sk-lit');
    if(bestEl) bestEl.classList.add('sk-lit');
    skLoop._lit=bestEl;
  }
  if(bestKey!==skHotKey){
    if(skHotKey&&skGiByKey[skHotKey])skGiByKey[skHotKey].classList.remove('sk-hot');
    skHotKey=bestKey;
    if(skHotKey&&skGiByKey[skHotKey])skGiByKey[skHotKey].classList.add('sk-hot');
  }
  requestAnimationFrame(skLoop);
}
requestAnimationFrame(skLoop);

/* ---- binary background ---- */
(function(){
  const cv=document.getElementById('skBinCv');
  if(!cv) return;
  const dpr=Math.min(window.devicePixelRatio||1,1.25);
  const ctx=cv.getContext('2d');
  const base=document.createElement('canvas');
  const bctx=base.getContext('2d');
  const CW=17,CH=19,FONT='11px "DejaVu Sans Mono", ui-monospace, monospace';
  let cols,rows,grid,prev=null;

  function buildBase(){
    base.width=cv.width; base.height=cv.height;
    bctx.font=FONT; bctx.textBaseline='top';
    bctx.clearRect(0,0,base.width,base.height);
    bctx.fillStyle='rgba(124,92,255,0.085)';
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++)
      bctx.fillText(grid[r*cols+c], c*CW, r*CH);
  }
  function resize(){
    const r=cv.getBoundingClientRect();
    cv.width=Math.max(1,Math.round(r.width*dpr));
    cv.height=Math.max(1,Math.round(r.height*dpr));
    cols=Math.ceil(cv.width/CW); rows=Math.ceil(cv.height/CH);
    grid=Array.from({length:cols*rows},()=>Math.random()<0.5?'0':'1');
    ctx.font=FONT; ctx.textBaseline='top';
    buildBase(); prev=null;
  }
  resize();
  let rz;
  const skBgResize=()=>{clearTimeout(rz);rz=setTimeout(resize,150);};
  window.addEventListener('resize',skBgResize);
  window.addEventListener('orientationchange',skBgResize);

  let mx=-9999,my=-9999,drift=0,hasP=false;
  skSection.addEventListener('mousemove',e=>{
    const r=cv.getBoundingClientRect();
    mx=(e.clientX-r.left)*dpr; my=(e.clientY-r.top)*dpr; hasP=true;
  },{passive:true});
  skSection.addEventListener('mouseleave',()=>hasP=false);

  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const R=150*dpr, R2=R*R;
  let f=0;

  function frame(){
    const w=cv.width,h=cv.height;
    f++;
    let fx=mx,fy=my;
    if(!hasP){
      drift+=0.0022;
      fx=w*(0.5+Math.cos(drift*6.2832)*0.32);
      fy=h*(0.5+Math.sin(drift*6.2832*0.7)*0.30);
    }

    const canFlip = !reduce && (f%3===0);
    let flips=0;
    const c0=Math.max(0,Math.floor((fx-R)/CW)), c1=Math.min(cols-1,Math.ceil((fx+R)/CW));
    const r0=Math.max(0,Math.floor((fy-R)/CH)), r1=Math.min(rows-1,Math.ceil((fy+R)/CH));

    if(!prev){ ctx.clearRect(0,0,w,h); ctx.drawImage(base,0,0); }
    else {
      const px0=prev.x, py0=prev.y, pw=prev.w, ph=prev.h;
      ctx.clearRect(px0,py0,pw,ph);
      ctx.drawImage(base, px0,py0,pw,ph, px0,py0,pw,ph);
    }

    if(c1>=c0 && r1>=r0){
      const bx=c0*CW, by=r0*CH, bw=(c1-c0+1)*CW, bh=(r1-r0+1)*CH;
      ctx.clearRect(bx,by,bw,bh);
      ctx.drawImage(base, bx,by,bw,bh, bx,by,bw,bh);
      prev={x:bx,y:by,w:bw,h:bh};
      for(let r=r0;r<=r1;r++) for(let c=c0;c<=c1;c++){
        const i=r*cols+c, px=c*CW, py=r*CH;
        const dx=px-fx, dy=py-fy, d2=dx*dx+dy*dy;
        if(d2<R2){
          const t=1-Math.sqrt(d2)/R;
          if(canFlip && flips<6 && Math.random()<t*0.16){
            grid[i]=grid[i]==='0'?'1':'0'; flips++;
          }
          const a=0.06+Math.pow(t,1.7)*0.70;
          ctx.fillStyle=`rgba(${Math.round(45+75*t)},${Math.round(212+43*t)},${Math.round(191+34*t)},${a.toFixed(3)})`;
          ctx.fillText(grid[i],px,py);
        }
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

})();
