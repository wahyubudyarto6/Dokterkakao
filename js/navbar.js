document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if(burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log('Menu clicked'); // Untuk debugging
        });
    }
});