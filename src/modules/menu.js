const menu = () => {
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.querySelector('body');

    const menuOpen = () => {
        menu.classList.toggle('active-menu')
    }


    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')|| e.target === closeBtn) {
            menuOpen()
        }
    })

    menu.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            menuOpen()
        }
    })

}

export default menu