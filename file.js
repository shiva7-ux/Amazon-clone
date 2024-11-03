let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const indicators = document.querySelectorAll('.indicator');

// Function to update carousel position and indicators
function updateCarousel() {
    document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

// Advance to the next slide on image click
function nextSlide() {
    index = (index + 1) % totalImages;
    updateCarousel();
}

// Auto-scroll every 3 seconds
let autoScroll = setInterval(nextSlide, 3000);

// Click event to move to the next image
document.querySelector('.carousel-images').addEventListener('click', () => {
    clearInterval(autoScroll); // Pause the auto-scroll
    nextSlide();
    autoScroll = setInterval(nextSlide, 3000); // Restart the auto-scroll timer
});

// Indicators click event for manual navigation
indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        clearInterval(autoScroll);
        index = i;
        updateCarousel();
        autoScroll = setInterval(nextSlide, 3000);
    });
});

// Initial call to set the first image and indicator
updateCarousel();
