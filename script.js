(() => {
    'use strict';
    //burger
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    });


    //scroll
    const scrollAbout = document.querySelector('a[href="#about"]');
    scrollAbout.addEventListener('click', (e) => {
        e.preventDefault();
        const about = document.querySelector('#about');
        about.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    });
})();