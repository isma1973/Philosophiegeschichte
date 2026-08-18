const toggle = document.getElementById("themeToggle");

// Zustand beim Laden setzen
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
} else {
    document.body.classList.remove("dark-mode");
    toggle.checked = false;
}

// Wechseln
toggle.addEventListener("change", () => {

    // Smooth Fade
    document.body.classList.add("theme-fade");

    setTimeout(() => {
        if (toggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }

        document.body.classList.remove("theme-fade");
    }, 200);
});
