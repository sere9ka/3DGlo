const modal = () => {
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const modalBtns = document.querySelectorAll('.popup-btn')
    const tabs = document.querySelector('.service');
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
            console.log(getCount.count);
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
    // modalBtns.forEach(btn => btn.addEventListener('click', windowWidth));
    tabs.addEventListener('click', (e) => {
        if (e.target.closest('.popup-btn')) {
            windowWidth()
        }
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalClose()
        }
    });

}

export default modal