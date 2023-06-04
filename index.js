// JavaScript code to handle responsive functionality

// Select the necessary elements
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const navLinks = document.querySelectorAll('.links ul a');

// Add event listener to the navigation toggle button
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// Add event listener to each link to close the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  });
});

// Show/hide the navigation toggle button based on screen width
function handleToggleDisplay() {
  if (window.innerWidth <= 768) {
    navToggle.style.display = 'block';
    links.classList.remove('show-links');
  } else {
    navToggle.style.display = 'none';
    links.classList.add('show-links');
  }
}

// Add event listener to handle toggle button display on initial load and window resize
window.addEventListener('DOMContentLoaded', handleToggleDisplay);
window.addEventListener('resize', handleToggleDisplay);
