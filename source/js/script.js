//= yandex.js
(function () {
    "use strict";
    var form = document.querySelector("form"),
        request = document.querySelector('#request'),
        popup = document.querySelector('.popup'),
        overlay = document.querySelector('.overlay'),
        closePopup = popup.querySelector('#cancel'),
        exitLogin = document.querySelector('#exitLogin'),
        enterLogin = document.querySelector('#enterLogin'),
        login = document.querySelector('.header__login'),
        guest = document.querySelector('.header__guest');

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.height = "0";
    });

    request.addEventListener("click", function () {
        popup.style.display = 'block';
        overlay.style.height = "500%";
    });

    exitLogin.addEventListener("click", function () {
        login.style.display = 'none';
        guest.style.display = 'block';
    });

    enterLogin.addEventListener("click", function () {
        login.style.display = 'block';
        guest.style.display = 'none';
    });

    if (form) {

        function request(data, fn) {
            var xhr = new XMLHttpRequest(),
                time = (new Date()).getTime();
            xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
            xhr.addEventListener("readystatechange", function () {
                if (xhr.readyState == 4) {
                    fn(xhr.responseText);
                }
            });
            xhr.send(data);
        }
    }

})();