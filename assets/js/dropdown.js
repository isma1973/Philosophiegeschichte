// assets/js/dropdown.js

window.Dropdown = {
  init() {
    document.querySelectorAll("[data-dropdown]").forEach(drop => {
      const toggle = drop.querySelector("[data-dropdown-toggle]");
      const menu = drop.querySelector("[data-dropdown-menu]");

      toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
      });

      document.addEventListener("click", e => {
        if (!drop.contains(e.target)) {
          menu.classList.remove("open");
        }
      });
    });
  }
};
