
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

        const links = {
        'home': document.getElementById('home-link'),
        'about-us': document.getElementById('about-link'),
        'features': document.getElementById('features-link'),
        'technology': document.getElementById('technology-link'),
        // 'industries': document.getElementById('industries-link'),
        'customer-story': document.getElementById('customer-story-link'),
        'blog': document.getElementById('blog-link'),
        'privacy-policy': document.getElementById('privacy-policy-link')
    };

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

        //   Menangani klik pada nav item untuk scroll halus
       document.querySelectorAll('.nav-link').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    

    navLinks.forEach((link) => {
        link.classList.remove("text-blue-300", "bg-blue-100");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("text-blue-700", "bg-blue-100");
        }
    });
});

