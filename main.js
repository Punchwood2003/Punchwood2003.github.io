// Smooth scroll to sections when nav links are clicked
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const href = link.getAttribute("href");
        const section = document.querySelector(href);
        const top = section.offsetTop;

        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    });
});

// Change nav links to active when corresponding section is in view
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", e => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos <= bottom) {
            const id = section.getAttribute("id");
            const navLink = document.querySelector(`header nav a[href="#${id}"]`);
            navLink.classList.add("active");
        } else {
            const id = section.getAttribute("id");
            const navLink = document.querySelector(`header nav a[href="#${id}"]`);
            navLink.classList.remove("active");
        }
    });
});
