/**
 * Write your challenge solution here
 */
// Image data
const images = [
    {
        url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Beautiful Mountain Landscape",
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Ocean Sunset View",
    },
    {
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Autumn Forest Path",
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Urban City Skyline",
    },
];

let index = 0;
function showImage(index) {
    let imageUrl = images[index].url;
    let carouselTrack = document.querySelector("#carouselTrack");
    carouselTrack.style.background = `url(${imageUrl})`;

    let caption = document.querySelector("#caption");
    caption.textContent = images[index].caption;

    // carousel dots logic
    const carouselNav = document.querySelector("#carouselNav");
    carouselNav.innerHTML = null;
    for (let i = 0; i < images.length; i++) {
        let dots = document.createElement("span");
        dots.classList.add("carousel-indicator");
        dots.id = i;
        if (i == index) dots.classList.add("carousel-indicator-active");
        carouselNav.append(dots);
    }

    console.log(index);
    index++;
}
// initially display first image
showImage(index);
// next button working
let nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", () => {
    index++;
    if (index >= images.length) index = 0;
    showImage(index);
});

// previous button working
let prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", () => {
    index--;
    if (index < 0) index = images.length - 1;

    showImage(index);
});

// navigating through carousel dots
let selectedDot = document.querySelector("#carouselNav");
selectedDot.addEventListener("click", (event) => {
    let changedIndex = event.target.id;
    showImage(changedIndex);
});

let slideShow = null;
let countdownTimer = null;
let autoPlayOnOff = false;

const INTERVAL = 5; // seconds between slides

const autoPlayButton = document.querySelector("#autoPlayButton");
const timerDisplay = document.querySelector("#timerDisplay");

autoPlayButton.addEventListener("click", () => {
    if (autoPlayOnOff) {
        // --- Stop autoplay ---
        autoPlayOnOff = false;
        autoPlayButton.textContent = "Start Auto Play";
        timerDisplay.textContent = "";

        clearInterval(slideShow);    // stop the slideshow
        clearInterval(countdownTimer); // stop the countdown
        slideShow = null;
        countdownTimer = null;

    } else {
        // --- Start autoplay ---
        autoPlayOnOff = true;
        autoPlayButton.textContent = "Stop Auto Play";

        let timeleft = INTERVAL;
        timerDisplay.textContent = `${timeleft}s`;

        // Advance slide every 5 seconds
        slideShow = setInterval(() => {
            index = (index + 1) % images.length;
            showImage(index);
        }, INTERVAL * 1000);

        // Count down every 1 second
        countdownTimer = setInterval(() => {
            timeleft--;
            if (timeleft <= 0) {
                timeleft = INTERVAL; // FIX: reset and keep going, don't clearInterval!
            }
            timerDisplay.textContent = `${timeleft}s`;
        }, 1000);
    }
});