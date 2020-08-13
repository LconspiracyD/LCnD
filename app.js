const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener("click", () => {

    //Toggle Nav
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Burger Animation
    burger.classList.toggle('toggle');
    
});
