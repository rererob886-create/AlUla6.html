const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
});

const subscribeBtn = document.getElementById("subscribe");

subscribeBtn.addEventListener("click", () => {
    subscribeBtn.innerText = "تم الاشتراك ✅";
    subscribeBtn.style.background = "#6b4f3b";
    subscribeBtn.style.transform = "scale(1.2)";
    setTimeout(()=> subscribeBtn.style.transform="scale(1)",300);
    alert("شكراً لاشتراكك في أخبار العُلا!");
});
