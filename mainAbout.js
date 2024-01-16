const navbar = document.querySelector(".navbar:not(.collapse)");
const title = document.querySelector('.header .title');
const imglogo = document.querySelector('.header .logo1')
const loading = document.querySelector('.loading');
const scrollTop = document.querySelector('.scrollTop');
const InteriorDesign = document.querySelector('.Interior-Design');

window.addEventListener("scroll", function () {

    if (window.scrollY > title.offsetTop) {
        navbar.style.backgroundColor = '#5d6e70';
        imglogo.setAttribute('src', 'assets/img/homedecor.png')
    }
    else {
        navbar.style.backgroundColor = 'transparent';
        imglogo.setAttribute('src', 'assets/img/logo-about.webp')
    }
    if (window.scrollY > InteriorDesign.offsetTop)
        scrollTop.classList.remove("opacity-0", "invisible");
    else
        scrollTop.classList.add("opacity-0", "invisible");
})

window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible')
        document.body.style.overflow = 'auto'
    }, 2000)
})


