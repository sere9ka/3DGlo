const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div');

    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер свяжется с Вами!'

    const validate = (list) => {
        let success = true

        return success
    }
    const removeStatus = () => {
        form.removeChild(statusBlock)
        console.log(form);
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

        statusBlock.classList.add('status')
        statusBlock.textContent = loadText
        form.append(statusBlock)
        
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
                    if (formId === 'form3') {
                        statusBlock.style.color = '#19b5fe'
                    }
                    form.append(statusBlock)
                    console.log(form);
                    setTimeout(removeStatus, 5000)
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            form.append(statusBlock)
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место! =)')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm()        
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm