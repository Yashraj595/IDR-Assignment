const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  alert('Thank you for registering interest.');
});
