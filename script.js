/* ═══════════════════════════════════════════
   LIQOY — script.js
═══════════════════════════════════════════ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ─── i18n ─── */
const translations = {
  fr: {
    'nav.links': 'Liens',
    'nav.discover': 'Découvrir',
    'hero.badge': 'Créateur de contenu',
    'hero.subtitle.1': 'Bienvenue sur le site Officiel de Liqoy.',
    'hero.subtitle.2': 'Créateur de contenu Minecraft.',
    'hero.subtitle.3': 'Liens et projets.',
    'hero.subtitle.1b': 'Bienvenue sur le site Officiel de Liqoy.',
    'hero.cta.discover': 'Mes réseaux',
    'card.portfolio.label': 'Liens',
    'card.portfolio.title': 'Mes réseaux',
    'card.portfolio.text': 'Retrouve-moi partout et rejoins l\'univers Liqoy.',
    'discord.card.title': 'Serveur communautaire',
    'discord.card.desc': 'Entraide, événements et bonne ambiance avec toute la communauté Liqoy.',
    'discord.title': 'Rejoins la communauté',
    'discord.text': 'Échanges, entraide, événements. Le serveur Discord de Liqoy t\'attend.',
    'discord.cta': 'Rejoindre Discord',
    'youtube.cta.short': 'S\'abonner →',
    'twitch.cta.short': 'Suivre →',
    'avatar.label': 'Liqoy',
    'youtube.title': 'Abonne-toi à\nma chaîne',
    'youtube.text': 'Vidéos Minecraft, développement de serveurs et projets autour de l\'univers de Liqoy.',
    'youtube.cta': 'S\'abonner',
    'twitch.title': 'Rejoins les\nlives Twitch',
    'twitch.text': 'Soirées Minecraft, dev en direct, Q&A et moments avec la communauté.',
    'twitch.cta': 'Voir les lives',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    'nav.links': 'Links',
    'nav.discover': 'Discover',
    'hero.badge': 'Content creator',
    'hero.subtitle.1': 'Welcome to the Official Liqoy website.',
    'hero.subtitle.2': 'Minecraft content creator.',
    'hero.subtitle.3': 'Links and projects.',
    'hero.subtitle.1b': 'Welcome to the Official Liqoy website.',
    'hero.cta.discover': 'My socials',
    'card.portfolio.label': 'Links',
    'card.portfolio.title': 'My socials',
    'card.portfolio.text': 'Find me everywhere and dive into the Liqoy universe.',
    'discord.card.title': 'Community server',
    'discord.card.desc': 'Help, events and good vibes with the whole Liqoy community.',
    'discord.title': 'Join the community',
    'discord.text': 'Chats, support, events. Liqoy\'s Discord server is waiting for you.',
    'discord.cta': 'Join Discord',
    'youtube.cta.short': 'Subscribe →',
    'twitch.cta.short': 'Follow →',
    'avatar.label': 'Liqoy',
    'youtube.title': 'Subscribe to\nmy channel',
    'youtube.text': 'Minecraft videos, server development and projects around the Liqoy universe.',
    'youtube.cta': 'Subscribe',
    'twitch.title': 'Join the\nTwitch lives',
    'twitch.text': 'Minecraft evenings, live dev, Q&A and community moments.',
    'twitch.cta': 'Watch lives',
    'footer.rights': 'All rights reserved.',
  }
};

let currentLang = 'fr';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ─── Navbar scroll ─── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── Scroll reveal ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Subtitle slider ─── */
const slider = document.getElementById('subtitleSlider');
if (slider) {
  const slides = slider.querySelectorAll('.hero__subtitle-slide');
  let slideH = 0;
  let current = 0;

  function getSlideH() {
    return slides[0] ? slides[0].getBoundingClientRect().height || 44.8 : 44.8;
  }

  setTimeout(() => { slideH = getSlideH(); }, 100);

  setInterval(() => {
    if (!slideH) slideH = getSlideH();
    current = (current + 1) % (slides.length - 1);
    slider.style.transform = `translateY(-${current * slideH}px)`;

    if (current === slides.length - 2) {
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateY(0px)';
        current = 0;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          slider.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        }));
      }, 600);
    }
  }, 3200);
}

/* ─── Hero avatar tilt ─── */
const tiltEl = document.querySelector('[data-tilt]');
if (tiltEl) {
  tiltEl.addEventListener('mousemove', (e) => {
    const r = tiltEl.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    tiltEl.style.transform = `perspective(400px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.03)`;
  });
  tiltEl.addEventListener('mouseleave', () => {
    tiltEl.style.transform = '';
  });
}
