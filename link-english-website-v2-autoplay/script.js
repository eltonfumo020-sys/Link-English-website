
/* Official Link English WhatsApp number */
const WHATSAPP_NUMBER = '258845441607';

/* MOBILE NAVIGATION */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

/* WHATSAPP LINKS */
document.querySelectorAll('a.whatsapp-link[data-whatsapp]').forEach(link => {
  const message =
    link.dataset.message ||
    'Hello! I would like to know more about Link English.';

  link.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});


/* INFINITE COURSES CAROUSEL */
const carousel = document.getElementById('programCarousel');
const prev = document.getElementById('programPrev');
const next = document.getElementById('programNext');
const dots = document.getElementById('carouselDots');

if (carousel && prev && next && dots) {

  const originalCards = [
    ...carousel.querySelectorAll('.course-card')
  ];

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (originalCards.length > 1) {

    /* Remove old navigation dots */
    dots.innerHTML = '';

    /* Duplicate cards to create the infinite loop */
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);

      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('inert', '');

      /* Prevent duplicate HTML IDs */
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(element => {
        element.removeAttribute('id');
      });

      carousel.appendChild(clone);
    });

    let loopWidth = 0;
    let step = 0;
    let animationFrame = null;
    let previousTime = 0;
    let paused = false;
    let resumeTimer = null;

    const SPEED = 35; // Pixels per second

    function measureCarousel() {
      const firstCard = originalCards[0];
      const firstClone = carousel.children[originalCards.length];

      if (!firstCard || !firstClone) return;

      loopWidth = firstClone.offsetLeft - firstCard.offsetLeft;

      const styles = getComputedStyle(carousel);
      const gap = parseFloat(styles.columnGap || styles.gap) || 0;

      step = firstCard.getBoundingClientRect().width + gap;
    }

    /* Create navigation dots */
    originalCards.forEach((card, index) => {
      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to program ${index + 1}`);

      dot.addEventListener('click', () => {
        pauseTemporarily();

        const currentCycle = carousel.scrollLeft >= loopWidth
          ? loopWidth
          : 0;

        carousel.scrollTo({
          left: currentCycle + index * step,
          behavior: 'smooth'
        });
      });

      dots.appendChild(dot);
    });

    function updateDots() {
      if (!step || !loopWidth) return;

      let position = carousel.scrollLeft % loopWidth;
      let index = Math.round(position / step);

      index = Math.min(index, originalCards.length - 1);

      [...dots.children].forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    /* Keep the movement continuous */
    function animate(time) {
      if (!previousTime) previousTime = time;

      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!paused && !document.hidden && !prefersReducedMotion) {
        carousel.scrollLeft += SPEED * elapsed / 1000;

        /* Seamlessly return to the equivalent position */
        if (loopWidth > 0 && carousel.scrollLeft >= loopWidth) {
          carousel.scrollLeft -= loopWidth;
        }
      }

      updateDots();
      animationFrame = requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (!animationFrame && !prefersReducedMotion) {
        previousTime = 0;
        animationFrame = requestAnimationFrame(animate);
      }
    }

    function stopAnimation() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    }

    function pauseTemporarily() {
      paused = true;
      clearTimeout(resumeTimer);

      resumeTimer = setTimeout(() => {
        paused = false;
      }, 3000);
    }

    /* Arrow controls */
    next.addEventListener('click', () => {
      pauseTemporarily();

      carousel.scrollBy({
        left: step,
        behavior: 'smooth'
      });
    });

    prev.addEventListener('click', () => {
      pauseTemporarily();

      if (carousel.scrollLeft <= 5) {
        carousel.scrollLeft += loopWidth;
      }

      carousel.scrollBy({
        left: -step,
        behavior: 'smooth'
      });
    });

    /* Pause when visitors interact */
    carousel.addEventListener('mouseenter', () => {
      paused = true;
    });

    carousel.addEventListener('mouseleave', () => {
      paused = false;
    });

    carousel.addEventListener('focusin', () => {
      paused = true;
    });

    carousel.addEventListener('focusout', () => {
      paused = false;
    });

    carousel.addEventListener('touchstart', () => {
      paused = true;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      paused = false;
    }, { passive: true });

    carousel.addEventListener('scroll', updateDots, {
      passive: true
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    });

    window.addEventListener('resize', () => {
      measureCarousel();
      updateDots();
    });

    /* Initialize */
    measureCarousel();
    updateDots();
    startAnimation();

    /* Recalculate after images and fonts load */
    window.addEventListener('load', () => {
      measureCarousel();
      updateDots();
    });
  }
}

/* FOOTER YEAR */
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
