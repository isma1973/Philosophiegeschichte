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

        setTimeout(() => {
            document.body.classList.toggle("dark-mode", toggle.checked);
            localStorage.setItem("theme", toggle.checked ? "dark" : "light");

            document.body.classList.remove("theme-fade");
        }, 200);
    });
}
