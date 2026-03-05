const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("navLinks");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.getElementById("subscribe").onclick = function(){
    alert("شكراً لاشتراكك في أخبار العلا");
};
