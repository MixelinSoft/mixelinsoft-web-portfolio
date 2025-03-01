import localization from './data-localization.js';
const selectedLanguage = localStorage.getItem('language') || 'ua';

const typewritterTerminal = document.querySelector('.typewriter-terminal');

const terminal = new Typewriter(typewritterTerminal, {
  loop: false,
  cursor: '_',
});

terminal.typeString(`Front-end developer`).pauseFor(2500).start();
