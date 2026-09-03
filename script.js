// ---------------------------------------------------------------------------
// Año dinámico en el footer
// ---------------------------------------------------------------------------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------------------------------------------------------------------------
// Menú de navegación móvil
// ---------------------------------------------------------------------------
const nav = document.querySelector('.site-nav');
const navToggle = document.getElementById('navToggle');

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú móvil al elegir una sección
  document.querySelectorAll('.nav-links-mobile a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
