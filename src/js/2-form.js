let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {
  const dataToSave = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', dataToSave);
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData = parsedData;

    emailInput.value = parsedData.email || '';
    messageTextarea.value = parsedData.message || '';
  }
};

form.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formData[event.target.name] = event.target.value.trim();

    saveToLocalStorage();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData = {
    email: '',
    message: '',
  };

  form.reset();
});

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
