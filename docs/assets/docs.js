(() => {
  const html = document.documentElement;
  const body = document.body;
  const docId = body.dataset.doc || 'overview';
  const docsMarker = '/docs/';
  const pathname = window.location.pathname;
  const markerIndex = pathname.indexOf(docsMarker);
  const siteRoot = markerIndex >= 0 ? pathname.slice(0, markerIndex + 1) : '../';
  const docsRoot = markerIndex >= 0 ? pathname.slice(0, markerIndex + docsMarker.length) : './';
  let language = localStorage.getItem('dockavel-language') || 'en';

  const pages = [
    ['overview', '', 'Overview', 'نمای کلی'],
    ['projects', 'projects/', 'Project Manager', 'مدیریت پروژه'],
    ['commands', 'commands/', 'Project Commands', 'دستورات پروژه'],
    ['network', 'network/', 'Sources & Diagnostics', 'Source و Diagnostics'],
    ['stack', 'stack/', 'Stack & Runtimes', 'استک و Runtimeها'],
    ['troubleshooting', 'troubleshooting/', 'Troubleshooting', 'رفع اشکال'],
    ['reference', 'reference/', 'Reference', 'مرجع']
  ];

  const sidebar = document.querySelector('.sidebar-nav');
  const sidebarTitle = document.querySelector('.sidebar-title');
  const switcher = document.querySelector('.lang-switch');
  const mobileMenu = document.querySelector('.mobile-docs-menu');
  const sidebarElement = document.querySelector('.docs-sidebar');

  function renderSidebar() {
    if (!sidebar) return;
    sidebarTitle.textContent = language === 'fa' ? 'مستندات Dockavel' : 'Dockavel Docs';
    sidebar.innerHTML = pages.map(([id, href, en, fa]) => {
      const label = language === 'fa' ? fa : en;
      const active = id === docId ? ' active' : '';
      return `<a class="${active.trim()}" href="${docsRoot}${href}"><span>${label}</span>${id === docId ? '<small>●</small>' : ''}</a>`;
    }).join('');
  }

  function applyLanguage(next) {
    language = next;
    localStorage.setItem('dockavel-language', language);
    html.lang = language;
    html.dir = language === 'fa' ? 'rtl' : 'ltr';
    renderSidebar();
    if (switcher) {
      switcher.innerHTML = language === 'fa' ? '<span>EN</span> / <b>فا</b>' : '<b>EN</b> / <span>فا</span>';
    }
    const title = language === 'fa' ? body.dataset.titleFa : body.dataset.titleEn;
    if (title) document.title = `${title} — Dockavel Docs`;
    document.querySelectorAll('[data-home-link]').forEach((link) => { link.href = siteRoot; });
    document.querySelectorAll('[data-docs-link]').forEach((link) => { link.href = docsRoot; });
  }

  switcher?.addEventListener('click', () => applyLanguage(language === 'en' ? 'fa' : 'en'));
  mobileMenu?.addEventListener('click', () => sidebarElement?.classList.toggle('open'));
  sidebarElement?.addEventListener('click', (event) => {
    if (event.target.closest('a')) sidebarElement.classList.remove('open');
  });

  applyLanguage(language);
})();
