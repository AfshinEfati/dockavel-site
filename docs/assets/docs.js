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
    ['commands', 'commands/', 'CLI & Shortcuts', 'CLI و Shortcutها'],
    ['workflows', 'workflows/', 'Smart Workflows', 'Workflowهای هوشمند'],
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

  function normalizeCommandPageTitles() {
    if (docId !== 'commands') return;

    body.dataset.titleEn = 'CLI & Shortcuts';
    body.dataset.titleFa = 'CLI و Shortcutها';

    const enKicker = document.querySelector('.lang-en .doc-kicker');
    const enTitle = document.querySelector('.lang-en h1');
    const faKicker = document.querySelector('.lang-fa .doc-kicker');
    const faTitle = document.querySelector('.lang-fa h1');

    if (enKicker) enKicker.textContent = 'CLI WORKFLOW';
    if (enTitle) enTitle.textContent = 'Global CLI, shortcuts and project commands';
    if (faKicker) faKicker.textContent = 'CLI WORKFLOW';
    if (faTitle) faTitle.textContent = 'Global CLI، Shortcutها و دستورات پروژه';
  }

  function ensureOverviewSpotlights() {
    if (docId !== 'overview') return;

    const enMeta = document.querySelector('.lang-en .doc-meta');
    const faMeta = document.querySelector('.lang-fa .doc-meta');

    if (!document.querySelector('.docs-shortcut-spotlight')) {
      enMeta?.insertAdjacentHTML('afterend', `
        <div class="notice info docs-shortcut-spotlight">
          <span>&gt;_</span>
          <div>
            <strong>Global CLI & terminal shortcuts are available</strong>
            <p>Install once, then use <code>ds my-api</code>, <code>da my-api migrate</code>, <code>dco my-api install</code>, <code>dn frontend run dev</code> and <code>dh</code> instead of long Docker commands. <a href="${docsRoot}commands/">Open CLI & Shortcuts →</a></p>
          </div>
        </div>`);

      faMeta?.insertAdjacentHTML('afterend', `
        <div class="notice info docs-shortcut-spotlight">
          <span>&gt;_</span>
          <div>
            <strong>Global CLI و Shortcutهای ترمینال فعال هستند</strong>
            <p>یک‌بار نصب کن و بعد به‌جای دستورهای طولانی Docker از <code>ds my-api</code>، <code>da my-api migrate</code>، <code>dco my-api install</code>، <code>dn frontend run dev</code> و <code>dh</code> استفاده کن. <a href="${docsRoot}commands/">رفتن به CLI و Shortcutها ←</a></p>
          </div>
        </div>`);
    }

    if (!document.querySelector('.docs-workflow-spotlight')) {
      document.querySelector('.lang-en .docs-shortcut-spotlight')?.insertAdjacentHTML('afterend', `
        <div class="notice info docs-workflow-spotlight">
          <span>✓</span>
          <div>
            <strong>Smart project workflows</strong>
            <p>Detect project requirements with <code>dpd</code>, check a registered project with <code>dpc</code>, and use safe database helpers such as <code>dbs</code> and <code>dbx</code>. <a href="${docsRoot}workflows/">Open Smart Workflows →</a></p>
          </div>
        </div>`);

      document.querySelector('.lang-fa .docs-shortcut-spotlight')?.insertAdjacentHTML('afterend', `
        <div class="notice info docs-workflow-spotlight">
          <span>✓</span>
          <div>
            <strong>Workflowهای هوشمند پروژه</strong>
            <p>با <code>dpd</code> نیازمندی‌های پروژه را تشخیص بده، با <code>dpc</code> سلامت پروژه را بررسی کن و از helperهای امن دیتابیس مثل <code>dbs</code> و <code>dbx</code> استفاده کن. <a href="${docsRoot}workflows/">رفتن به Workflowهای هوشمند ←</a></p>
          </div>
        </div>`);
    }
  }

  function applyLanguage(next) {
    language = next;
    localStorage.setItem('dockavel-language', language);
    html.lang = language;
    html.dir = language === 'fa' ? 'rtl' : 'ltr';
    renderSidebar();
    normalizeCommandPageTitles();
    ensureOverviewSpotlights();
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
