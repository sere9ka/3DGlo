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
            count += 2;
            return {count}
        }
        const animateModal = () => {
            let getCount = counter()
            if (getCount.count <= 0) {
                modal.style.transform = `translateX(${getCount.count}%)`;
            } else {
                finish = true;
                clearInterval(intervalId)
            }
        }
        
        if (!finish) {
            intervalId = setInterval(animateModal, 10)
        } else {
            clearInterval(intervalId)
        }
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
        modal.style.display = 'none';
        finish = false
    }
    modalBtns.forEach(btn => btn.addEventListener('click', windowWidth));
    closeBtn.addEventListener('click', modalClose);

}

export default modal