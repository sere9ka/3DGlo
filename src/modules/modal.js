const modal = () => {
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const modalBtns = document.querySelectorAll('.popup-btn') 

    const modalOpen = () => {
        modal.style.display = 'block';
        modal.style.transform = 'translateX(-100%)';
        let count = -100
        let transform = modal.style.transform
        const animateModal = () => {
            count++
            // console.log(count);
            transform = `translateX(${count}%)`;
            modal.style.transform = transform
            console.log(transform);
        }
        modal.style.transform = transform
        if (transform != 0) {
            setInterval(animateModal, 100)
        }
    }
    const modalClose = () => {
        modal.style.display = '';
    }
    modalBtns.forEach(btn => {btn.addEventListener('click', modalOpen)});
    closeBtn.addEventListener('click', modalClose);
}

export default modal