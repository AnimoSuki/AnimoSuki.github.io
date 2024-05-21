// Navbar Button Active Function

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Navbar Page Index Number Changer

function updateNumber() {
    var indicator = document.querySelector('.indicator1 span');

    if (window.location.hash === '#home') {
        indicator.textContent = '1';
    } 
    else if (window.location.hash === '#about') {
        indicator.textContent = '2';
    } 
    else if (window.location.hash === '#services') {
        indicator.textContent = '3';
    } 
    else if (window.location.hash === '#skills') {
        indicator.textContent = '4';
    } 
    else if (window.location.hash === '#portfolio') {
        indicator.textContent = '5';
    }
    else {
        indicator.textContent = '1';
    }
}

updateNumber();

window.addEventListener('hashchange', updateNumber);

// Initialize AOS

function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });