let currentIndex = 0;
const slideDuration = 3000; // Duration for each slide
const transitionDuration = 500; // Transition duration

function showNextSlide() {
    const slides = document.getElementById('slides');
    currentIndex = (currentIndex + 1) % 3; // Cycle through 3 slides
    slides.style.transition = `transform ${transitionDuration}ms ease`;
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Automatically move to the next slide after the slide duration
setInterval(showNextSlide, slideDuration + transitionDuration); // Total time for each slide

function startAudio() {
    const audio = document.getElementById('backgroundSound');
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    document.getElementById('overlay').style.display = 'none';
}

// The rest of your functions remain unchanged...
