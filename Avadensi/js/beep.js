const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
var testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});
const socialButton = document.getElementById("socialButton");
const videoButton = document.getElementById("videoButton");
const websiteButton = document.getElementById("websiteButton");
const backgroundVideo = document.getElementById("background-video");

function setActiveButton(activeButton) {
    socialButton.classList.remove("active-button");
    videoButton.classList.remove("active-button");
    websiteButton.classList.remove("active-button");

    activeButton.classList.add("active-button");

    socialButton.querySelector("button").style.color = "#000000";
    videoButton.querySelector("button").style.color = "#000000";
    websiteButton.querySelector("button").style.color = "#000000";

    // Menghentikan video jika ada tombol yang aktif
    backgroundVideo.pause();

    if (activeButton.id === "socialButton") {
        backgroundVideo.src = "";
    } else if (activeButton.id === "videoButton") {
        backgroundVideo.src = "video.mp4";
    } else if (activeButton.id === "websiteButton") {
        backgroundVideo.src = "";
    }

    // Memainkan video yang baru
    backgroundVideo.play();
}

socialButton.addEventListener("click", function () {
    setActiveButton(socialButton);
    socialButton.querySelector("button").style.color = "#0000ff";
});

videoButton.addEventListener("click", function () {
    setActiveButton(videoButton);
    videoButton.querySelector("button").style.color = "#0000ff";
});

websiteButton.addEventListener("click", function () {
    setActiveButton(websiteButton);
    websiteButton.querySelector("button").style.color = "#0000ff";
});

// Hide/show the navbar on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-60px';
    }

    prevScrollPos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function () {
    const mulaiButton = document.getElementById("mulaiButton");

    mulaiButton.addEventListener("click", function () {
        const testimonialsSection = document.querySelector(".testimonials");
        if (testimonialsSection) {
            testimonialsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});