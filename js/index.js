// Functions
const startTypewriterWhenVisible = (elementSelector, typewriterInstance) => {
  const element = document.querySelector(elementSelector);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          typewriterInstance.start();
          observer.disconnect();
        }
      });
    },
    { threshold: 1 },
  );

  observer.observe(element);
};
// Elements
const aboutSection = document.querySelector('.about-section');
const headerHeight = document.querySelector('.nav');

// TypeWriter
const heroSectionTypewriter = new Typewriter('#hero-typewriter', {
  delay: 128,
  cursor: '_',
});
const aboutSectionTypewriter = new Typewriter('#about-typewriter', {
  delay: 64,
  cursor: '_',
});
heroSectionTypewriter.typeString('Front-End Developer');
aboutSectionTypewriter.typeString('About');

startTypewriterWhenVisible('#hero-typewriter', heroSectionTypewriter);
startTypewriterWhenVisible('#about-typewriter', aboutSectionTypewriter);

// Scroll Arrow
const scrollArrow = document.querySelector('.scroll-arrow');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollArrow.style.transform = `translate(-50%, -${scrollY * 1.5}px)`;
  scrollArrow.style.opacity = 1 - scrollY / 200;
});

scrollArrow.addEventListener('click', () => {
  window.scrollTo({
    top: aboutSection.offsetTop - headerHeight.offsetHeight,
    behavior: 'smooth',
  });
});

document.querySelectorAll('.menu-item[data-scroll]').forEach((item) => {
  item.addEventListener('click', function () {
    const targetBlock = this.getAttribute('data-scroll');
    if (targetBlock === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetSection = document.querySelector(`.${targetBlock}-section`);
    const headerHeight = document.querySelector('.nav').offsetHeight;
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
