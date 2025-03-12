// const menuBtn = document.getElementById('menu-btn');
// const menu = document.getElementById('navbar-hamburger');

// menuBtn.addEventListener('click', () => {
//   if (mobileMenu.classList.contains("hidden")) {
//     // Tampilkan menu dengan animasi
//     mobileMenu.classList.remove("hidden", "-translate-y-full");
//     mobileMenu.classList.add("translate-y-0");
// } else {
//     // Sembunyikan menu dengan animasi
//     mobileMenu.classList.add("-translate-y-full");
//     mobileMenu.classList.remove("translate-y-0");
    
//     // Sembunyikan setelah transisi selesai
//     setTimeout(() => {
//         mobileMenu.classList.add("hidden");
//     }, 300); // Sesuai dengan `duration-300`
// }
// });
// Ambil semua link dengan kelas 'nav-link'
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = {
      'home': document.getElementById('home-link'),
      'about-us': document.getElementById('about-link'),
      'features': document.getElementById('features-link'),
      'industries': document.getElementById('industries-link'),
      'customer-story': document.getElementById('customer-story-link'),
      'blog': document.getElementById('blog-link'),
      'privacy-policy': document.getElementById('privacy-policy-link')
  };

  // Remove active color from all links
  Object.values(links).forEach(link => {
      link.classList.remove('text-blue-500');
      link.classList.add('text-black');
  });

  // Check each section to see if it's in view
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Set active color for the link of the section in view
          const sectionId = section.getAttribute('id');
          const activeLink = links[sectionId];
          if (activeLink) { // Check if the link exists
              activeLink.classList.add('text-blue-500');
              activeLink.classList.remove('text-black');
          }
      }
  });
});




