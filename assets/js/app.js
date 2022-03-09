// ==== Swiper (Home section) ====
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ==== Change Backgorund Header ====
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ==== Swiper (New section) ====
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',
});



// ==== Shwo menu ====
const navMenu = document.querySelector('#nav-menu'),
    navToggleBtn = document.querySelector('.nav__toggle'),
    navCloseBtn = document.querySelector('.nav__close');

// ==== menu show ====
// ==== validate if constant exists ====
if (navCloseBtn) {
    navToggleBtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


// ==== Hide menu ====
// ==== validate if constant exists ====
if (navMenu) {
    navCloseBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}



// ==== Show cart ====
const cart = document.querySelector('.cart'),
    cartShop = document.querySelector('.nav__shop'),
    cartClose = document.querySelector('.cart__close');

// ==== Cart show ====
// ==== Valiabate if constant exists ====
if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    });
}


// ==== Cart Hide ====
// ==== Validate if constant exists ====
if (cartShop) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    });
}


// ==== Show login ====
const login = document.querySelector('.login'),
    loginBtn = document.querySelector('.login__toggle'),
    loginClose = document.querySelector('.login__close');

// ==== login show ====
// ==== Validate if constant exists ====
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        login.classList.add('show-login');
    });
}

// ==== login Hide ====
// ==== Validate if constant exists ====
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
    });
}

// ==== Show Scroll up ====
function scrollUp() {
    const scrollUp = document.querySelector('.scrollup');
    // when the scroll is higher than 350 viewport height, add the show-scroll calss
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// ==== Light box ====

// ==== Questions Accordion ====
// const accordionItem = document.querySelector('.accordion-open');
const accordionItem = document.querySelectorAll('.questions__item'); 

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector(".questions__header")

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        } 
        toggleItem(item)
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.quesitons__content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')
    }

}

// ==== Style switcher ====
const styleSwitcherToggle = document.querySelector('.style__switcher-toggle');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style__switcher').classList.toggle('open')
})

// Hide style swticher on scroll 
window.addEventListener('scroll', () => {
    if (document.querySelector(".style__switcher").classList.contains("open")) {
        document.querySelector('.style__switcher').classList.remove('open')
    }
})

// theme colors
function themeColor() {
    const colorStyle = document.querySelector('.js-color-style'),
        themeColorContainer = document.querySelector(".js-theme-colors");
        themeColorContainer.addEventListener('click', ({target}) => {
            if (target.classList.contains('js-theme-color-item')) {
                localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
                setColors();
            }
        })
    
    // change them color
    function setColors() {
        let path = colorStyle.getAttribute('href').split('/');
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute('href', path.join('/') + "/" + localStorage.getItem("color") + ".css")
        
        
        if (document.querySelector('.js-theme-color-item.active')) {
            document.querySelector('.js-theme-color-item.active').classList.remove('active');
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add('active');
    }
    if (localStorage.getItem('color') !== null) {
        setColors();
    } else {
        const defaultColor = colorStyle.getAttribute('href').split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");
    }
}

themeColor();