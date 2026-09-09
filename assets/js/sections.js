(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = './assets/css/sections.css';
  document.head.appendChild(stylesheet);

  Object.assign(translations.en, {
    "nav.workflow": "Workflow",
    "setup.kicker": "Interactive setup",
    "setup.title": "Choose the stack once. Grow it without starting over.",
    "setup.text": "setup.sh keeps source selection, runtimes, databases and optional services in one guided flow. Re-run it later to add PostgreSQL, Redis, Node.js or another PHP runtime without deleting persistent data.",
    "setup.source": "Download source",
    "setup.runtimes": "PHP runtimes",
    "setup.databases": "Databases",
    "setup.services": "Optional services",
    "setup.tools": "Database tools",
    "setup.incremental": "Incremental changes reuse images, build cache, volumes and unchanged containers.",
    "diagnostics.kicker": "Diagnose before rebuilding",
    "diagnostics.title": "Know whether the problem is Docker, the stack, or the network.",
    "diagnostics.text": "Dockavel separates environment health from source connectivity so expensive rebuilds are not the first debugging step.",
    "diagnostics.doctorTitle": "Environment Doctor",
    "diagnostics.doctorText": "Checks Docker CLI and daemon, Compose, WSL, .env, port 80, selected sources, running services and container health. It is read-only.",
    "diagnostics.sourceTitle": "Source Test",
    "diagnostics.sourceText": "Probes the configured Docker registry, Debian mirrors, Composer and npm with HTTP status, latency and remote IP. A failed default route gets an IPv4-only retry for diagnosis.",
    "diagnostics.readonly": "No DNS changes. No mirror changes. No container changes.",
    "services.kicker": "Shared services",
    "services.title": "A focused core instead of an endless service catalog.",
    "services.text": "Enable only what the current projects need. The rest stays out of the way through Compose profiles.",
    "services.nginx": "Always-on local gateway and per-project routing",
    "services.php": "Four simultaneous PHP-FPM runtimes",
    "services.mysql": "Optional MySQL 8 with persistent volume",
    "services.postgres": "Optional PostgreSQL 17 with persistent volume",
    "services.redis": "Optional shared Redis 7",
    "services.node": "Optional shared Node.js 24 runtime",
    "services.admin": "Optional phpMyAdmin and pgAdmin",
    "safety.kicker": "Data-safe by default",
    "safety.title": "Normal operations do not throw away your local data or source code.",
    "safety.text": "Dockavel keeps destructive actions explicit. Database volumes survive a normal shutdown, setup can be re-run incrementally, and removing a project registration never removes the project directory.",
    "safety.down": "Stops containers · keeps named volumes",
    "safety.remove": "Removes metadata + Nginx registration only",
    "safety.hosts": "Hosts file stays under your control",
    "safety.hostsText": "Dockavel prints the required 127.0.0.1 entry instead of editing Windows or Linux hosts automatically.",
    "roadmap.kicker": "Project-aware commands",
    "roadmap.title": "Everyday commands now follow project metadata.",
    "roadmap.text": "Shell, Artisan, Composer and npm are routed to the registered project's runtime and working directory, so developers do not need to remember Compose service or container names.",
    "roadmap.note": "Current productivity layer · project-aware routing",
    "docscta.kicker": "Documentation",
    "docscta.title": "The landing page stays small. The details live in Docs.",
    "docscta.text": "Installation, source presets, Project Manager, project-aware commands, diagnostics, PHP and Node runtimes, databases, local domains, data safety and troubleshooting are documented separately.",
    "docscta.button": "Open documentation →"
  });

  Object.assign(translations.fa, {
    "nav.workflow": "نحوه کار",
    "setup.kicker": "راه‌اندازی تعاملی",
    "setup.title": "استک را انتخاب کن؛ بعداً بدون شروع از صفر بزرگش کن.",
    "setup.text": "setup.sh انتخاب source، نسخه‌های PHP، دیتابیس‌ها و سرویس‌های اختیاری را در یک مسیر تعاملی جمع می‌کند. بعداً می‌توانی PostgreSQL، Redis، Node.js یا PHP دیگری را اضافه کنی، بدون اینکه داده‌های persistent را پاک کنی.",
    "setup.source": "منبع دانلود",
    "setup.runtimes": "نسخه‌های PHP",
    "setup.databases": "دیتابیس‌ها",
    "setup.services": "سرویس‌های اختیاری",
    "setup.tools": "ابزارهای دیتابیس",
    "setup.incremental": "تغییرات مرحله‌ای از imageها، build cache، volumeها و containerهای بدون تغییر دوباره استفاده می‌کنند.",
    "diagnostics.kicker": "قبل از rebuild تشخیص بده",
    "diagnostics.title": "بفهم مشکل از Docker است، از استک است یا از شبکه.",
    "diagnostics.text": "Dockavel سلامت محیط را از دسترسی به sourceها جدا بررسی می‌کند تا اولین راه‌حل هر مشکل یک rebuild سنگین نباشد.",
    "diagnostics.doctorTitle": "Doctor محیط",
    "diagnostics.doctorText": "Docker CLI و daemon، Compose، WSL، فایل .env، پورت 80، sourceهای انتخاب‌شده، سرویس‌های فعال و health containerها را بررسی می‌کند و کاملاً read-only است.",
    "diagnostics.sourceTitle": "تست Source",
    "diagnostics.sourceText": "Docker registry، mirrorهای Debian، Composer و npm را با HTTP status، latency و IP مقصد تست می‌کند. اگر route پیش‌فرض fail شود، برای تشخیص یک تست IPv4-only هم انجام می‌شود.",
    "diagnostics.readonly": "بدون تغییر DNS، بدون تغییر mirror و بدون دستکاری container.",
    "services.kicker": "سرویس‌های مشترک",
    "services.title": "یک core متمرکز، نه لیست بی‌پایان سرویس‌ها.",
    "services.text": "فقط چیزی را فعال کن که پروژه‌های فعلی لازم دارند. بقیه با Compose profile از مسیر کنار می‌روند.",
    "services.nginx": "Gateway همیشه فعال و routing جدا برای هر پروژه",
    "services.php": "چهار PHP-FPM قابل اجرا به‌صورت هم‌زمان",
    "services.mysql": "MySQL 8 اختیاری با volume پایدار",
    "services.postgres": "PostgreSQL 17 اختیاری با volume پایدار",
    "services.redis": "Redis 7 مشترک و اختیاری",
    "services.node": "Node.js 24 مشترک و اختیاری",
    "services.admin": "phpMyAdmin و pgAdmin اختیاری",
    "safety.kicker": "پیش‌فرض امن برای داده‌ها",
    "safety.title": "کارهای عادی قرار نیست دیتای local یا سورس پروژه‌ات را دور بریزند.",
    "safety.text": "Dockavel عملیات مخرب را صریح نگه می‌دارد. volume دیتابیس با shutdown عادی باقی می‌ماند، setup مرحله‌ای دوباره قابل اجراست و حذف registration پروژه هیچ‌وقت پوشه سورس را پاک نمی‌کند.",
    "safety.down": "containerها را متوقف می‌کند · volumeها باقی می‌مانند",
    "safety.remove": "فقط metadata و Nginx registration را حذف می‌کند",
    "safety.hosts": "فایل hosts تحت کنترل خودت می‌ماند",
    "safety.hostsText": "Dockavel فقط entry لازم 127.0.0.1 را چاپ می‌کند و hosts ویندوز یا لینوکس را خودکار ویرایش نمی‌کند.",
    "roadmap.kicker": "دستورهای Project-aware",
    "roadmap.title": "دستورهای روزمره حالا از metadata پروژه پیروی می‌کنند.",
    "roadmap.text": "Shell، Artisan، Composer و npm به runtime و مسیر پروژه ثبت‌شده route می‌شوند تا دیگر لازم نباشد اسم Compose service یا container را حفظ کنی.",
    "roadmap.note": "لایه بهره‌وری فعلی · routing بر اساس پروژه",
    "docscta.kicker": "مستندات",
    "docscta.title": "Landing جمع‌وجور می‌ماند؛ جزئیات داخل Docs است.",
    "docscta.text": "نصب، source presetها، Project Manager، دستورهای Project-aware، Diagnostics، PHP و Node، دیتابیس‌ها، دامنه‌های local، امنیت داده‌ها و troubleshooting جداگانه مستند شده‌اند.",
    "docscta.button": "باز کردن مستندات ←"
  });

  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('a[href="#workflow"]')) {
    const docsLink = nav.querySelector('a[href="./docs/"]');
    const workflowLink = document.createElement('a');
    workflowLink.href = '#workflow';
    workflowLink.dataset.i18n = 'nav.workflow';
    workflowLink.textContent = 'Workflow';
    nav.insertBefore(workflowLink, docsLink || null);
  }

  const quickStart = document.querySelector('.quick-start-section');
  if (!quickStart || document.getElementById('workflow')) {
    applyLanguage(currentLanguage);
    return;
  }

  const expanded = `
    <section class="section-shell setup-section" id="workflow">
      <div class="container expanded-grid">
        <div class="expanded-copy reveal">
          <span class="section-kicker" data-i18n="setup.kicker">Interactive setup</span>
          <h2 data-i18n="setup.title">Choose the stack once. Grow it without starting over.</h2>
          <p data-i18n="setup.text">setup.sh keeps source selection, runtimes, databases and optional services in one guided flow.</p>
          <div class="incremental-note"><span>↻</span><span data-i18n="setup.incremental">Incremental changes reuse images, build cache, volumes and unchanged containers.</span></div>
        </div>
        <div class="setup-console reveal reveal-delay-1">
          <div class="setup-console-head"><span>./setup.sh</span><small>interactive</small></div>
          <div class="setup-option"><span class="setup-check active">✓</span><div><strong data-i18n="setup.source">Download source</strong><small>Iran / IranServer</small></div></div>
          <div class="setup-option"><span class="setup-check active">✓</span><div><strong data-i18n="setup.runtimes">PHP runtimes</strong><small>8.2 · 8.5</small></div></div>
          <div class="setup-option"><span class="setup-check active">✓</span><div><strong data-i18n="setup.databases">Databases</strong><small>MySQL 8 · PostgreSQL 17</small></div></div>
          <div class="setup-option"><span class="setup-check active">✓</span><div><strong data-i18n="setup.services">Optional services</strong><small>Redis 7 · Node.js 24</small></div></div>
          <div class="setup-option"><span class="setup-check">○</span><div><strong data-i18n="setup.tools">Database tools</strong><small>phpMyAdmin · pgAdmin</small></div></div>
        </div>
      </div>
    </section>

    <section class="section-shell diagnostics-section">
      <div class="container">
        <div class="section-heading narrow reveal">
          <span class="section-kicker" data-i18n="diagnostics.kicker">Diagnose before rebuilding</span>
          <h2 data-i18n="diagnostics.title">Know whether the problem is Docker, the stack, or the network.</h2>
          <p data-i18n="diagnostics.text">Dockavel separates environment health from source connectivity.</p>
        </div>
        <div class="diagnostic-grid">
          <article class="diagnostic-card reveal">
            <div class="diagnostic-command">$ ./dockavel doctor</div>
            <h3 data-i18n="diagnostics.doctorTitle">Environment Doctor</h3>
            <p data-i18n="diagnostics.doctorText">Checks Docker, Compose, WSL, ports, sources and container health.</p>
            <div class="diagnostic-list"><span>Docker daemon <b>✓</b></span><span>Port 80 <b>✓</b></span><span>php85 <b>healthy</b></span><span>postgres <b>running</b></span></div>
          </article>
          <article class="diagnostic-card reveal reveal-delay-1">
            <div class="diagnostic-command">$ ./dockavel source:test</div>
            <h3 data-i18n="diagnostics.sourceTitle">Source Test</h3>
            <p data-i18n="diagnostics.sourceText">Probes Docker, Debian, Composer and npm with response details.</p>
            <div class="diagnostic-list"><span>Docker registry <b>HTTP 401</b></span><span>Debian <b>HTTP 200</b></span><span>Composer <b>HTTP 200</b></span><span>npm <b>HTTP 200</b></span></div>
          </article>
        </div>
        <div class="readonly-banner reveal"><span class="status-dot"></span><span data-i18n="diagnostics.readonly">No DNS changes. No mirror changes. No container changes.</span></div>
      </div>
    </section>

    <section class="section-shell services-section">
      <div class="container">
        <div class="section-heading reveal">
          <span class="section-kicker" data-i18n="services.kicker">Shared services</span>
          <h2 data-i18n="services.title">A focused core instead of an endless service catalog.</h2>
          <p data-i18n="services.text">Enable only what the current projects need.</p>
        </div>
        <div class="service-matrix">
          <article class="service-tile reveal"><div class="service-symbol">NG</div><strong>Nginx</strong><small data-i18n="services.nginx">Always-on local gateway and per-project routing</small><span class="service-badge core">CORE</span></article>
          <article class="service-tile reveal"><div class="service-symbol">PHP</div><strong>8.2 · 8.3 · 8.4 · 8.5</strong><small data-i18n="services.php">Four simultaneous PHP-FPM runtimes</small><span class="service-badge">PROFILES</span></article>
          <article class="service-tile reveal"><div class="service-symbol">MY</div><strong>MySQL 8</strong><small data-i18n="services.mysql">Optional MySQL 8 with persistent volume</small><span class="service-badge">OPTIONAL</span></article>
          <article class="service-tile reveal"><div class="service-symbol">PG</div><strong>PostgreSQL 17</strong><small data-i18n="services.postgres">Optional PostgreSQL 17 with persistent volume</small><span class="service-badge">OPTIONAL</span></article>
          <article class="service-tile reveal"><div class="service-symbol">R</div><strong>Redis 7</strong><small data-i18n="services.redis">Optional shared Redis 7</small><span class="service-badge">OPTIONAL</span></article>
          <article class="service-tile reveal"><div class="service-symbol">JS</div><strong>Node.js 24</strong><small data-i18n="services.node">Optional shared Node.js 24 runtime</small><span class="service-badge">OPTIONAL</span></article>
          <article class="service-tile service-tile-wide reveal"><div class="service-symbol">UI</div><strong>phpMyAdmin · pgAdmin</strong><small data-i18n="services.admin">Optional phpMyAdmin and pgAdmin</small><span class="service-badge">OPTIONAL</span></article>
        </div>
      </div>
    </section>

    <section class="section-shell safety-section">
      <div class="container safety-grid">
        <div class="expanded-copy reveal">
          <span class="section-kicker" data-i18n="safety.kicker">Data-safe by default</span>
          <h2 data-i18n="safety.title">Normal operations do not throw away your local data or source code.</h2>
          <p data-i18n="safety.text">Dockavel keeps destructive actions explicit.</p>
          <div class="hosts-note"><strong data-i18n="safety.hosts">Hosts file stays under your control</strong><span data-i18n="safety.hostsText">Dockavel prints the required entry instead of editing it automatically.</span><code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></div>
        </div>
        <div class="safety-terminal reveal reveal-delay-1">
          <div><code>docker compose down</code><span class="safe-state">SAFE</span><small data-i18n="safety.down">Stops containers · keeps named volumes</small></div>
          <div><code>./dockavel project:remove my-api</code><span class="safe-state">SAFE</span><small data-i18n="safety.remove">Removes metadata + Nginx registration only</small></div>
          <div class="danger-row"><code>docker compose down -v</code><span class="danger-state">DESTRUCTIVE</span><small>removes persistent volumes</small></div>
        </div>
      </div>
    </section>

    <section class="section-shell roadmap-section">
      <div class="container roadmap-card reveal">
        <div>
          <span class="section-kicker" data-i18n="roadmap.kicker">Project-aware commands</span>
          <h2 data-i18n="roadmap.title">Everyday commands now follow project metadata.</h2>
          <p data-i18n="roadmap.text">Shell, Artisan, Composer and npm are routed to the registered project's runtime and working directory.</p>
          <span class="roadmap-note" data-i18n="roadmap.note">Current productivity layer · project-aware routing</span>
        </div>
        <div class="roadmap-commands"><code>./dockavel shell my-api</code><code>./dockavel artisan my-api migrate</code><code>./dockavel composer my-api install</code><code>./dockavel npm frontend install</code></div>
      </div>
    </section>

    <section class="section-shell docs-cta-section">
      <div class="container docs-cta-card reveal">
        <div><span class="section-kicker" data-i18n="docscta.kicker">Documentation</span><h2 data-i18n="docscta.title">The landing page stays small. The details live in Docs.</h2><p data-i18n="docscta.text">Installation, source presets, Project Manager, project-aware commands, diagnostics and troubleshooting are documented separately.</p></div>
        <a class="button button-primary" href="./docs/"><span data-i18n="docscta.button">Open documentation →</span></a>
      </div>
    </section>`;

  quickStart.insertAdjacentHTML('beforebegin', expanded);
  document.querySelectorAll('.reveal:not(.visible)').forEach((element) => revealObserver.observe(element));
  applyLanguage(currentLanguage);
})();
