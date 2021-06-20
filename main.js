const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const banner = document.querySelector(".banner")

const mobileMenu = () => {
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
       
    } else {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
       
    }

}

hamburger.addEventListener("click", mobileMenu);
