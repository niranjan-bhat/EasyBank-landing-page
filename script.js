menu = document.querySelector('.hamburger');
menuItem = document.querySelector('.action-wrapper');
menuIcon = menu.firstElementChild;

menu.addEventListener('click', () => {
    menuItem.classList.toggle('open');
    if (menuItem.classList.contains('open')) {
        menuIcon.src = 'images/icon-close.svg';
    } else {
        menuIcon.src = 'images/icon-hamburger.svg';
    }
})