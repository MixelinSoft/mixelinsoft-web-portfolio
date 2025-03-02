import localization from './data-localization.js';
const selectedLanguage = localStorage.getItem('language') || 'ua';
// Elements
const logo = document.querySelector('.logo');
const scrollButton = document.querySelector('.scroll');
const scrollToTopButton = document.querySelector('.scrollToTop');
const aboutSection = document.querySelector('.section-about');
const docButtons = document.querySelectorAll('.cv-doc-button');
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

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.opacity = '0.75';
    scrollToTopButton.style.visibility = 'visible';
  } else {
    scrollToTopButton.style.opacity = '0';
    scrollToTopButton.style.visibility = 'hidden';
  }
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

docButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.cv-links').forEach((linkBlock) => {
      linkBlock.classList.remove('active');
    });
    const linkBlock = button.querySelector('.cv-links');
    linkBlock.classList.add('active');
  });
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
