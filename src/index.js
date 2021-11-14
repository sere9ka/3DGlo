import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validator from './modules/validator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'


timer("20 november 2021")
menu()
modal()
calc(100)
validator()
tabs()
slider()

const forms = document.querySelectorAll('form')
forms.forEach((form, id) => {
    form.querySelector('button').addEventListener('click', async () => {
        sendForm({ 
            formId: `form${id+1}`,
            someElem: [
                {
                    type: 'block',
                    id: 'total'
                }
            ]
         })
    })
})

