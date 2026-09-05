// ─── PARTICLE CANVAS ───
(function(){
  const c = document.getElementById('cvs');
  if(!c) return;
  const ctx = c.getContext('2d');
  let W, H, pts = [];
  // Lavender × Arctic particle colors
  const COLS = [
    'rgba(79,70,229,',
    'rgba(124,58,237,',
    'rgba(129,140,248,',
    'rgba(199,210,254,'
  ];
  const LINK_COLOR = 'rgba(99,102,241,';

  function resize(){
    W = c.width = innerWidth;
    H = c.height = innerHeight;
  }

  function Particle(){
    this.x = Math.random()*W;
    this.y = Math.random()*H;
    this.r = Math.random()*1.4+0.3;
    this.vx = (Math.random()-.5)*.22;
    this.vy = (Math.random()-.5)*.22;
    this.col = COLS[Math.floor(Math.random()*COLS.length)];
    this.a = Math.random()*.3+.05;
    this.p = Math.random()*Math.PI*2;
    this.sp = Math.random()*.006+.004;
  }

  function init(){
    resize();
    pts = [];
    const n = Math.min(Math.floor(W*H/10000), 120);
    for(let i=0; i<n; i++) pts.push(new Particle());
  }

  function tick(){
    ctx.clearRect(0,0,W,H);
    // Draw connections first (below dots)
    for(let i=0; i<pts.length; i++){
      for(let j=i+1; j<pts.length; j++){
        const dx = pts[i].x-pts[j].x, dy = pts[i].y-pts[j].y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if(d < 110){
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = LINK_COLOR + (.08*(1-d/110))+')';
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    // Draw particles
    pts.forEach(p => {
      p.p += p.sp;
      const a = Math.max(0, Math.min(1, p.a + Math.sin(p.p)*.06));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.col + a + ')';
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > W) p.vx *= -1;
      if(p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(tick);
  }

  // debounced so dragging a window edge / rotating a phone doesn't thrash
  let cvsRt;
  const cvsReinit = ()=>{ clearTimeout(cvsRt); cvsRt = setTimeout(init, 150); };
  window.addEventListener('resize', cvsReinit);
  window.addEventListener('orientationchange', cvsReinit);
  init();
  tick();
})();

// ─── CURSOR TRAIL (subtle ice dots) ───
(function(){
  const dots = [];
  const MAX = 8;
  let mx = 0, my = 0;

  window.addEventListener('mousemove', e =>{ mx = e.clientX; my = e.clientY; }, {passive:true});

  function spawnDot(){
    const d = document.createElement('div');
    d.style.cssText = `
      position:fixed;
      width:4px;height:4px;
      border-radius:50%;
      background:rgba(160,200,255,.35);
      pointer-events:none;
      z-index:9999;
      transform:translate(-50%,-50%);
      transition:opacity .6s ease,transform .6s ease;
    `;
    d.style.left = mx+'px';
    d.style.top = my+'px';
    document.body.appendChild(d);
    dots.push(d);
    if(dots.length > MAX){
      const old = dots.shift();
      if(old.parentNode) old.parentNode.removeChild(old);
    }
    requestAnimationFrame(()=>{
      d.style.opacity = '0';
      d.style.transform = 'translate(-50%,-50%) scale(1.5)';
    });
    setTimeout(()=>{ if(d.parentNode) d.parentNode.removeChild(d); }, 700);
  }

  let last = 0;
  window.addEventListener('mousemove', e =>{
    const now = performance.now();
    if(now - last > 80){ last = now; spawnDot(); }
  }, {passive:true});
})();
