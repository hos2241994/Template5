const hamburgerMenu = document.querySelector('#hamburegrMenu');
const header = document.querySelector('.header');
const menuMobiel = document.querySelector('.header__menu__mobile');

//Hamburger Menu Toggle
hamburgerMenu.addEventListener('click', () => {
    if(header.classList.contains('open')){
        header.classList.remove('open');
        document.body.classList.remove('open');
        menuMobiel.style.transitionDelay = "0s";
    }else{
        header.classList.add('open');
        document.body.classList.add('open');
        menuMobiel.style.transitionDelay = "200ms";
    }
    
});

//Remove Open Class From Header
window.addEventListener('resize', () => {
    if(window.innerWidth > 1024){
        header.classList.remove('open');
    }
})