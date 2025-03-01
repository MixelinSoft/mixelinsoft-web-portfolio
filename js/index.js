import localization from './data-localization.js';
const selectedLanguage = localStorage.getItem('language') || 'ua';
// Elements
const scrollButton = document.querySelector('.scroll');
const aboutSection = document.querySelector('.section-about');

const typewritterTerminal = document.querySelector('.typewriter-terminal');

const terminal = new Typewriter(typewritterTerminal, {
  loop: false,
  cursor: '_',
});

terminal.typeString(`Front-end developer`).pauseFor(2500).start();

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollButton.style.transform = `translate(-50%, -${scrollY * 1.5}px)`;
  scrollButton.style.opacity = 1 - scrollY / 200;
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: aboutSection.offsetTop - 96 + 32,
    behavior: 'smooth',
  });
});

document.querySelectorAll('[data-scroll]').forEach((item) => {
  item.addEventListener('click', function () {
    const targetBlock = this.getAttribute('data-scroll');
    if (targetBlock === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetSection = document.querySelector(`.section-${targetBlock}`);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - 96 + 32;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
