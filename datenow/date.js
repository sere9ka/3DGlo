'use strict'
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let helloSpan = document.querySelector('.hello');
let infoDay = document.querySelector('.infoday');
let timeNow = document.querySelector('.timenow');
let timerForNewYear = document.querySelector('.timerfornewyear');
let dateNow = new Date();
let optionsLong = {
    weekday: 'long',
    timezone: 'UTC'
};

const getNullAdd = function (param) {
    if (param < 10) {
        return '0' + param;
    } else {
        return param
    }
}
const getPmAm = () => {
    if (dateNow.getHours() < 12) {
        return 'AM'
    } else return 'PM';
}

const getHello = () => {
    if (dateNow.getHours() > 5 && dateNow.getHours() < 11) {
        return 'Доброе утро!'
    } else if (dateNow.getHours() >= 11 && dateNow.getHours() < 17) {
        return 'Добрый день!'
    } else if (dateNow.getHours() >= 17 && dateNow.getHours() < 24) {
        return 'Добрый вечер!'
    } else return 'Доброй ночи!'
}

const getDayInfo = function () {
    dateNow = new Date();
    let weekDaynow = dateNow.toLocaleString("ru", optionsLong);
    let weekDay = weekDaynow.slice(0,1).toUpperCase() + weekDaynow.substr(1)
    let dateStop = new Date('01 January 2022').getTime()
    let timerDay = Math.floor((dateStop - dateNow.getTime()) / 1000 / 60 / 60 / 24);

    helloSpan.textContent = getHello()
    infoDay.textContent = 'Сегодня: ' + weekDay;
    timeNow.textContent = "Текущее время " + getNullAdd(dateNow.getHours()) + ':' + getNullAdd(dateNow.getMinutes()) + ':' + getNullAdd(dateNow.getSeconds()) + ' ' + getPmAm();
    timerForNewYear.textContent = "До нового года осталось: " + timerDay + " дня";
    console.log(dateStop);
};
setInterval(getDayInfo, 1000)
getDayInfo()