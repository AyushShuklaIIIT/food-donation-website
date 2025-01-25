const stepCards = document.querySelectorAll(".step-card");
const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2})

stepCards.forEach((card) => {
    observer.observe(card);
})

const subscribe = document.getElementById("subscribe");

subscribe.addEventListener("submit", (event) => {
    event.preventDefault();
});
