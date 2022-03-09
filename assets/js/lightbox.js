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

const productItems = document.querySelectorAll('.product__img'),
totalProductItems = productItems.length,
lightbox = document.querySelector('.lightbox'),
lightboxImg = lightbox.querySelector('.lightbox__img'),
lightboxClose = lightbox.querySelector('.lightbox__close'),
lightboxCounter = lightbox.querySelector('.caption__counter');

// looping through the images
let itemIndex = 0;
for (let i = 0; i < totalProductItems; i++){
    productItems[i].addEventListener('click', ()=>{
        itemIndex=i;
        changeItem() 
        toggleLightBox()
    })
}

// Arrows buttons
function nextItem() {
    if (itemIndex === totalProductItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}


function prevItem() { 
    if (itemIndex === 0) {
        itemIndex = totalProductItems-1;
    } else {
        itemIndex--;
    }
    changeItem();
}


function toggleLightBox(){
    lightbox.classList.toggle('open')
}

// close button
lightbox.addEventListener('click', () => {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightBox()
    }
})


function changeItem(){
    imgSrc = productItems[itemIndex].querySelector('.product__img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = `${(itemIndex+1)} of ${totalProductItems}`
}