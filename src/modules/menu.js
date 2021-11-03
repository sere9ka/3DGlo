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
        } else if (e.target.closest('menu')) {
            if (e.target.matches('a')) {
                menuOpen()
            }
        } else if (menu.classList.contains('active-menu')) {
            menuOpen()
        }
    })
}

export default menu