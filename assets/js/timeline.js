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
                ${data.map(item => `
                    <div class="timeline-v-item philosophy-card" data-themes="${item.themes || ''}">
                        <div class="timeline-v-marker">
                            <div class="timeline-v-dot"></div>
                        </div>
                        <div class="timeline-v-content panel" onclick="Timeline.toggleDetail(this)">
                            <span class="timeline-v-date">${item.era}</span>
                            <h3>${item.title}</h3>
                            <p class="text-muted">${item.summary}</p>
                            <button class="btn btn-primary" style="margin-top: var(--space-2);" onclick="window.location.href='quiz.html?era=${encodeURIComponent(item.title)}'">Quiz starten</button>>Quiz starten</button>
                                <p><strong>Wichtige Denker:</strong> ${item.thinkers}</p>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    toggleDetail(element) {
        const detail = element.querySelector('.timeline-v-detail');
        if (detail) {
            const isHidden = detail.classList.contains('hidden');
            // Schließe andere (optional)
            detail.classList.toggle('hidden');
        }
    }
};