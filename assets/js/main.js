// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MOBILE MENU
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


// ADD BOX-SHADOW IN SCROLLING DOWN IN THE HEADER
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});


// SWIPER
const swiper = new Swiper('.new-swiper', {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },
    breakpoints: {
        992: {
            spaceBetween: 80
        }
    }
});

// SET MENU LINKS AS ACTIVE WHEN SCROLLING
const sections = document.querySelectorAll('section[id]');;

window.addEventListener('scroll', () => {
    const { scrollY } = window;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;

        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});


// SHOW SCROLL TO TOP BUTTON
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});


// DARK/LIGHT THEME 
const themeButton = document.getElementById('theme-button');

const selectedTheme = localStorage.getItem('@PLANTEX:theme');
const selectedIcon = localStorage.getItem('@PLANTEX:theme-icon');

const getCurrentTheme = () => {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

const getCurrentIcon = () => {
    return themeButton.classList.contains('bx-sun') ? 'bx-moon' : 'bx-sun';
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeButton.classList[selectedTheme === 'bx-moon' ? 'add' : 'remove']('bx-sun');
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('bx-sun');

    localStorage.setItem('@PLANTEX:theme', getCurrentTheme());
    localStorage.setItem('@PLANTEX:theme-icon', getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

scrollReveal.reveal('.home__image, .new__container, .footer__container');
scrollReveal.reveal('.home__data', {delay: 500});
scrollReveal.reveal('.giving__content, .gift__card', {interval: 100});
scrollReveal.reveal('.celebrate__data, .message__form, .footer__image1', {origin: 'left'});
scrollReveal.reveal('.celebrate__image, .message__image, .footer__image2', {origin: 'right'});