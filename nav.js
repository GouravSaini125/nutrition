const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const hdline = document.querySelector('.hdline');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    hdline.classList.toggle("hide");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});