const btn = document.querySelector('.mob-menu-btn');
const nav = document.querySelector('.header-nav');
const logo = document.querySelector('.logo-link');
const contacts = document.querySelector('.contact-btn');
const headerCont = document.querySelector('.header-cont');

const toggleMenu = () => {
  nav.classList.toggle('is-open');
  headerCont.classList.toggle('is-open');
  btn.classList.toggle('hidden');
  logo.classList.toggle('hidden');
  contacts.classList.toggle('hidden');
};

btn.addEventListener('click', toggleMenu);
