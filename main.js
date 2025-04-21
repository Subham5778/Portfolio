// === Image Slider Functionality ===
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const slideWidth = 300;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * slideWidth}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Prev button
prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// === Optional: Auto Slide Every 5s ===
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// === Active Nav Link on Scroll ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// === AOS Initialization ===
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
});
