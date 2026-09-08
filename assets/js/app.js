const translations = {
  en: {
    "nav.features": "Features",
    "nav.architecture": "Architecture",
    "nav.docs": "Docs",
    "hero.eyebrow": "Local development stack · Laravel + Node.js",
    "hero.title": "Local development,<br>without the mess.",
    "hero.lead": "Run multiple Laravel and Node.js projects on one clean Docker stack, route every project to the right runtime, and keep network diagnostics close when the internet is not.",
    "hero.start": "Get started",
    "hero.github": "View on GitHub",
    "hero.terminalFooter": "Designed for real local environments",
    "trust.label": "One stack. Multiple projects. Only the services you actually need.",
    "problem.kicker": "Why Dockavel?",
    "problem.title": "Your local stack should help you ship, not become another project.",
    "problem.lead": "Dockavel keeps the useful automation and leaves the configuration maze behind.",
    "problem.multiTitle": "Different runtimes, one workspace",
    "problem.multiText": "Run PHP 8.2 and PHP 8.5 side by side without cloning an entire infrastructure stack per project.",
    "problem.networkTitle": "Networks are not always reliable",
    "problem.networkText": "Use explicit regional mirrors and diagnose Docker, Debian, Composer, npm, DNS and route problems without hidden fallbacks.",
    "problem.projectTitle": "Projects should know their runtime",
    "problem.projectText": "Keep tiny per-project metadata and let Dockavel generate routing instead of memorizing container names.",
    "features.kicker": "Core capabilities",
    "features.title": "Useful automation. Small surface area.",
    "features.lead": "Dockavel stays opinionated: features belong in the core when they make setup faster, project management simpler, or debugging easier.",
    "features.managerTitle": "Register, edit, list and remove projects",
    "features.managerText": "Dockavel detects Laravel or Node.js, stores minimal metadata, generates Nginx config, validates it and reloads safely.",
    "features.phpTitle": "PHP 8.2 → 8.5 together",
    "features.phpText": "Enable only the versions you need. Nginx routes each local domain to the correct FPM service.",
    "features.doctorTitle": "Doctor that does not “fix” behind your back",
    "features.doctorText": "Read-only checks for Docker, WSL, ports, stack health and source connectivity, including IPv4-route hints.",
    "features.sourceTitle": "Explicit download sources",
    "features.sourceText": "Official, IranServer, Runflare, China or custom endpoints. A regional preset does not silently fall back elsewhere.",
    "features.servicesTitle": "Only what the project needs",
    "features.servicesText": "MySQL, PostgreSQL, Redis, Node.js, phpMyAdmin and pgAdmin are optional Compose profiles.",
    "manager.kicker": "Project-aware by design",
    "manager.title": "Tiny metadata. Predictable routing.",
    "manager.text": "Each registered project keeps just enough information for Dockavel to understand its domain, runtime and shared services.",
    "manager.point1": "No giant project configuration file",
    "manager.point2": "Nginx validation before reload",
    "manager.point3": "Rollback when generated config fails",
    "manager.point4": "Removing registration never deletes source code",
    "architecture.kicker": "Architecture",
    "architecture.title": "One shared stack, clear boundaries.",
    "architecture.lead": "Applications share infrastructure without losing runtime-level routing.",
    "architecture.requests": "Local domains",
    "architecture.routing": "project-aware routing",
    "sources.kicker": "Regional-source aware",
    "sources.title": "Same stack. Explicit route to the internet.",
    "sources.text": "Choose where Docker images and package repositories come from. Dockavel keeps the choice visible instead of hiding fallback behavior.",
    "sources.custom": "Bring your own endpoints",
    "quick.kicker": "Quick start",
    "quick.title": "From clone to local stack in a few commands.",
    "quick.text": "The installer handles source selection, runtimes, databases and optional services interactively.",
    "quick.docs": "Read the installation guide →",
    "closing.title": "More capability. Less configuration.",
    "closing.text": "Dockavel is growing around the workflows developers actually repeat.",
    "closing.button": "Explore Dockavel",
    "footer.text": "A lightweight multi-project development stack for Laravel and Node.js."
  },
  fa: {
    "nav.features": "امکانات",
    "nav.architecture": "معماری",
    "nav.docs": "مستندات",
    "hero.eyebrow": "استک توسعه محلی · Laravel + Node.js",
    "hero.title": "توسعه محلی،<br>بدون شلوغ‌کاری.",
    "hero.lead": "چند پروژه Laravel و Node.js را روی یک استک تمیز Docker اجرا کن، هر پروژه را به runtime درست بفرست و وقتی اینترنت قابل اعتماد نیست، ابزار تشخیص شبکه را همان‌جا کنار دستت داشته باش.",
    "hero.start": "شروع سریع",
    "hero.github": "مشاهده در GitHub",
    "hero.terminalFooter": "طراحی‌شده برای محیط توسعه واقعی",
    "trust.label": "یک استک. چند پروژه. فقط سرویس‌هایی که واقعاً لازم داری.",
    "problem.kicker": "چرا Dockavel؟",
    "problem.title": "محیط توسعه باید کارت را جلو ببرد، نه اینکه خودش تبدیل به یک پروژه دیگر شود.",
    "problem.lead": "Dockavel اتوماسیون مفید را نگه می‌دارد و جنگل تنظیمات را کنار می‌گذارد.",
    "problem.multiTitle": "runtimeهای متفاوت، یک workspace",
    "problem.multiText": "PHP 8.2 و PHP 8.5 را هم‌زمان اجرا کن، بدون اینکه برای هر پروژه یک زیرساخت کامل و تکراری بسازی.",
    "problem.networkTitle": "شبکه همیشه قابل اعتماد نیست",
    "problem.networkText": "mirror منطقه‌ای را شفاف انتخاب کن و مشکلات Docker، Debian، Composer، npm، DNS و route را بدون fallback مخفی تشخیص بده.",
    "problem.projectTitle": "پروژه باید runtime خودش را بشناسد",
    "problem.projectText": "metadata پروژه را کوچک نگه دار و ساخت routing را به Dockavel بسپار؛ نه به حافظه برای اسم containerها.",
    "features.kicker": "قابلیت‌های اصلی",
    "features.title": "اتوماسیون مفید. سطح تنظیمات کوچک.",
    "features.lead": "Dockavel عمداً جمع‌وجور می‌ماند؛ قابلیت جدید وقتی وارد core می‌شود که setup را سریع‌تر، مدیریت پروژه را ساده‌تر یا debugging را بهتر کند.",
    "features.managerTitle": "ثبت، ویرایش، نمایش و حذف پروژه",
    "features.managerText": "Dockavel پروژه Laravel یا Node.js را تشخیص می‌دهد، metadata کمینه می‌سازد، Nginx را تولید و validate می‌کند و با امنیت reload می‌کند.",
    "features.phpTitle": "PHP 8.2 تا 8.5 کنار هم",
    "features.phpText": "فقط نسخه‌هایی را فعال کن که نیاز داری. Nginx هر دامنه محلی را به FPM درست route می‌کند.",
    "features.doctorTitle": "Doctor بدون دستکاری پشت‌صحنه",
    "features.doctorText": "بررسی read-only برای Docker، WSL، پورت‌ها، سلامت استک و اتصال sourceها، حتی با تشخیص مشکل مسیر IPv4.",
    "features.sourceTitle": "منابع دانلود کاملاً شفاف",
    "features.sourceText": "Official، IranServer، Runflare، China یا endpoint سفارشی. preset منطقه‌ای مخفیانه به جای دیگری fallback نمی‌کند.",
    "features.servicesTitle": "فقط چیزی که پروژه لازم دارد",
    "features.servicesText": "MySQL، PostgreSQL، Redis، Node.js، phpMyAdmin و pgAdmin همگی Compose profile اختیاری هستند.",
    "manager.kicker": "Project-aware از پایه",
    "manager.title": "metadata کوچک. routing قابل پیش‌بینی.",
    "manager.text": "هر پروژه ثبت‌شده فقط اطلاعاتی را نگه می‌دارد که Dockavel برای شناخت دامنه، runtime و سرویس‌های مشترک لازم دارد.",
    "manager.point1": "بدون فایل تنظیمات غول‌پیکر برای پروژه",
    "manager.point2": "اعتبارسنجی Nginx قبل از reload",
    "manager.point3": "Rollback در صورت خراب بودن config تولیدشده",
    "manager.point4": "حذف registration هیچ‌وقت سورس پروژه را پاک نمی‌کند",
    "architecture.kicker": "معماری",
    "architecture.title": "یک استک مشترک، مرزهای روشن.",
    "architecture.lead": "پروژه‌ها زیرساخت را به اشتراک می‌گذارند، بدون اینکه routing وابسته به runtime را از دست بدهند.",
    "architecture.requests": "دامنه‌های محلی",
    "architecture.routing": "routing بر اساس پروژه",
    "sources.kicker": "آگاه از source منطقه‌ای",
    "sources.title": "همان استک. مسیر اینترنت کاملاً مشخص.",
    "sources.text": "مشخص کن Docker imageها و package repositoryها از کجا بیایند. Dockavel انتخاب را شفاف نگه می‌دارد و fallback پنهان نمی‌کند.",
    "sources.custom": "endpointهای خودت را وارد کن",
    "quick.kicker": "شروع سریع",
    "quick.title": "از clone تا استک محلی با چند دستور.",
    "quick.text": "Installer به‌صورت تعاملی source، runtimeها، دیتابیس‌ها و سرویس‌های اختیاری را تنظیم می‌کند.",
    "quick.docs": "راهنمای نصب را بخوان ←",
    "closing.title": "قابلیت بیشتر. تنظیمات کمتر.",
    "closing.text": "Dockavel بر اساس workflowهایی رشد می‌کند که توسعه‌دهنده واقعاً هر روز تکرار می‌کند.",
    "closing.button": "Dockavel را ببین",
    "footer.text": "یک استک توسعه سبک برای اجرای چند پروژه Laravel و Node.js."
  }
};

