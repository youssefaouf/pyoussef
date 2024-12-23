document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const inner = document.querySelector(".carousel-inner");
    const cards = document.querySelectorAll(".service-card");

    const cardWidth = cards[0].offsetWidth + 20; // Width of a card plus its margin
    const totalCards = cards.length;

    // Clone the first card and append it to the end of the carousel
    const clonedCards = Array.from(cards).map(card => card.cloneNode(true));
    clonedCards.forEach(clonedCard => inner.appendChild(clonedCard));

    let index = 0;

    function moveToNextCard() {
        // Move to the next index
        index++;
        if (index >= totalCards) {
            // Reset index to loop back to the first card
            index = 0;
            // Set the inner carousel's transform to show the first card
            inner.style.transition = "none"; // Disable transition to avoid visual glitch
            inner.style.transform = `translateX(0)`;
            // Delay resetting the transition to prevent sudden jump
            setTimeout(() => {
                inner.style.transition = ""; // Reset transition
            }, 50);
            return;
        }

        // Calculate the offset to show the next card
        const offset = -index * cardWidth;
        // Update the inner carousel's transform property to shift the cards
        inner.style.transform = `translateX(${offset}px)`;
    }

    setInterval(moveToNextCard, 3000);
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector('.navbar');
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove('opaque');
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
        navbar.classList.add('opaque');
    }
    prevScrollpos = currentScrollPos;
}


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


