const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = form.querySelector('.status');
    const loadText = 'Загрузка...'
    const successText = 'Спасибо! Наш менеджер свяжется с Вами!'    

    const validate = (list) => {
        let success;
        const inputEmail = form.querySelector('[name="user_email"]')
        const inputPhone = form.querySelector('[name="user_phone"]')

        if (inputEmail.value === '') {
            statusBlock.textContent = 'Введите e-mail!'
        } else if (inputPhone.value.length < 11 || inputPhone.value.length > 16) {
            statusBlock.textContent = 'Введите правильный номер из 11 цифр! Формат ввода: 8(000)000-00-00'
        } else {
            success = true
        }

        return success
    }
    const removeStatus = () => {
        statusBlock.style.display = 'none'
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        if (formId === 'form3') {
            statusBlock.style.color = '#19b5fe'
        }
        statusBlock.textContent = loadText
        statusBlock.style.display = 'block'
        
        formData.forEach((value, key) => {
            formBody[key] = value
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    setTimeout(removeStatus, 8000)
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    if (error.message === 'Failed to fetch') {
                        error.message = 'Данные не отправились, ошибка подключения'
                    }
                    statusBlock.textContent = error.message
                })
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место! =)')
        }
        submitForm()   
        setTimeout(removeStatus, 8000) 
    } catch(error) {
        
    }
}

export default sendForm