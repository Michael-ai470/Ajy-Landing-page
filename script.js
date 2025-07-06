// Typewriter Effect for Hero Text
const heroText = "Welcome to Creative Landing";
let index = 0;

function typeWriter() {
  if (index < heroText.length) {
    document.getElementById('heroText').textContent += heroText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Section Entrance Animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Contact Form Submission (Just an alert for now)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
  this.reset();
});
