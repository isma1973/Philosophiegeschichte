// assets/js/notifications.js

window.Notifications = {
    init() {
        this.bindCloseButtons();
    },

    bindCloseButtons() {
        document.addEventListener("click", (e) => {
            const closeBtn = e.target.closest("[data-notification-close]");
            if (!closeBtn) return;

            e.preventDefault();
            const notification = closeBtn.closest(".notification");
            if (notification) {
                this.dismiss(notification);
            }
        });
    },

    dismiss(element) {
        element.classList.add("fade-out");
        element.addEventListener("transitionend", () => {
            element.remove();
        }, { once: true });
    },

    // Helper to create dynamic notifications
    create(targetSelector, message, type = "info") {
        const target = document.querySelector(targetSelector);
        if (!target) return;

        const div = document.createElement("div");
        div.className = `notification notification-${type} ui-fade-in`;
        div.innerHTML = `
      <div class="notification-content">${message}</div>
      <button class="notification-close" data-notification-close>&times;</button>
    `;

        target.prepend(div);
    }
};
