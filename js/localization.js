const localization = {
  UA: {
    home: 'Головна',
    about: 'Про мене',
    projects: 'Мої проекти',
    cv: 'Завантажити резюме',
    menu: 'Меню',
  },
  EN: {
    home: 'Home',
    about: 'About me',
    projects: 'My projects',
    cv: 'Download CV',
    menu: 'Menu',
  },
  RU: {
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Мои проекты',
    cv: 'Скачать резюме',
    menu: 'Меню',
  },
};

// Elements
const languageSelectorButton = document.querySelector('.language-button');
const languageSelector = document.querySelector('.language-selector');
const languageSelectorItems = document.querySelectorAll(
  '.language-selector-item',
);
let language = localStorage.getItem('language') || 'ua';

// Function to update text content based on selected language
const updateContent = () => {
  const translations = localization[language];
  if (!translations) return;
  document.querySelectorAll('[data-text]').forEach((element) => {
    const textKey = element.getAttribute('data-text');
    if (translations[textKey]) {
      element.textContent = translations[textKey];
    }
  });
};

// Function to update language
const updateLanguage = (lang) => {
  language = lang;
  localStorage.setItem('language', lang);
  languageSelectorButton.textContent = lang.toUpperCase();
  updateContent();
};

// Set Language on page load
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(language);
});

// Toggle Show Language Selector
languageSelectorButton.addEventListener('click', (e) => {
  languageSelector.classList.toggle('active');
  e.stopPropagation();
});

// Hide Language Selector On Click Outside
document.addEventListener('click', (e) => {
  if (
    !languageSelector.contains(e.target) &&
    e.target !== languageSelectorButton
  ) {
    languageSelector.classList.remove('active');
  }
});

// Select Language
languageSelectorItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedLang = item.dataset.lang;
    updateLanguage(selectedLang);
    languageSelector.classList.remove('active');
  });
});
