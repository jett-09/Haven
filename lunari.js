document.addEventListener('DOMContentLoaded', () => {

  // ── PAW CURSOR ──
  const cursor = document.getElementById('kitten-cursor');
  let mx = -100, my = -100, cx = -100, cy = -100;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));
  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();

  // paw sparkle trail
  document.addEventListener('mousemove', e => {
    if (Math.random() > 0.35) return;
    const s = document.createElement('span');
    s.className = 'sparkle-trail';
    s.textContent = ['🐾','✨','💗','⭐','💫'][Math.floor(Math.random()*5)];
    s.style.left = e.clientX + (Math.random()*22-11) + 'px';
    s.style.top  = e.clientY + (Math.random()*22-11) + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 650);
  });

  // ── STARS ──
  const sf = document.getElementById('stars');
  if (sf) {
    for (let i = 0; i < 85; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const sz = Math.random() * 3 + 1;
      Object.assign(s.style, {
        width: sz+'px', height: sz+'px',
        left: Math.random()*100+'%', top: Math.random()*100+'%',
        animationDuration: (2+Math.random()*4)+'s',
        animationDelay: (Math.random()*5)+'s'
      });
      sf.appendChild(s);
    }
  }

  // ── AMBIENT SPARKLES ──
  function spawnAmb() {
    const s = document.createElement('span');
    s.className = 'amb-sparkle';
    s.textContent = ['✨','⭐','💫','🌟','·','🐾'][Math.floor(Math.random()*6)];
    s.style.left = Math.random()*100+'vw';
    s.style.bottom = '-30px';
    const dur = 9 + Math.random()*13;
    s.style.animationDuration = dur+'s';
    s.style.fontSize = (9+Math.random()*13)+'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), dur*1000);
  }
  setInterval(spawnAmb, 1300);

  // ── SPARK BURST on hover ──
  document.querySelectorAll('.sparkable, .nav-card, .music-btn').forEach(el => {
    el.addEventListener('mouseenter', e => {
      for (let i = 0; i < 8; i++) {
        const sp = document.createElement('div');
        sp.className = 'spark';
        const angle = (i/8)*360;
        const dist  = 28 + Math.random()*20;
        sp.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--tx:${Math.cos(angle*Math.PI/180)*dist}px;--ty:${Math.sin(angle*Math.PI/180)*dist}px`;
        document.body.appendChild(sp);
        setTimeout(() => sp.remove(), 700);
      }
    });
  });

});
