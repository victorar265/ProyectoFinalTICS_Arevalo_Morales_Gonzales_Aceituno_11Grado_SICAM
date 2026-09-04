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
}
 
// ---------------------------------------------------------------------------
// Centro de mando: pestañas de módulos (patrón ARIA tabs)
// ---------------------------------------------------------------------------
const tabs = Array.from(document.querySelectorAll('.module-btn'));
const panels = Array.from(document.querySelectorAll('.module-panel'));
 
function activateTab(targetId) {
  tabs.forEach((tab) => {
    const isTarget = tab.dataset.target === targetId;
    tab.classList.toggle('is-active', isTarget);
    tab.setAttribute('aria-selected', String(isTarget));
    tab.tabIndex = isTarget ? 0 : -1;
  });
  panels.forEach((panel) => {
    const isTarget = panel.id === targetId;
    panel.classList.toggle('is-active', isTarget);
    panel.hidden = !isTarget;
  });
}
 
tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.target));
 
  tab.addEventListener('keydown', (event) => {
    const currentIndex = tabs.indexOf(tab);
    let nextIndex = null;
 
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    }
 
    if (nextIndex !== null) {
      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex].dataset.target);
    }
  });
});
 
// Enlaces del menú principal: abren el módulo correspondiente y hacen scroll
document.querySelectorAll('[data-open-tab]').forEach((link) => {
  link.addEventListener('click', () => {
    activateTab(link.dataset.openTab);
    if (nav) {
      nav.classList.remove('is-open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
 
