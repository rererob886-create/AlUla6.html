const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
});

const cards = document.querySelectorAll('.card img');
cards.forEach(img=>{
    img.addEventListener('mouseenter', ()=> {
        img.style.transform='scale(1.05)';
        img.style.filter='brightness(1.3) saturate(1.2) contrast(1.2)';
    });
    img.addEventListener('mouseleave', ()=> {
        img.style.transform='scale(1)';
        img.style.filter='none';
    });
});
