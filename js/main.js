const mobileNavBtn = document.getElementById("toggle-nav");
const mobileNav = document.getElementById("navigation");
const carouselBtnPrev = document.getElementById("carousel-btn-prev");
const carouselBtnNext = document.getElementById("carousel-btn-next");
const allSlides = document.getElementsByClassName("carousel-item");
const totalSlides = allSlides.length;




let navIsOpen = false;
let slidePos = 0;


mobileNavBtn.addEventListener("click", openNav);
carouselBtnPrev.addEventListener("click", prevSlide);
carouselBtnNext.addEventListener("click", nextSlide);





function openNav() {
    if(navIsOpen) {
        mobileNav.style.display = "none";
        navIsOpen = false;
        
    }else {
        mobileNav.style.display = "flex";
        mobileNav.style.flexDirection = "column";
        navIsOpen = true;
    } 
}


function nextSlide() {
    hideAllSlides();
    if(slidePos === totalSlides - 1) {
        slidePos = 0;
    }else {
        slidePos ++;
    }
    allSlides[slidePos].classList.add("carousel-item-display");

}


function prevSlide() {
    hideAllSlides();
    if(slidePos === 0) {
        slidePos = totalSlides - 1;
    }else {
        slidePos --;
    }
    allSlides[slidePos].classList.add("carousel-item-display");

}


function hideAllSlides() {
    for(let slide of allSlides) {
        slide.classList.remove("carousel-item-display")
    }
}
