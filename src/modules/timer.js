'use strict'
const timer = (deadline) => {
    const timerBlock = document.getElementById('timer');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    
    const getNullAdd = function (param) {
        if (param < 10) {
            return '0' + param;
        } else {
            return param
        }
    }
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = getNullAdd(Math.floor(timeRemaining / 60 / 60));
        let minutes = getNullAdd(Math.floor((timeRemaining / 60) % 60));
        let seconds = getNullAdd(Math.floor(timeRemaining % 60));
        return {timeRemaining, hours, minutes, seconds}
        
    }
    const updateClock = () => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining < 0) {
            timerHours.textContent = getNullAdd(0);
            timerMinutes.textContent = getNullAdd(0);
            timerSeconds.textContent = getNullAdd(0);
        } else {
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
        }
    }
    let getTime = getTimeRemaining()
    if (getTime.timeRemaining > 0) {
        setInterval(updateClock, 1000)
    }
    updateClock()
    
}

export default timer