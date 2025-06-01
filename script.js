const navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const target = document.querySelector(link.dataset.link);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animate skill bars on scroll into view
const skillFills = document.querySelectorAll('.skill-bar-fill');

function animateSkills() {
  skillFills.forEach(bar => {
    const barPos = bar.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (barPos < screenPos) {
      const width = bar.style.width;
      bar.style.width = '0';  // reset for animation
      setTimeout(() => { bar.style.width = width; }, 100);
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Simple form validation (optional)
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  return true;
}