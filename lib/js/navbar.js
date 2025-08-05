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

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector("[data-collapse-toggle]");
  const navbarWrapper = document.getElementById("navbar");
  const navbarMenu = document.getElementById("menu");
  const contactBtn = document.querySelector(".button-nav-mini");

  // Cegah error jika toggleBtn tidak ditemukan
  if (!toggleBtn || !navbarWrapper || !navbarMenu || contactBtn) {
    console.warn("Elemen navbar tidak lengkap, script dihentikan.");
    return;
  }

  toggleBtn.addEventListener("click", function () {

    setTimeout(() => {
      const menuIsVisible = !navbarMenu.classList.contains("hidden");

      if (menuIsVisible) {
        navbarWrapper.classList.add("bg-white", "text-black", "shadow-xl");

        if (contactBtn) {
          contactBtn.classList.add("block");
          contactBtn.classList.remove("hidden");
        }
      } else {
        if (contactBtn) {
          contactBtn.classList.add("hidden");
          contactBtn.classList.remove("block");
        }

        if (window.scrollY <= 0) {
          navbarWrapper.classList.remove("bg-white", "text-black", "shadow-xl");
        }
      }
    }, 10);
  });
});
