/**
 * Плавная прокрутка страницы
 */
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 500,
  framesCount = 60;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

/**
 * Валидация
 */
const inputEmail = document.getElementById('email'),
  inputPhone = document.getElementById('phone'),
  textareaActivity = document.getElementById('activity'),
  fields = document.querySelectorAll('.form-control'),
  btnSubmit = document.querySelector('#btn_submit'),
  form = document.getElementById('form');

//функция отображения ошибок
function generateError(text) {
  let error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

//ф-ия очистки ошибок
function removeValidation() {
  let errors = form.querySelectorAll('.error')

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

//ф-ия очистки полей
function clearField() {
  for (let i = 0; i < fields.length; i++) {
    fields[i].value = '';
  }
}

//ф-ия проверки полей на пустоту и длину
function checkFieldsPresence() {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError('Поле обязательно для заполнения')
      form[i].parentElement.insertBefore(error, fields[i])
      return false
    }
    if (fields[i].value.length <= 3) {
      let error = generateError('Поле должно быть не менее 4 символов')
      form[i].parentElement.insertBefore(error, fields[i])
      return false
    }
  }
  return true
}

//ф-ия проверки email
function validateEmail() {
  function email(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
  }
  if (!email(inputEmail.value)) {
    let error = generateError('Email введен неверно')
    inputEmail.parentElement.insertBefore(error, inputEmail)
    return false
  }
  return true
}

//ф-ия проверки телефона
function validatePhone() {
  function phone(phone) {
    let re = /^\+?([0-9]{1,3})\)|[]?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
  }
  if (!phone(inputPhone.value)) {
    let error = generateError('Телефон введен неверно. Телефон должен быть в формате: код страны (например 8 или +7) и номер из 10 цифр')
    inputPhone.parentElement.insertBefore(error, inputPhone)
    return false
  }
  return true
}

function validateTextarea() {
  if (textareaActivity.value.length > 500) {
    let error = generateError('Сообщение слишком длинное. Попробуйте сократить количество символов')
    textareaActivity.parentElement.insertBefore(error, textareaActivity);
    return false
  }
  return true
}

function validate() {
  if (checkFieldsPresence() && validateEmail() && validatePhone() && validateTextarea()) {
    return true
  } else return false
}

function showSendMessage() {
  const modal = document.querySelector('.modal-validate');
  modal.classList.add('modal-validate-active');
  setTimeout(() => {
    modal.classList.remove('modal-validate-active');
  }, 3000)
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  removeValidation()

  checkFieldsPresence()
  validateEmail()
  validatePhone()
  validateTextarea()

  if (validate()) {
    btnSubmit.setAttribute("disabled", "")
    clearField()
    setTimeout(() => {
      showSendMessage()
      btnSubmit.removeAttribute("disabled", "")
    }, 3000)
    //таймаунт сделан для имитации отправки формы
    // axios, ajax, etc...
  } else console.log('INVALID DATA!');
})