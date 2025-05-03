// Toggle mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navLinks.classList.add('hidden');
    });
});

// Basic form submission handling (for demo purposes)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted! (This is a demo, no data is actually sent.)');
    this.reset();
});