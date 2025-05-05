const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('bg-white', 'shadow-xl');
    navbar.classList.remove('bg-transparent', 'shadow-lg');
  } else {
    navbar.classList.add('bg-transparent', 'shadow-lg');
    navbar.classList.remove('bg-white', 'shadow-xl', 'shadow-lg');
  }
});

$(document).ready(function () {
  if (window.scrollY > 0) {
    navbar.classList.add('bg-white', 'shadow-xl');
    navbar.classList.remove('bg-transparent', 'shadow-lg');
  } else {
    navbar.classList.add('bg-transparent', 'shadow-lg');
    navbar.classList.remove('bg-white', 'shadow-xl', 'shadow-lg');
  }
})

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting && navItem !== null) {
        console.log(navItem)
        console.log(navLinks)
        navLinks.forEach(link => link.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  },
  {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.6 // 60% terlihat baru dianggap aktif
  }
);

sections.forEach(section => {
  observer.observe(section);
});