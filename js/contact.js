// ─── CONTACT: click to copy ───
document.querySelectorAll('.ct-ch[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const t=btn.dataset.copy;
    try{ await navigator.clipboard.writeText(t); }
    catch{
      const ta=document.createElement('textarea');
      ta.value=t; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); }catch{}
      ta.remove();
    }
    btn.classList.add('ct-done');
    clearTimeout(btn._t);
    btn._t=setTimeout(()=>btn.classList.remove('ct-done'),1300);
  });
});

// ─── CONTACT: reveal the cards, then the form, when the section scrolls in ───
(function(){
  const row = document.querySelector('.ct-row'), form = document.getElementById('cform');
  const show = () => { row.classList.add('ct-in'); form.classList.add('ct-in'); };
  if(!('IntersectionObserver' in window)){ show(); return; }
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => { if(e.isIntersecting){ show(); o.disconnect(); } });
  }, { threshold: .2 });
  io.observe(row);
})();

// ─── CONTACT FORM ───
const cform = document.getElementById('cform');
if(cform){
  const ctMessage = document.getElementById('ctMessage');
  const ctCount = document.getElementById('ctCount');
  const syncCount = () => ctCount.textContent = `${ctMessage.value.length} / 1000`;
  ctMessage.addEventListener('input', syncCount);
  syncCount();

  const send = document.getElementById('ctSend');
  const sendLbl = send.querySelector('.ct-lbl');
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const rules = [
    ['ctName',    v => v.trim().length >= 2],
    ['ctEmail',   v => EMAIL.test(v.trim())],
    ['ctSubject', v => v.trim().length >= 3],
    ['ctMessage', v => v.trim().length >= 10]
  ];
  function check(id){
    const el = document.getElementById(id);
    const ok = rules.find(r => r[0] === id)[1](el.value);
    el.closest('.ct-f').classList.toggle('ct-bad', !ok);
    return ok;
  }
  rules.forEach(([id]) => {
    const el = document.getElementById(id);
    el.addEventListener('blur', () => { if(el.value) check(id); });
    el.addEventListener('input', () => { if(el.closest('.ct-f').classList.contains('ct-bad')) check(id); });
  });

  cform.addEventListener('submit', async e => {
    e.preventDefault();
    if(rules.map(([id]) => check(id)).includes(false)){
      cform.querySelector('.ct-f.ct-bad input, .ct-f.ct-bad textarea')?.focus();
      return;
    }
    send.dataset.state = 'sending';
    sendLbl.textContent = 'Sending…';

    const note = document.querySelector('.ct-reply');
    const noteText = note ? note.textContent : '';

    try{
      const res = await fetch(cform.action.replace('formsubmit.co/','formsubmit.co/ajax/'), {
        method:'POST',
        headers:{'Accept':'application/json'},
        body:new FormData(cform)
      });
      // FormSubmit answers 200 with {"success":"false", "message":"..."} when the
      // address has not been confirmed yet, so the status code alone is not enough
      let data = null;
      try{ data = await res.json(); }catch{}
      if(!res.ok || (data && String(data.success) === 'false')){
        throw new Error((data && data.message) || ('HTTP ' + res.status));
      }

      sendLbl.textContent = 'Message Sent!';
      cform.reset();
      syncCount();
    }catch(err){
      // never claim success we did not get — and never wipe what they typed
      console.error('Contact form send failed:', err);
      sendLbl.textContent = "Didn't send";
      if(note){
        note.textContent = 'Something went wrong — please email me directly.';
        note.style.color = '#ff6b7d';
        note.style.opacity = '1';
      }
    }

    setTimeout(()=>{
      send.dataset.state = '';
      sendLbl.textContent = 'Send Message';
      if(note){ note.textContent = noteText; note.style.color = ''; note.style.opacity = ''; }
    }, 4500);
  });
}
