// JavaScript to handle the background and enhanced shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 0) {
      navbar.classList.add('bg-white', 'shadow-xl');
      navbar.classList.remove('bg-transparent', 'shadow-lg');
    } else {
      navbar.classList.add('bg-transparent', 'shadow-lg');
      navbar.classList.remove('bg-white', 'shadow-xl' ,'shadow-lg');
    }
  });
  