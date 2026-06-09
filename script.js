const modal = document.getElementById('authModal');
const backdrop = document.getElementById('modalBackdrop');
const openButtons = [
  document.getElementById('open-login'),
  document.getElementById('open-signup'),
  document.getElementById('heroSignup'),
];
const closeButton = document.getElementById('closeModal');
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

const openModal = () => {
  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
};

openButtons.forEach((button) => {
  if (button) {
    button.addEventListener('click', openModal);
  }
});

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
  if (mainNav.classList.contains('is-open')) {
    mainNav.style.display = 'flex';
  } else {
    mainNav.style.display = '';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    mainNav.style.display = '';
    mainNav.classList.remove('is-open');
  }
});

const form = document.querySelector('.auth-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    closeModal();
    alert('Thanks! Your account setup flow starts here.');
  });
}
