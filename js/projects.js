// ─── LETTERS LIFT IN SEQUENCE (View Live) ───
document.querySelectorAll('.proj-link span').forEach(label => {
  const text = label.textContent;
  label.innerHTML = '';
  text.split('').forEach((ch, i) => {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.style.setProperty('--i', i);
    letter.textContent = ch === ' ' ? ' ' : ch;
    label.appendChild(letter);
  });
});

