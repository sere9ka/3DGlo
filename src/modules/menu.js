const menu = () => {
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.querySelector('body');
    const aService = document.querySelector('main a');


    const menuOpen = () => {
        menu.classList.toggle('active-menu')
    }

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menuOpen()
        } else if ( e.target === closeBtn) {
            e.preventDefault();
            menuOpen()
        } else if (e.target.closest('menu')) {
            e.preventDefault();
            document.querySelector(e.target.hash).scrollIntoView();
            if (e.target.matches('a')) {
                menuOpen()
            }
        } else if (menu.classList.contains('active-menu')) {
            e.preventDefault();
            document.querySelector(e.target.hash).scrollIntoView();
            menuOpen()
        } else if (e.target.closest('main a')) {
            e.preventDefault();
            document.querySelector(aService.hash).scrollIntoView();
        }
    })
}

export default menu