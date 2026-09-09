(() => {
  Object.assign(translations.en, {
    "nav.shortcuts": "CLI Shortcuts",
    "nav.workflows": "Smart Workflows",
    "shortcuts.kicker": "Global CLI + shortcuts",
    "shortcuts.title": "Use Dockavel without typing Docker commands all day.",
    "shortcuts.text": "Install the global CLI once, then use short project-aware commands from any directory. Dockavel still resolves the correct project runtime and working directory for you.",
    "shortcuts.install": "One-time install",
    "shortcuts.docs": "See every shortcut and help command →",
    "workflows.kicker": "Smart project workflows",
    "workflows.title": "Detect, check and manage the local database without hiding decisions.",
    "workflows.text": "Inspect project requirements before registration, verify a registered project end to end, and use conservative MySQL/PostgreSQL helpers without memorizing Docker commands.",
    "workflows.docs": "Explore Smart Workflows →"
  });

  Object.assign(translations.fa, {
    "nav.shortcuts": "Shortcutهای CLI",
    "nav.workflows": "Workflowهای هوشمند",
    "shortcuts.kicker": "Global CLI + Shortcutها",
    "shortcuts.title": "برای کار روزمره لازم نیست دستورهای Docker را تایپ کنی.",
    "shortcuts.text": "Global CLI را یک‌بار نصب کن و بعد از هر مسیری با دستورهای کوتاه Project-aware کار کن. Dockavel خودش runtime و working directory درست پروژه را پیدا می‌کند.",
    "shortcuts.install": "نصب یک‌باره",
    "shortcuts.docs": "مشاهده همه Shortcutها و Help ←",
    "workflows.kicker": "Workflowهای هوشمند پروژه",
    "workflows.title": "پروژه را تشخیص بده، سلامت آن را چک کن و دیتابیس local را بدون تصمیم‌گیری مخفی مدیریت کن.",
    "workflows.text": "قبل از ثبت پروژه نیازمندی‌هایش را بررسی کن، پروژه ثبت‌شده را از ابتدا تا انتها چک کن و از helperهای محافظه‌کارانه MySQL/PostgreSQL بدون حفظ کردن دستورات Docker استفاده کن.",
    "workflows.docs": "مشاهده Workflowهای هوشمند ←"
  });

  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('a[href="./docs/commands/"]')) {
    const docsLink = nav.querySelector('a[href="./docs/"]');
    const shortcutLink = document.createElement('a');
    shortcutLink.href = './docs/commands/';
    shortcutLink.dataset.i18n = 'nav.shortcuts';
    shortcutLink.textContent = 'CLI Shortcuts';
    nav.insertBefore(shortcutLink, docsLink || null);
  }
  if (nav && !nav.querySelector('a[href="./docs/workflows/"]')) {
    const docsLink = nav.querySelector('a[href="./docs/"]');
    const workflowLink = document.createElement('a');
    workflowLink.href = './docs/workflows/';
    workflowLink.dataset.i18n = 'nav.workflows';
    workflowLink.textContent = 'Smart Workflows';
    nav.insertBefore(workflowLink, docsLink || null);
  }

  const quickStart = document.querySelector('.quick-start-section');
  if (quickStart && !document.getElementById('cli-shortcuts')) {
    quickStart.insertAdjacentHTML('beforebegin', `
      <section class="section-shell roadmap-section" id="cli-shortcuts">
        <div class="container roadmap-card reveal">
          <div>
            <span class="section-kicker" data-i18n="shortcuts.kicker">Global CLI + shortcuts</span>
            <h2 data-i18n="shortcuts.title">Use Dockavel without typing Docker commands all day.</h2>
            <p data-i18n="shortcuts.text">Install the global CLI once, then use short project-aware commands from any directory.</p>
            <div class="incremental-note"><span>→</span><span><strong data-i18n="shortcuts.install">One-time install</strong>: <code>./dockavel shortcuts:install</code></span></div>
            <p><a class="text-link" href="./docs/commands/" data-i18n="shortcuts.docs">See every shortcut and help command →</a></p>
          </div>
          <div class="roadmap-commands">
            <code>dh</code>
            <code>dpl</code>
            <code>ds my-api</code>
            <code>da my-api migrate</code>
            <code>dco my-api install</code>
            <code>dn frontend run dev</code>
          </div>
        </div>
      </section>`);
  }

  const shortcutsSection = document.getElementById('cli-shortcuts');
  if (shortcutsSection && !document.getElementById('smart-workflows')) {
    shortcutsSection.insertAdjacentHTML('afterend', `
      <section class="section-shell roadmap-section" id="smart-workflows">
        <div class="container roadmap-card reveal">
          <div>
            <span class="section-kicker" data-i18n="workflows.kicker">Smart project workflows</span>
            <h2 data-i18n="workflows.title">Detect, check and manage the local database without hiding decisions.</h2>
            <p data-i18n="workflows.text">Inspect project requirements before registration, verify a registered project end to end, and use conservative MySQL/PostgreSQL helpers without memorizing Docker commands.</p>
            <p><a class="text-link" href="./docs/workflows/" data-i18n="workflows.docs">Explore Smart Workflows →</a></p>
          </div>
          <div class="roadmap-commands">
            <code>dpd my-api</code>
            <code>dpc my-api</code>
            <code>dbs my-api</code>
            <code>dbc my-api</code>
            <code>dbx my-api backup.sql</code>
            <code>ddoc</code>
          </div>
        </div>
      </section>`);
  }

  document.querySelectorAll('.reveal:not(.visible)').forEach((element) => revealObserver.observe(element));
  applyLanguage(currentLanguage);
})();
