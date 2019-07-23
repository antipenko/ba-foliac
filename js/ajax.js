var listOfPhones; // создали переменную в которую запишем результат аякса

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем (настраиваем) его: GET-запрос на URL 'phones.json'
// xhr.open(метод отправки (гет, пост, пут или еще что то), ссылка на файл, асинхронно или нет (тру или фолс), [логин и пароль для HTTP-авторизации]);

xhr.open('GET', 'info.json', true);

// 3. Отсылаем запрос
xhr.send(); // в body можем что то передавать


xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr);
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr);
        console.log(xhr.responseText); // responseText -- текст ответа.

        // JSON.parse - строку json приведет к тому с чем может работать JS, например к объекту или массиву ...
        listOfPhones = JSON.parse(xhr.responseText);

        console.log(listOfPhones);
    }
}


var btnGetUser = document.getElementById('getUser');

btnGetUser.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/4", true);
    xhr.onload = function () {
        console.log(xhr.responseText);
    };
    xhr.send();
}