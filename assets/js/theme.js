const toggle = document.getElementById("themeToggle");
const isDarkMode = localStorage.getItem("theme") === "dark";

// Zustand beim Laden setzen
document.body.classList.toggle("dark-mode", isDarkMode);

if (toggle) {
    toggle.checked = isDarkMode;

    // Wechseln
    toggle.addEventListener("change", () => {
        // Smooth Fade
        document.body.classList.add("theme-fade");
        document.body.classList.toggle("dark-mode", toggle.checked);
        localStorage.setItem("theme", toggle.checked ? "dark" : "light");

        setTimeout(() => {
            document.body.classList.remove("theme-fade");
        }, 200);
    });
}

// Mobile Menu Toggle
const menuToggleBtn = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("menu-open");
    });
}
