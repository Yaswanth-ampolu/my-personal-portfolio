//===================================== DARK THEME =========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING!")


//=====MENU show y hidden====
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

console.log("MENU Y SETTING WORKING!")
//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")
 
//===================== type writr effect========


new Typewriter('#typewriter', {
  strings: ['Yaswanth Ampolu', 'Programming Geek', 'Gaming Enthusiast', 'Ai/Ml Engineer' , 'Web Developer', 'Book-Worm'],
  autoStart: true,
  loop: true,
  cursor: '|',
  delay: 75,
  deleteSpeed: 50
});
console.log(" type writer is working")

// Change header background
const header = document.getElementById('header');
function scrollHeader() {
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// Active link
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*='${sectionId}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Skills accordion
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    // Close all skills sections first
    for(let i = 0; i < skillsContent.length; i++) {
        const content = skillsContent[i];
        const list = content.querySelector('.skills__list');
        
        if (content === this.parentNode) {
            if (itemClass === 'skills__content skills__close') {
                content.className = 'skills__content skills__open';
                list.style.maxHeight = list.scrollHeight + "px";
            } else {
                content.className = 'skills__content skills__close';
                list.style.maxHeight = "0px";
            }
        } else {
            content.className = 'skills__content skills__close';
            const otherList = content.querySelector('.skills__list');
            otherList.style.maxHeight = "0px";
        }
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
    // Set initial state
    const list = el.parentNode.querySelector('.skills__list');
    if (el.parentNode.className.includes('skills__close')) {
        list.style.maxHeight = "0px";
    } else {
        list.style.maxHeight = list.scrollHeight + "px";
    }
})

// Qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// Portfolio swiper
let swiper = new Swiper('.portfolio__container', {
    cssMode: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
})

// Show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {  // Only proceed if element exists
        if(this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }
}
window.addEventListener('scroll', scrollUp);