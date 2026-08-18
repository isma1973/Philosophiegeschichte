// assets/js/switches.js

window.Switches = {
  init() {
    document.querySelectorAll("[data-switch]").forEach(sw => {
      sw.addEventListener("change", () => {
        sw.classList.toggle("active", sw.checked);
      });
    });
  }
};
