// Navegación accesible y animaciones progresivas.
// Todo el contenido sigue siendo visible cuando JavaScript está desactivado.
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

const closeMenu = () => {
  if (!menuToggle || !siteNav) return;
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });
}

const revealTargets = document.querySelectorAll('.reveal');
const preferReducedMotion = window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!preferReducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-intersection-observer');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('visible');
        currentObserver.unobserve(target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 50px 0px' });

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('visible'));
}
