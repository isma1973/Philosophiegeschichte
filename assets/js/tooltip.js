// assets/js/tooltip.js

window.Tooltip = {
    init() {
        console.log("Tooltip Component Initialized");

        // Optional: Add global event listeners if needed
        // For CSS-only tooltips, JS might handle dynamic positioning or accessibility

        this.enhanceAccessibility();
    },

    enhanceAccessibility() {
        // Add aria-label if not present, using the tooltip text
        document.querySelectorAll("[data-tooltip]").forEach(el => {
            const text = el.getAttribute("data-tooltip-text");
            if (text && !el.getAttribute("aria-label")) {
                el.setAttribute("aria-label", text);
            }
        });
    }
};
