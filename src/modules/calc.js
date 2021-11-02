const calculator = () => {
    const calcBlock = document.querySelector('.calc-block');
    const inputsCalc = calcBlock.querySelectorAll('input')

    inputsCalc.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })
}

export default calculator