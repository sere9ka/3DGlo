import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calculator from './modules/calc'
import validator from './modules/validator'
import tabs from './modules/tabs'
import slider from './modules/slider'

const sliderBlock = document.querySelector('.portfolio-content');
const slides = document.querySelectorAll('.portfolio-item');
const dotsBlock = document.querySelector('.portfolio-dots');
const arrowLeft = '#arrow-left';
const arrowRight = '#arrow-right';
const slideActive = 'slide-active';
const dotActive = 'dot-active';

timer("08 november 2021")
menu()
modal()
calculator()
validator()
tabs()
slider({
    sliderBlock,
    slides,
    dotsBlock,
    arrowLeft,
    arrowRight,
    slideActive,
    dotActive
})