const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('nav');

menuIcon.addEventListener('mouseover', () => {
    menuIcon.classList.toggle('hover');
});

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    navBar.classList.toggle('nav-hidden');
});