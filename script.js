document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  fr: {
    'nav.currently': '🔥 Actuellement',
    'nav.links': '🌐 Liens',
    'nav.content': '🎨 Créations',
    'hero.status': 'En ligne — mode créatif activé',
    'hero.tagline.1': 'Bedwars',
    'hero.tagline.2': 'Rocket League',
    'hero.tagline.3': 'Tech',
    'hero.cta': '🌐 Mes réseaux',
    'hero.cta2': '🤔 Ce que je fais',
    'currently.label': 'En ce moment',
    'currently.title': 'Sur le feu 🍳',
    'currently.desc': "Ce qui m'occupe en ce moment (spoiler : c'est cool).",
    'current.1.label': 'Bedwars Concepts',
    'current.1.text': 'Je planche sur des concepts Bedwars un peu fous — maps, mécaniques, reworks. Du lourd !',
    'current.1.live': 'En cours (chaud devant !)',
    'current.2.label': 'Tech Stuff',
    'current.2.text': 'Je prépare des trucs tech — vidéos, dev, expériences. Ça va être propre (ou pas).',
    'current.2.live': 'En préparation 🤫',
    'links.label': 'Me trouver',
    'links.title': "Où est-ce que je traîne ?",
    'links.desc': 'Clique partout, je suis gentil je mords pas (sauf si t\'es un cube).',
    'discord.name': 'Le QG communautaire',
    'twitter.name': 'Mes tweets',
    'github.name': 'Code & trucs',
    'content.label': 'Mes trucs',
    'content.title': "Regarde ce que j'ai fait !",
    'content.desc': 'Une sélection de mes meilleures galettes (numériques).',
    'content.1.tag': '⚔️ Bedwars',
    'content.1.title': 'Map Bedwars — Crystalline',
    'content.1.desc': "Une map avec des cristaux qui font des trucs. C'est joli et ça claque.",
    'content.1.link': 'Voir le délire →',
    'content.2.tag': '🔧 Tech',
    'content.2.title': 'Build un serveur MC en 2025',
    'content.2.desc': 'Stack moderne, automatisation, et un peu de sueur. En vrai c\'est cool.',
    'content.2.link': 'Voir la vidéo →',
    'content.3.tag': '🚗 Rocket League',
    'content.3.title': 'Montage — Saison X',
    'content.3.desc': 'Mes plus beaux buts et des moments stylés (oui je me la pète un peu).',
    'content.3.link': 'Mate ça →',
    'content.4.tag': '🤖 Dev',
    'content.4.title': 'Générateur de maps Bedwars',
    'content.4.desc': 'Un outil open-source qui génère des maps. Parce que j\'avais la flemme.',
    'content.4.link': 'Voir le bazar →',
    'about.label': 'Qui ça ?',
    'about.greeting': "Salut c'est Liqoy ! 👋",
    'about.text': 'Je suis un passionné de Bedwars qui passe son temps à imaginer des concepts à la con (mais cools). Quand je ne fais pas ça, je bricole du contenu tech, je monte des vidéos, ou je perds à Rocket League. J\'aime les trucs bien faits, les idées originales et les communautés sympas. Bref, bienvenue dans mon petit univers un peu bordélique. Enjoy ! 🎉',
    'footer.rights': 'Tous droits réservés (ou pas).',
  },
  en: {
    'nav.currently': '🔥 Currently',
    'nav.links': '🌐 Links',
    'nav.content': '🎨 Creations',
    'hero.status': 'Online — creative mode activated',
    'hero.tagline.1': 'Bedwars',
    'hero.tagline.2': 'Rocket League',
    'hero.tagline.3': 'Tech',
    'hero.cta': '🌐 My socials',
    'hero.cta2': '🤔 What I do',
    'currently.label': 'Right now',
    'currently.title': 'On the stove 🍳',
    'currently.desc': "What I'm up to (spoiler: it's cool).",
    'current.1.label': 'Bedwars Concepts',
    'current.1.text': 'Working on some wild Bedwars concepts — maps, mechanics, reworks. Big stuff!',
    'current.1.live': 'In progress 🔥',
    'current.2.label': 'Tech Stuff',
    'current.2.text': 'Preparing tech content — videos, dev, experiments. It\'s gonna be clean (or not).',
    'current.2.live': 'In the oven 🤫',
    'links.label': 'Find me',
    'links.title': 'Where do I hang out?',
    'links.desc': "Click around, I'm nice I don't bite (unless you're a cube).",
    'discord.name': 'Community HQ',
    'twitter.name': 'My tweets',
    'github.name': 'Code & stuff',
    'content.label': 'My stuff',
    'content.title': 'Look what I made!',
    'content.desc': 'A selection of my finest digital pancakes.',
    'content.1.tag': '⚔️ Bedwars',
    'content.1.title': 'Bedwars Map — Crystalline',
    'content.1.desc': 'A map with crystals that do things. It\'s pretty and it slaps.',
    'content.1.link': 'See the madness →',
    'content.2.tag': '🔧 Tech',
    'content.2.title': 'Build an MC server in 2025',
    'content.2.desc': 'Modern stack, automation, and a bit of sweat. It\'s actually cool.',
    'content.2.link': 'Watch the video →',
    'content.3.tag': '🚗 Rocket League',
    'content.3.title': 'Montage — Season X',
    'content.3.desc': 'My best goals and stylish moments (yeah I\'m showing off a bit).',
    'content.3.link': 'Check it out →',
    'content.4.tag': '🤖 Dev',
    'content.4.title': 'Bedwars Map Generator',
    'content.4.desc': 'An open-source tool that generates maps. Because I was lazy.',
    'content.4.link': 'See the chaos →',
    'about.label': 'Who dis?',
    'about.greeting': "Hey it's Liqoy! 👋",
    'about.text': "I'm a Bedwars enthusiast who spends his time imagining crazy (but cool) concepts. When I'm not doing that, I tinker with tech content, edit videos, or lose at Rocket League. I like well-made stuff, original ideas and nice communities. Anyway, welcome to my slightly messy little universe. Enjoy! 🎉",
    'footer.rights': 'All rights reserved (or not).',
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

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
