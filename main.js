/*
 * Retrieve the HTML for the menu items and the HTML for the navigation bar
 */
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('nav');

/*
 * Whenever the menu icon is clicked, toggle between showing the 
 * navigation links and not, as well as toggle between the hamburger
 * icon and the times symbol.
 */
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('times');
    navBar.classList.toggle('nav-hidden');
});