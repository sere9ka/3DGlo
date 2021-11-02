const modal = () => {
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const modalBtns = document.querySelectorAll('.popup-btn') 
    let intervalId;
    let finish = false;

    const modalOpenAnim = () => {
        modal.style.display = 'block';
        modal.style.transform = 'translateX(-100%)';
        let count = -100
        const counter = () => {
            count += 2; // Анимацию стоит сделать быстрее
            return {count}
        }
        const animateModal = () => {
            let getCount = counter()
            if (getCount.count <= 0) { // Здесь должно быть "<=", а не "<"
                modal.style.transform = `translateX(${getCount.count}%)`;
            } else {
                finish = true;
                clearInterval(intervalId)
            }
        }
        
        if (!finish) {
            intervalId = setInterval(animateModal, 10) // Здесь также делаем анимацию быстрее
            // Твоя анимация не прекращалась, потому что ты пытался убрать интервал для modalOpen, а оно должно работать с id setInterval (https://puzzleweb.ru/javascript/window_clearinterval.php)
        } else {
            clearInterval(intervalId)
        }
        // Здесь ты должен был заметить, что я немного изменил условие. Так будет более правильно, чтобы не делать повторный вызов функции counter
    }

    const modalOpen = () => {
        modal.style.display = 'block';
    }

    const windowWidth = () => {
        const width = document.documentElement.clientWidth
        if (width >= 768) {
            modalOpenAnim()
        } else {
            modalOpen()
        }
    }

    const modalClose = () => {
        modal.style.display = 'none'; // Вот здесь нужно явно указать display: none 
    }
    modalBtns.forEach(btn => btn.addEventListener('click', windowWidth)); // Для более короткой записи здесь можно убрать фигурные скобки
    closeBtn.addEventListener('click', modalClose);

}

export default modal