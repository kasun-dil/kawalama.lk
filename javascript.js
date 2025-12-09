
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

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });

    window.addEventListener('load', () => {
      if (window.innerWidth <= 768) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });