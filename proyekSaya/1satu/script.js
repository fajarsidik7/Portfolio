const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Toggle menu burger
burger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation();
});

// Klik menu tidak menutup
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Klik luar menu = close
document.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Smooth scroll ke anchor (jika ada)
const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const targetPosition = target.offsetTop - navbarHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            nav.classList.remove('active');
        }
    });
});
