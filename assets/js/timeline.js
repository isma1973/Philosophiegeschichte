// assets/js/timeline.js

window.Timeline = {
    init(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container || !data) return;
        this.render(container, data);
    },

    resolveThinkerBadge(rawName) {
        const cleanName = rawName.trim();
        if (!cleanName) return '';

        let slug = null;
        const list = (typeof window !== 'undefined' && window.PHILOSOPHERS) || (typeof PHILOSOPHERS !== 'undefined' ? PHILOSOPHERS : null);

        if (Array.isArray(list)) {
            const lowerName = cleanName.toLowerCase();
            // 1. Direct shortName match
            let found = list.find(p => p.shortName && p.shortName.toLowerCase() === lowerName);
            // 2. Direct full name match
            if (!found) {
                found = list.find(p => p.name && p.name.toLowerCase() === lowerName);
            }
            // 3. Normalized match without parentheses (e.g. 'Zenon (Stoa)' -> 'zenon')
            if (!found) {
                const baseName = lowerName.replace(/\s*\([^)]*\)/g, '').trim();
                found = list.find(p => {
                    const pShort = (p.shortName || '').toLowerCase();
                    const pFull = (p.name || '').toLowerCase();
                    return (pShort && (pShort === baseName || pShort.includes(baseName) || baseName.includes(pShort))) ||
                           (pFull && (pFull === baseName || pFull.includes(baseName) || baseName.includes(pFull)));
                });
            }
            if (found) slug = found.slug;
        }

        if (slug) {
            return `<a href="philosophen/${slug}.html" class="thinker-badge" title="Profil von ${cleanName} öffnen">${cleanName}</a>`;
        }
        return `<span class="thinker-badge thinker-badge-plain">${cleanName}</span>`;
    },

    render(container, data) {
        container.innerHTML = `
            <div class="timeline-v">
                ${data.map((item, index) => {
            const triggerId = `${container.id}-timeline-trigger-${index}`;
            const panelId = `${container.id}-timeline-panel-${index}`;
            const cleanEra = item.title.replace(/^[^\w\s\u00C0-\u017F]+/, '').trim();
            const thinkerListHtml = item.thinkers 
                ? item.thinkers.split(',').map(name => this.resolveThinkerBadge(name)).join('') 
                : '';

            return `
                    <div class="timeline-v-item" data-themes="${item.themes || ''}">
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
                            <p class="text-muted" style="margin-top: 12px;">${item.summary}</p>
                            <div
                                class="timeline-v-detail"
                                id="${panelId}"
                                role="region"
                                aria-labelledby="${triggerId}"
                                hidden
                            >
                                ${item.image ? `
                                <div class="timeline-v-media">
                                    <img src="${item.image}" alt="${item.title}" class="timeline-v-image" loading="lazy">
                                </div>` : ''}

                                ${thinkerListHtml ? `
                                <div class="timeline-v-thinkers">
                                    <span class="timeline-v-thinkers-label">Wichtige Denker:</span>
                                    <div class="timeline-v-thinkers-list">
                                        ${thinkerListHtml}
                                    </div>
                                </div>` : ''}

                                <p class="timeline-v-desc">${item.description}</p>
                                <div class="timeline-v-actions">
                                    <a href="${item.link || '#'}" class="btn btn-outline">Epoche erkunden →</a>
                                    <a href="quiz.html?era=${encodeURIComponent(cleanEra)}" class="btn btn-primary">Quiz starten</a>
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