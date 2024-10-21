// Otwieranie/Zamykanie menu po kliknięciu ikony hamburgera
const menuIcon = document.getElementById('mobile-menu-icon');
const navMenu = document.querySelector('.nav-menu');
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Chowanie menu po kliknięciu w dowolny link
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // Ukrywa menu po kliknięciu w link
    });
});

// Pobierz wszystkie obrazy oferty
const offerImages = document.querySelectorAll('.offer-image');
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');

// Pokaż popup po kliknięciu w obrazek
offerImages.forEach(image => {
    image.addEventListener('click', () => {
        const fullImageUrl = image.getAttribute('data-full');
        popupImage.src = fullImageUrl;
        popupContainer.style.display = 'flex';
    });
});

// Zamknij popup po kliknięciu w przycisk zamknięcia
closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});
