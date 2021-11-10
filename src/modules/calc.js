import { animate } from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let intervalCalc;

    total.textContent = 0

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;
        let finish = false;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        let animSpeed = 0.5;

        let calcCounter = 0

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5 ) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        } else totalValue = 0
        
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                total.textContent = Math.round(progress * totalValue)
            }
          })

    }
    const getCountCalc = debounce(() => {
        countCalc()
    }, 300);

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            clearInterval(intervalCalc)
            getCountCalc()
        }
    })

}

export default calc