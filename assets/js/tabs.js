// assets/js/tabs.js

window.Tabs = {
  init() {
    document.querySelectorAll("[data-tabs]").forEach(container => {
      const buttons = container.querySelectorAll("[data-tab]");
      const panels = container.querySelectorAll("[data-tab-panel]");

      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-tab");

          buttons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          panels.forEach(panel => {
            panel.classList.toggle("hidden", panel.getAttribute("data-tab-panel") !== target);
          });
        });
      });
    });
  }
};
