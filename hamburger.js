function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

// Reset menu on window resize
window.addEventListener("resize", () => {
    const nav = document.getElementById("navLinks");
    if (window.innerWidth > 768) {
        nav.classList.remove("show");
    }
});

