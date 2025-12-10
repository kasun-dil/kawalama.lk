const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function toggleMenu(show) {
  if (show) {
    navLinks.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    navLinks.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

// Reset menu if window is resized to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'none';
  } else {
    // If resized back to mobile, ensure correct icon is shown
    if (!navLinks.classList.contains('active')) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
  }
});

// Ensure icons are set correctly on page load
window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});