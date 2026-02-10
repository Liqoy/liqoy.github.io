// Smooth scroll for buttons / links using data-scroll-to
document.querySelectorAll("[data-scroll-to]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = el.getAttribute("data-scroll-to");
    if (!target) return;
    const section = document.querySelector(target);
    if (!section) return;

    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Scroll-driven animation (reveal) for elements with .scroll-reveal
const revealElements = document.querySelectorAll(".scroll-reveal");
if (revealElements.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: no IntersectionObserver support, show elements directly
  revealElements.forEach((el) => el.classList.add("scroll-reveal--visible"));
}

// Current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Barre flottante : s'active quand la header bar pleine a quitté le haut (on ne la voit plus)
const navbar = document.getElementById("navbar");
if (navbar) {
  function getThreshold() {
    return Math.max(80, navbar.offsetHeight);
  }
  const onScroll = () => {
    if (window.scrollY > getThreshold()) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

// Translations FR / EN
const translations = {
  fr: {
    "nav.links": "Liens",
    "nav.discover": "Découvrir",
    "nav.langSwitch": "Changer de langue",
    "hero.subtitle.1": "Bienvenue sur le site Officiel de Liqoy.",
    "hero.subtitle.2": "Créateur de contenu.",
    "hero.subtitle.4": "Liens et projets.",
    "hero.subtitle.5": "Bienvenue sur le site Officiel de Liqoy.",
    "card.portfolio.label": "Liens",
    "card.portfolio.title": "Mes liens",
    "card.portfolio.text":
      "Un lien rapide pour accéder à mes réseaux et les découvrir ! :)",
    "services.label": "Services",
    "services.title": "C'est Moi Liqoy.png",
    "services.text": "",
    "youtube.label": "YouTube",
    "youtube.title": "Abonne-toi à ma chaîne",
    "youtube.text": "Vidéos Minecraft, développement de serveurs et projets autour de l'univers de Liqoy.",
    "youtube.cta": "S'abonner sur YouTube",
    "twitch.label": "Twitch",
    "twitch.title": "Rejoins les lives Twitch",
    "twitch.text": "Soirées Minecraft, dev en direct, Q&A et moments avec la commu.",
    "twitch.cta": "Rejoindre les lives",
    "aria.cardsRow": "Sections principales",
    "aria.youtube": "Chaîne YouTube de Liqoy",
    "aria.twitch": "Chaîne Twitch de Liqoy",
    "tag.minecraft": "Minecraft",
    "tag.skript": "Skript",
    "tag.dev": "Développement",
    "image.badge": "C'est moi, Liqoy",
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    "nav.links": "Links",
    "nav.discover": "Discover",
    "nav.langSwitch": "Change language",
    "hero.subtitle.1": "Welcome to the official Liqoy website.",
    "hero.subtitle.2": "Content creator.",
    "hero.subtitle.4": "Links and projects.",
    "hero.subtitle.5": "Welcome to the official Liqoy website.",
    "card.portfolio.label": "Links",
    "card.portfolio.title": "My links",
    "card.portfolio.text":
      "A quick link to access my socials and discover them! :)",
    "services.label": "Services",
    "services.title": "Its Me Liqoy.png",
    "services.text": "",
    "youtube.label": "YouTube",
    "youtube.title": "Subscribe to my channel",
    "youtube.text": "Minecraft videos, server development and projects around the Liqoy universe.",
    "youtube.cta": "Subscribe on YouTube",
    "twitch.label": "Twitch",
    "twitch.title": "Join the Twitch streams",
    "twitch.text": "Minecraft evenings, live dev, Q&A and moments with the community.",
    "twitch.cta": "Join the streams",
    "aria.cardsRow": "Main sections",
    "aria.youtube": "Liqoy's YouTube channel",
    "aria.twitch": "Liqoy's Twitch channel",
    "tag.minecraft": "Minecraft",
    "tag.skript": "Skript",
    "tag.dev": "Development",
    "image.badge": "It's me, Liqoy",
    "footer.rights": "All rights reserved.",
  },
};

let currentLang = "fr";

function setLanguage(lang) {
  if (!translations[lang]) lang = "fr";
  currentLang = lang;

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) {
      // Si c'est une section ou un élément avec aria-label, mettre à jour aria-label
      if (el.tagName === "SECTION" || el.hasAttribute("aria-label")) {
        el.setAttribute("aria-label", value);
      } else {
        // Sinon, mettre à jour le texte
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("lang-switch__btn--active");
    } else {
      btn.classList.remove("lang-switch__btn--active");
    }
  });
}

// Lang switch buttons
document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

// Slider titres hero : changement de texte (sans bug)
const heroSlider = document.querySelector(".hero__subtitle-slider");
const heroSlides = document.querySelectorAll(".hero__subtitle-slide");
const SLIDE_COUNT = heroSlides.length;
if (heroSlider && SLIDE_COUNT > 0) {
  heroSlider.style.transform = "translateY(0)";
  let slideIndex = 0;
  function goToSlide(index) {
    slideIndex = (index + SLIDE_COUNT) % SLIDE_COUNT;
    heroSlider.style.transform = `translateY(-${slideIndex * 3.2}em)`;
  }
  function nextSlide() {
    goToSlide(slideIndex + 1);
  }
  setInterval(nextSlide, 3500);
}

// Protection contre la copie d'images
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
    return false;
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
    return false;
  }
});

document.addEventListener("selectstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
    return false;
  }
});

// Désactiver le glisser-déposer d'images
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("draggable", "false");
  img.style.userSelect = "none";
  img.style.webkitUserSelect = "none";
  img.style.webkitUserDrag = "none";
  img.style.khtmlUserDrag = "none";
  img.style.mozUserSelect = "none";
  img.style.msUserSelect = "none";
  
  // Protection supplémentaire avec overlay transparent
  img.addEventListener("mousedown", (e) => {
    if (e.button === 1 || e.button === 2) {
      e.preventDefault();
      return false;
    }
  });
});

// Empêcher la sauvegarde d'image via Ctrl+S ou autres raccourcis
document.addEventListener("keydown", (e) => {
  // Ctrl+S, Ctrl+Shift+S, Ctrl+U
  if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U")) {
    if (e.target.tagName === "IMG" || document.activeElement.tagName === "IMG") {
      e.preventDefault();
      return false;
    }
  }
  
  // F12 (DevTools) - optionnel, peut être commenté si besoin
  // if (e.key === "F12") {
  //   e.preventDefault();
  //   return false;
  // }
});

// Détection langue Windows/PC (système) pour EN/FR
function getSystemLang() {
  const lang =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    "fr";
  return lang.slice(0, 2).toLowerCase();
}
const systemLang = getSystemLang();
setLanguage(systemLang === "en" ? "en" : "fr");

