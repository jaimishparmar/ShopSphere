const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

function openMenu() {
    navLinks.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
}

// Toggle menu
menuBtn.addEventListener("click", () => {

    if (navLinks.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }

});

// Close when clicking overlay
overlay.addEventListener("click", closeMenu);

// Close when clicking a link
document.querySelectorAll(".nav-links li").forEach(item => {
    item.addEventListener("click", closeMenu);
});