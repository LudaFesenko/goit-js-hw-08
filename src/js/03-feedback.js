import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('submit', onFormSub);

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(evt.target.name);
  console.log(evt.target.value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
console.log(localStorage);

function onFormSub(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();
