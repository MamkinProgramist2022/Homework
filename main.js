let toggle__btn1 = document.getElementById('toggle__btn1');
let toggle__btn2 = document.getElementById('toggle__btn2');
let block = document.getElementById('block');

// Настройки по умолчанию:

// добавляем отступы блоку, который меняет поля:
block.classList.add('margin');
// убрано поле для регистрации:
signup.classList.add('display__none');

// при клике на кнопку регистрации:
toggle__btn1.onclick = function () {
    // убираем поле для входа
    signin.classList.add('display__none');
    // затем добавляется к блоку регистрация:
    block.classList.add('signup');
    // и она делается видимой
    signup.classList.remove('display__none');
};

// аналогично и у второй кнопки:

toggle__btn2.onclick = function () {
    // невидимая регистрация:
    signup.classList.add('display__none');
    // добавляется поле для входа:
    block.classList.add('signin');
    // и делается невидимым поле для регистрации
    signin.classList.remove('display__none');
};
