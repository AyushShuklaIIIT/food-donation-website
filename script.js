const stepCards = document.querySelectorAll(".step-card");

// Create an IntersectionObserver
const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            // Add the fade-in class to the element when it enters the viewport
            entry.target.classList.add('fade-in');
            // Stop observing the element after it has been animated
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2}) // Trigger when 20% of the element is visible

// Observe each step card
stepCards.forEach((card) => {
    observer.observe(card);
})

const subscribe = document.getElementById("subscribe");

subscribe.addEventListener("submit", (event) => {
    event.preventDefault();
});