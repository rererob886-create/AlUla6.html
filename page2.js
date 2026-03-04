const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('mouseenter', () => {
        // تكبير الصورة وإضافة ظل عند المرور
        img.style.transform = 'scale(1.1) rotate(-1deg)';
        img.style.boxShadow = '0 15px 25px rgba(0,0,0,0.35)';
        img.style.transition = 'all 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        // إعادة الصورة لوضعها الطبيعي عند الخروج
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    });
});
