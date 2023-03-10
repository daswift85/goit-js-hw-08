import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

// Отслеживание изменений в форме и сохранение их в локальное хранилище
const saveState = throttle(() => {
  const state = { email: emailInput.value.trim(), message: messageInput.value.trim() };
  localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);

emailInput.addEventListener('input', saveState);
messageInput.addEventListener('input', saveState);

//Проверка состояния хранилища и заполнение формы, если есть сохраненные данные
const storedState = JSON.parse(localStorage.getItem(storageKey));
if (storedState) {
  emailInput.value = storedState.email;
  messageInput.value = storedState.message;
}

// Обработка отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Проверка заполненности полей формы
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert('Пожалуйста, заполните все поля формы!');
    return;
  }

  // Вывод объекта с данными в консоль
  const state = { email: emailInput.value.trim(), message: messageInput.value.trim() };
  console.log(state);

  // Очистка хранилища и полей формы
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';
});


// import throttle from 'lodash.throttle';


// const FORM_KEY = 'feedback-form-state';

// const formRef = document.querySelector('.feedback-form');

// formRef.addEventListener('input', throttle(onFormInput, 500));
// formRef.addEventListener('submit', onFormSubmit);

// inLocalStorage();

// function onFormInput(event) {
//     localStorage.setItem(FORM_KEY, JSON.stringify(createStatusObject()));
// }

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log(createStatusObject());
//     formRef.reset();
//     localStorage.removeItem(FORM_KEY);
    
// }

// function createStatusObject() {
//     return {
//         email: formRef.elements.email.value,
//         message: formRef.elements.message.value,
//     };
    
// }

// function inLocalStorage() {
//     let currentFieldStatus;
//     try {
//         currentFieldStatus = JSON.parse(localStorage.getItem(FORM_KEY));
//         formRef.elements.email.value = currentFieldStatus.email;
//         formRef.elements.message.value = currentFieldStatus.message;
//     } catch (error) {

//     };
// }