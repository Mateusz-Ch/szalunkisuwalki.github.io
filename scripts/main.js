document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
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
