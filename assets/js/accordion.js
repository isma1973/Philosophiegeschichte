// assets/js/accordion.js

window.Accordion = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-accordion-toggle]");
      if (!trigger) return;

      e.preventDefault();
      this.toggle(trigger);
    });
  },

  toggle(trigger) {
    const targetId = trigger.getAttribute("data-accordion-toggle");
    const content = document.getElementById(targetId);
    
    if (!content) return;

    const isOpen = content.classList.contains("open");
    const group = trigger.getAttribute("data-accordion-group");

    // Close others in group if needed
    if (group && !isOpen) {
      document.querySelectorAll(`[data-accordion-group="${group}"]`).forEach(t => {
        if (t === trigger) return; // Skip self
        t.classList.remove("active");
        
        const otherId = t.getAttribute("data-accordion-toggle");
        const otherContent = document.getElementById(otherId);
        if (otherContent) otherContent.classList.remove("open");
      });
    }

    // Toggle current
    if (isOpen) {
      content.classList.remove("open");
      trigger.classList.remove("active");
    } else {
      content.classList.add("open");
      trigger.classList.add("active");
    }
  }
};
