const modal = () => {
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const modalBtns = document.querySelectorAll('.popup-btn') 

    const modalOpen = () => {
        modal.style.display = 'block';
        modal.style.transform = 'translateX(-100%)';
        let count = -100
        const counter = () => {
            count++
            return {count}
        }
        const animateModal = () => {
            let getCount = counter()
            if (getCount.count < 0) {
                modal.style.transform = `translateX(${getCount.count}%)`;
            }
            console.log(getCount.count);
        }
        let getCount = counter()
        if (getCount.count !== 0) {
            setInterval(animateModal, 20)
        }
        animateModal()
    }

    const modalClose = () => {
        modal.style.display = '';
        clearInterval(modalOpen)
    }
    modalBtns.forEach(btn => {btn.addEventListener('click', modalOpen)});
    closeBtn.addEventListener('click', modalClose);
}

export default modal