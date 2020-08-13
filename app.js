const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

burger.addEventListener("click", () => {

    //Toggle Nav
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Burger Animation
    burger.classList.toggle('toggle');

});

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./screenshots/${originalSrc}`; 
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    //Addon Remover
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
