import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('form') as HTMLFormElement;

const userNameInput = document.querySelector('.username') as HTMLInputElement;
const emailInput = document.querySelector('.email') as HTMLInputElement;
const passwordInput = document.querySelector('.password') as HTMLInputElement;
const password2Input = document.querySelector('.password2') as HTMLInputElement;

const formFields = document.querySelectorAll('.form-fields');

let passwordMatch = '';

userNameInput.addEventListener('keyup', (e) => {
  const target = e.target as HTMLInputElement;
  const fatherElement = userNameInput.parentElement as HTMLDivElement;
  const span = fatherElement.childNodes.item(5) as HTMLSpanElement;

  if (target.value.length > 3 && target.value.length < 25) {
    if (fatherElement.classList.contains('show-error-message'))
      fatherElement.classList.remove('show-error-message');
  } else {
    fatherElement.classList.add('show-error-message');
    span.innerHTML = 'Usuário precisa ter entre 3 e 25 caracteres';
  }
});

emailInput.addEventListener('keyup', (e) => {
  const target = e.target as HTMLInputElement;
  const fatherElement = emailInput.parentElement as HTMLDivElement;
  const span = fatherElement.childNodes.item(5) as HTMLSpanElement;

  if (isEmail(target.value, { host_blacklist: ['email.com'] })) {
    if (fatherElement.classList.contains('show-error-message'))
      fatherElement.classList.remove('show-error-message');
  } else {
    fatherElement.classList.add('show-error-message');
    span.innerHTML = 'E-mail inválido';
  }
});

passwordInput.addEventListener('keyup', (e) => {
  const target = e.target as HTMLInputElement;
  const fatherElement = passwordInput.parentElement as HTMLDivElement;
  const span = fatherElement.childNodes.item(5) as HTMLSpanElement;

  if (target.value.length >= 8 && target.value.length <= 50) {
    if (fatherElement.classList.contains('show-error-message'))
      fatherElement.classList.remove('show-error-message');
    passwordMatch = target.value;
  } else {
    fatherElement.classList.add('show-error-message');
    span.innerHTML = 'Senha precisa ter entre 8 e 50 caracteres.';
  }
});

password2Input.addEventListener('keyup', (e) => {
  const target = e.target as HTMLInputElement;
  const fatherElement = password2Input.parentElement as HTMLDivElement;
  const span = fatherElement.childNodes.item(5) as HTMLSpanElement;

  if (target.value.length >= 8 && target.value.length <= 50) {
    if (fatherElement.classList.contains('show-error-message'))
      fatherElement.classList.remove('show-error-message');
    if (target.value !== passwordMatch) {
      fatherElement.classList.add('show-error-message');
      span.innerHTML = 'As senhas precisam ser iguais.';
    }
  } else {
    fatherElement.classList.add('show-error-message');
    span.innerHTML = 'Senha precisa ter entre 8 e 50 caracteres.';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formErrors = false;

  formFields.forEach((field) => {
    if (field.classList.contains('show-error-message')) {
      formErrors = true;
      return;
    } else {
      formErrors = false;
    }
  });

  if (!formErrors) {
    form.submit();
  }
});
