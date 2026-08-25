// assets/js/timeline.js

window.Timeline = {
    init(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container || !data) return;
        this.render(container, data);
    },

    render(container, data) {
        container.innerHTML = `
            <div class="timeline-v">
                ${data.map((item, index) => {
                    const triggerId = `${container.id}-timeline-trigger-${index}`;
                    const panelId = `${container.id}-timeline-panel-${index}`;

                    return `
                    <div class="timeline-v-item philosophy-card" data-themes="${item.themes || ''}">
                        <div class="timeline-v-marker">
                            <div class="timeline-v-dot"></div>
                        </div>
                        <div class="timeline-v-content panel">
                            <span class="timeline-v-date">${item.era}</span>
                            <h3 class="timeline-v-heading">
                                <button
                                    type="button"
                                    class="timeline-v-trigger"
                                    id="${triggerId}"
                                    aria-expanded="false"
                                    aria-controls="${panelId}"
                                >
                                    <span>${item.title}</span>
                                    <span class="timeline-v-indicator" aria-hidden="true"></span>
                                </button>
                            </h3>
                            <p class="text-muted">${item.summary}</p>
                            <div
                                class="timeline-v-detail"
                                id="${panelId}"
                                role="region"
                                aria-labelledby="${triggerId}"
                                hidden
                            >
                                <p><strong>Wichtige Denker:</strong> ${item.thinkers}</p>
                                <p>${item.description}</p>
                                <div class="timeline-v-actions">
                                    <a href="${item.link || '#'}" class="btn btn-outline">Mehr lesen →</a>
                                    <a href="quiz.html?era=${encodeURIComponent(item.title)}" class="btn btn-primary">Quiz starten</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        `;

        container.querySelectorAll('.timeline-v-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => this.toggleDetail(trigger, container));
        });
    },

    toggleDetail(trigger, container) {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        container.querySelectorAll('.timeline-v-trigger').forEach(otherTrigger => {
            const panel = document.getElementById(otherTrigger.getAttribute('aria-controls'));
            otherTrigger.setAttribute('aria-expanded', 'false');
            if (panel) panel.hidden = true;
        });

        if (!isExpanded) {
            const panel = document.getElementById(trigger.getAttribute('aria-controls'));
            trigger.setAttribute('aria-expanded', 'true');
            if (panel) panel.hidden = false;
        }
    }
};