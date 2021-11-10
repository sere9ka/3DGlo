import { animate } from "./helpers";

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

        animate({
            duration: 500,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              modal.style.transform = `translateX(${count + progress*100}%)`;
            }
          });
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