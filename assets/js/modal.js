// assets/js/modal.js

window.Modal = {
  init() {
    document.querySelectorAll("[data-modal-open]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-modal-open");
        document.getElementById(id).classList.add("open");
      });
    });

    document.querySelectorAll("[data-modal-close]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-modal-close");
        document.getElementById(id).classList.remove("open");
      });
    });
  }
};
