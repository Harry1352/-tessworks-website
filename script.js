document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu');
  const navigation = document.querySelector('.nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.video video').forEach(video => {
    video.addEventListener('play', () => video.closest('.video').classList.add('playing'));
    video.addEventListener('loadeddata', () => video.closest('.video').classList.add('playing'));
  });

  const heroFilm = document.querySelector('.hero-film');
  const filmFrame = document.querySelector('.hero-film-shell');
  const soundButton = document.querySelector('.film-audio');

  if (heroFilm && filmFrame) {
    const revealFilm = () => filmFrame.classList.add('film-ready');
    heroFilm.addEventListener('loadeddata', revealFilm, { once: true });
    heroFilm.addEventListener('canplay', revealFilm, { once: true });
    heroFilm.addEventListener('error', () => {
      filmFrame.classList.add('film-unavailable');
      if (soundButton) {
        soundButton.disabled = true;
        soundButton.setAttribute('aria-label', 'The introduction film is in production');
        soundButton.innerHTML = 'FILM IN PRODUCTION <span>·</span>';
      }
    }, { once: true });

    if (soundButton) {
      soundButton.addEventListener('click', () => {
        if (!filmFrame.classList.contains('film-ready')) return;
        heroFilm.muted = !heroFilm.muted;
        soundButton.setAttribute('aria-pressed', String(!heroFilm.muted));
        soundButton.setAttribute('aria-label', heroFilm.muted ? 'Turn film sound on' : 'Turn film sound off');
        soundButton.innerHTML = heroFilm.muted ? 'SOUND OFF <span>＋</span>' : 'SOUND ON <span>−</span>';
      });
    }
  }

  const revealTargets = document.querySelectorAll(
    '.row, .work-card, .focus-panel, .notes-grid>div, .demo-item, .intro-grid, .manifesto p, .domain-card, .home-intro-visual, .home-intro-copy, .method-track article, .project-content, .project-hero-art, .project-visual'
  );

  revealTargets.forEach(element => element.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add('visible'));
  }

  document.querySelectorAll('[data-year]').forEach(element => {
    element.textContent = String(new Date().getFullYear());
  });
});
