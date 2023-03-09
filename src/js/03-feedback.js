import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

presetFormFields();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    Object.keys(formData).forEach(key => delete formData[key]);
  } else {
    alert('Please fill in both fields');
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function presetFormFields() {
  const saveFormData = localStorage.getItem(STORAGE_KEY);

  if (saveFormData) {
    const saveData = JSON.parse(saveFormData);
    if (saveData.email) {
      refs.email.value = saveData.email;
      formData.email = saveData.email;
    }

    if (saveData.message) {
      refs.textarea.value = saveData.message;
      formData.message = saveData.message;
    }
  }
}
