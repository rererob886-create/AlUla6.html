const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const historyBtn = document.getElementById("historyBtn");
historyBtn.addEventListener("click", () => {
    alert("شكراً لاهتمامك بتاريخ العُلا! استمر في اكتشاف المزيد.");
});

const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1) rotate(-1deg)';
        img.style.boxShadow = '0 15px 25px rgba(0,0,0,0.35)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    });
});
