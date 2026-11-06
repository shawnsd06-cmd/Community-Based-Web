
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// LIGHT AND DARK MODE
const savedTheme = localStorage.getItem("townly-theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeButton(savedTheme);

function updateThemeButton(theme) {
    const isDark = theme === "dark";

    themeToggle.setAttribute("aria-pressed", isDark);
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

themeToggle.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("townly-theme", newTheme);

    updateThemeButton(newTheme);
});


// MOBILE NAVIGATION
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
