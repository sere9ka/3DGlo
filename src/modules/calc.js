const calculator = () => {
    const calcBlock = document.querySelector('.calc-block');
    const inputsCalc = calcBlock.querySelectorAll('input')

    inputsCalc.forEach(input => {
        input.value = 2
    })
}

export default calculator