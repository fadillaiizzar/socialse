const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

const btndark = document.getElementById('btndark');

    btndark.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });