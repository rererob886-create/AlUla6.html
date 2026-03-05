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

document.getElementById("welcomeBtn").addEventListener("click", function() {
    const toast = document.createElement("div");
    toast.textContent = "مرحبًا بك في مدينة العُلا ✨ جوهرة التاريخ 🇸🇦";
    toast.className = "toast-message";
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("visible"),100);
    setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(()=>toast.remove(),500);
    },3500);
});
