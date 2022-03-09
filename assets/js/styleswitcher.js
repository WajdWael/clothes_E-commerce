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