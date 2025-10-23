const btn = document.querySelector('.mob-menu-btn');
const nav = document.querySelector('.header-nav');
const logo = document.querySelector('.logo-link');
const contacts = document.querySelector('.contact-btn');
const headerCont = document.querySelector('.header-cont');
const gridCont = document.querySelector('.hero-picture-cont');
const securityMan = document.querySelector('.hero-second-picture');

const toggleMenu = () => {
  nav.classList.toggle('is-open');
  headerCont.classList.toggle('is-open');
  btn.classList.toggle('hidden');
  logo.classList.toggle('hidden');
  contacts.classList.toggle('hidden');
};

const moveToLastColumn = () => {
  const style = window.getComputedStyle(gridCont);
  const columns = style
    .getPropertyValue('grid-template-columns')
    .trim()
    .split(' ').length;
  securityMan.style.gridColumn = `${columns}`;
};

window.addEventListener('resize', moveToLastColumn);
btn.addEventListener('click', toggleMenu);

moveToLastColumn();
