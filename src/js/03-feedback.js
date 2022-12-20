import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('submit', onFormSub);

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSub(evt) {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    return;
  }
  console.log(formData);
  evt.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    formData = { ...data };
    email.value = data.email || '';
    message.value = data.message || '';
  }
})();
