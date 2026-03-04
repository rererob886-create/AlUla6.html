const placeImages = document.querySelectorAll('.card img');

placeImages.forEach(img => {
    img.addEventListener('click', () => {
        if (!img.classList.contains('active')) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
});
