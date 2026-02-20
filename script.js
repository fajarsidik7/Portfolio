// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// batas
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// klik burger = toggle menu
burger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation(); // mencegah event klik dokumen langsung menutup menu
});

// klik menu = jangan close
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// klik di mana saja selain menu/burger = close menu
document.addEventListener('click', () => {
    nav.classList.remove('active');
});

// //////////////////////////////////

document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const senderEmail = document.getElementById("senderEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const fileInput = document.getElementById("attachment");

    // Validasi ukuran file
    if (fileInput.files.length > 0) {
        const fileSize = fileInput.files[0].size / 1024 / 1024; // MB
        if (fileSize > 25) {
            alert("Ukuran file melebihi 25MB! Silakan upload file lebih kecil.");
            return;
        }
    }

    // Format isi email
    const body = `
Email Pengirim: ${senderEmail}

Pesan:
${message}

(Note: Jika ada file, silakan lampirkan kembali saat Gmail terbuka.)
    `;

    const mailtoLink = `mailto:fajars94911@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
