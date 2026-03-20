document.addEventListener('DOMContentLoaded', () => {
  const ca = document.getElementById('ba');
  const cd = document.documentElement;

  let ce = cd.classList.contains('an') ? 'an' : 'ao';

  const cf = (cg) => {
    const da = document.getElementsByClassName('af');
    for (let db = 0; db < da.length; db++) {
      const dc = da[db];
      if (cg === 'an') {
        if (dc.id === 'bc') dc.classList.remove('ag');
        if (dc.id === 'bd') dc.classList.add('ag');
      } else {
        if (dc.id === 'bc') dc.classList.add('ag');
        if (dc.id === 'bd') dc.classList.remove('ag');
      }
    }
  };

  cf(ce);

  const ci = () => {
    ce = ce === 'ao' ? 'an' : 'ao';
    if (ce === 'an') {
      cd.classList.add('an');
    } else {
      cd.classList.remove('an');
    }
    cf(ce);
    try {
      localStorage.setItem('theme', ce);
    } catch (cj) {}
  };

  ca.addEventListener('click', (cj) => {
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ci();
      return;
    }

    const ck = ca.getBoundingClientRect();
    const cl = cj.clientX || ck.left + ck.width / 2;
    const cm = cj.clientY || ck.top + ck.height / 2;

    const cn = Math.hypot(
      Math.max(cl, window.innerWidth - cl),
      Math.max(cm, window.innerHeight - cm)
    );

    const co = document.createElement('style');
    co.innerHTML = `* { transition: none !important; }`;
    document.head.appendChild(co);

    const cp = document.startViewTransition(() => {
      ci();
    });

    cp.ready.then(() => {
      cd.animate(
        {
          opacity: [0, 1],
          clipPath: [
            `circle(0px at ${cl}px ${cm}px)`,
            `circle(${cn}px at ${cl}px ${cm}px)`
          ]
        },
        {
          duration: 800,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });

    cp.finished.then(() => {
      if (document.head.contains(co)) {
        document.head.removeChild(co);
      }
    });
  });

  const cq = window.matchMedia('(prefers-color-scheme: dark)');
  
  cq.addEventListener('change', (cj) => {
    let cr = null;
    try {
      cr = localStorage.getItem('theme');
    } catch(err) {}

    if (!cr) {
      const cs = cj.matches ? 'an' : 'ao';
      ce = cs;
      
      if (ce === 'an') {
        cd.classList.add('an');
      } else {
        cd.classList.remove('an');
      }

      cf(ce);
    }
  });
});