const html = document.documentElement;
const header = document.querySelector('.site-header');
const languageSwitch = document.getElementById('languageSwitch');
const menuButton = document.getElementById('menuButton');
const navLinks = document.querySelector('.nav-links');
const terminalTabs = document.querySelectorAll('.terminal-tab');
const terminalDoctor = document.getElementById('terminalDoctor');
const terminalProject = document.getElementById('terminalProject');

let currentLanguage = localStorage.getItem('dockavel-language') || 'en';

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;
  html.lang = language;
  html.dir = language === 'fa' ? 'rtl' : 'ltr';
  localStorage.setItem('dockavel-language', language);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!(key in dictionary)) return;

    if (dictionary[key].includes('<br>')) {
      element.innerHTML = dictionary[key];
    } else {
      element.textContent = dictionary[key];
    }
  });

  if (languageSwitch) {
    languageSwitch.innerHTML = language === 'fa'
      ? '<span>EN</span><span class="language-divider">/</span><span class="language-current">فا</span>'
      : '<span class="language-current">EN</span><span class="language-divider">/</span><span>فا</span>';
  }

  document.title = language === 'fa'
    ? 'Dockavel — توسعه محلی تمیز'
    : 'Dockavel — clean local development';
}

languageSwitch?.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'fa' : 'en');
});

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

function switchTerminal(target) {
  terminalTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.terminal === target));
  terminalDoctor?.classList.toggle('hidden', target !== 'doctor');
  terminalProject?.classList.toggle('hidden', target !== 'project');
}

terminalTabs.forEach((tab) => {
  tab.addEventListener('click', () => switchTerminal(tab.dataset.terminal));
});

let terminalIndex = 0;
const terminalOrder = ['doctor', 'project'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  window.setInterval(() => {
    terminalIndex = (terminalIndex + 1) % terminalOrder.length;
    switchTerminal(terminalOrder[terminalIndex]);
  }, 5200);
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

applyLanguage(currentLanguage);
