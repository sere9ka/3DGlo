// ; (()=>{,,n=,r=,l=;,();

const validator = () => {
    const forms = document.querySelectorAll("form[name='user_form']");
    const inputMessage = document.querySelector("input[placeholder='Ваше сообщение']");

    const textRules = /([^а-яА-Я-\s]+)/;
    const emailRules = /([^a-zA-Z-\@\_\.\!\~\*\'\s]+)/;
    const phoneRules = /([^0-9\(\)\-])/;

    inputMessage.addEventListener("input",(e=>{e.target.value=e.target.value.replace(textRules,"")}))

    forms.forEach(form => {
        const inputName = form.querySelector("input[name='user_name']");
        const inputEmail = form.querySelector("input[name='user_email']");
        const inputPhone = form.querySelector("input[name='user_phone']");
        inputName.addEventListener("input",(e=>{e.target.value=e.target.value.replace(textRules,"")}));
        inputEmail.addEventListener("input",(e=>{e.target.value=e.target.value.replace(emailRules,"")}));
        inputPhone.addEventListener("input",(e=>{e.target.value=e.target.value.replace(phoneRules,"")}));
    })
}

export default validator