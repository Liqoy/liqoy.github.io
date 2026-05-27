/* ═══════════════════════════════════════════
   LIQOY — script.js
   - Year, Navbar scroll, Scroll reveal
   - Subtitle slider, Language switch
═══════════════════════════════════════════ */

/* ─── Year ─── */
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
    'hero.cta.discover': 'Découvrir',
    'card.portfolio.label': 'Liens',
    'card.portfolio.title': 'Mes réseaux',
    'card.portfolio.text': 'Retrouve-moi sur tous mes réseaux et plonge dans l\'univers Liqoy.',
    'discord.title': 'Rejoins la communauté',
    'discord.text': 'Échanges, entraide, événements. Le serveur Discord de Liqoy t\'attend.',
    'discord.cta': 'Rejoindre Discord',
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
    'hero.cta.discover': 'Discover',
    'card.portfolio.label': 'Links',
    'card.portfolio.title': 'My socials',
    'card.portfolio.text': 'Find me on all my networks and dive into the Liqoy universe.',
    'discord.title': 'Join the community',
    'discord.text': 'Chats, support, events. Liqoy\'s Discord server is waiting for you.',
    'discord.cta': 'Join Discord',
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
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
  // Update active button
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ─── Navbar scroll ─── */
const navbar = document.getElementById('navbar');
let lastY = 0;

function onScroll() {
  const y = window.scrollY;
  if (y > 40) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
  lastY = y;
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ─── Scroll reveal ─── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ─── Subtitle slider ─── */
const slider = document.getElementById('subtitleSlider');
if (slider) {
  const slides = slider.querySelectorAll('.hero__subtitle-slide');
  const slideH = slides[0] ? slides[0].offsetHeight || 44.8 : 44.8;
  let current = 0;

  function nextSlide() {
    current = (current + 1) % (slides.length - 1); // -1 because last is a duplicate for smooth loop
    slider.style.transform = `translateY(-${current * slideH}px)`;

    // Reset to 0 silently after going through all
    if (current === slides.length - 2) {
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateY(0px)';
        current = 0;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            slider.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
          });
        });
      }, 600);
    }
  }

  setInterval(nextSlide, 3200);
}

/* ─── Subtle avatar tilt on hero ─── */
const tiltEl = document.querySelector('[data-tilt]');
if (tiltEl) {
  tiltEl.addEventListener('mousemove', (e) => {
    const rect = tiltEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    tiltEl.style.transform = `perspective(400px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.03)`;
  });
  tiltEl.addEventListener('mouseleave', () => {
    tiltEl.style.transform = '';
  });
}
