const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const closeLinks = document.querySelectorAll('ul>li>a')

    const menuOpen = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', menuOpen);
    closeBtn.addEventListener('click', menuOpen);

    closeLinks.forEach(closeLink => {closeLink.addEventListener('click', menuOpen)})

}

export default menu