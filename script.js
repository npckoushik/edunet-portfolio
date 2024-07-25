document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const comments = document.querySelector('#comments').value.trim();
        const errorMessage = document.querySelector('#error-message');

        if (!name || !email || !comments) {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        errorMessage.textContent = '';
        alert('Thank you for your message!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
});

const contactToggle = document.querySelector('#contact-toggle');
const contactFormContainer = document.querySelector('#contact-form-container');
contactToggle.addEventListener('click', () => {
    contactFormContainer.classList.toggle('contact-form-hidden');
    contactFormContainer.classList.toggle('contact-form-visible');
});
