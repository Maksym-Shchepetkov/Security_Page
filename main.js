const btn = document.querySelector('.mob-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const nav = document.querySelector('.header-nav');
const logo = document.querySelector('.logo-link');
const contacts = document.querySelector('.contact-btn');
const headerCont = document.querySelector('.header-cont');
const headerMobMenuLinks = document.querySelectorAll('.mob-menu-link');
const closeBtn = document.querySelector('.mob-menu-close-btn');
const headerAnchorLink = document.querySelectorAll('.header-link');
const invite = document.querySelector('#goToForm');
const mainForm = document.querySelector('#form-main');

const openMobMenu = () => {
  mobMenu.classList.add('mob-menu-is-open');
};

const closeMobMenu = () => {
  mobMenu.classList.remove('mob-menu-is-open');
};

const openMenu = () => {
  nav.classList.add('is-open');
  headerCont.classList.add('is-open');
  btn.classList.add('hidden');
  logo.classList.add('hidden');
  contacts.classList.add('hidden');
};

const closeMenu = () => {
  nav.classList.remove('is-open');
  headerCont.classList.remove('is-open');
  btn.classList.remove('hidden');
  logo.classList.remove('hidden');
  contacts.classList.remove('hidden');
};

const firstInputFocus = () => {
  setTimeout(() => {
    const nameInput = document.querySelector('#first-input');
    nameInput.focus();
  }, 1000);
};

const validateName = name => {
  if (!name) return 'Введіть імʼя';
  if (name.length < 3) return 'Імʼя повинно містити мінімум 3 символи';
  if (!/^[A-Za-zА-Яа-яІіЇїЄє\s]+$/.test(name))
    return 'Імʼя може містити тільки літери';
  return null;
};

const validatePhone = phone => {
  if (!phone) {
    return 'Введіть номер телефону';
  }

  if (!/^\+?\d{10,13}$/.test(phone)) {
    return 'Невірний формат телефону';
  }

  return null;
};

btn.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    openMobMenu();
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    openMenu();
  }
});

closeBtn.addEventListener('click', closeMobMenu);

headerMobMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobMenu);
});

headerAnchorLink.forEach(link => {
  link.addEventListener('click', closeMenu);
});

invite.addEventListener('click', firstInputFocus);

mainForm.addEventListener('submit', async e => {
  e.preventDefault();

  const f = e.target;

  const name = f.name.value.trim();
  const phone = f.phone.value.trim();

  const nameError = validateName(name);
  if (nameError) {
    iziToast.warning({
      title: 'Помилка',
      message: nameError,
      position: 'topCenter',
    });
    return;
  }

  const phoneError = validatePhone(phone);
  if (phoneError) {
    iziToast.warning({
      title: 'Помилка',
      message: phoneError,
      position: 'topCenter',
    });
    return;
  }

  try {
    const res = await fetch(
      'https://cold-queen-0b86.mama2009113.workers.dev/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      }
    );

    if (!res.ok) throw new Error();

    iziToast.success({
      title: 'Готово',
      message: 'Заявку відправлено!',
      position: 'topCenter',
    });

    mainForm.reset();
  } catch {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося відправити форму',
      position: 'topCenter',
    });
  }
});
