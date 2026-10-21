// assets/js/quickfinder.js - Spotlight Search & Favorites Integration
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const searchInput = document.getElementById("spotlightSearchInput");
        const resultsPanel = document.getElementById("spotlightResults");
        const clearBtn = document.getElementById("spotlightClearBtn");
        const randomBtn = document.getElementById("btnRandomPhilosopher");
        const favFilterCount = document.getElementById("favFilterCount");
        const favChip = document.getElementById("filterFavChip");

        // 1. Favorites Counter Sync
        const updateFavCountBadge = () => {
            const count = window.PhilosophieFavorites ? window.PhilosophieFavorites.getCount() : 0;
            if (favFilterCount) favFilterCount.textContent = count;
            
            // Mark thinker badges on the timeline
            if (window.PhilosophieFavorites) {
                const favs = window.PhilosophieFavorites.getAll();
                document.querySelectorAll(".thinker-badge").forEach(badge => {
                    const href = badge.getAttribute("href") || "";
                    const slugMatch = href.match(/([a-z0-9-]+)\.html$/i);
                    const slug = slugMatch ? slugMatch[1] : "";
                    if (favs.includes(slug)) {
                        badge.classList.add("is-fav");
                    } else {
                        badge.classList.remove("is-fav");
                    }
                });
            }
        };

        updateFavCountBadge();
        window.addEventListener("philosophy:favorites-changed", updateFavCountBadge);

        // 2. Random Philosopher Button
        if (randomBtn && typeof PHILOSOPHERS !== "undefined" && PHILOSOPHERS.length > 0) {
            randomBtn.addEventListener("click", () => {
                const randomPhilo = PHILOSOPHERS[Math.floor(Math.random() * PHILOSOPHERS.length)];
                if (randomPhilo && randomPhilo.slug) {
                    window.location.href = `philosophen/${randomPhilo.slug}.html`;
                }
            });
        }

        // 3. Spotlight Live Search
        if (!searchInput || !resultsPanel || typeof PHILOSOPHERS === "undefined") return;

        let activeIndex = -1;

        const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const highlightMatch = (text, query) => {
            if (!query || !text) return text || "";
            const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
            return text.replace(regex, "<mark>$1</mark>");
        };

        const renderResults = (query) => {
            const trimmed = query.trim().toLowerCase();
            if (trimmed.length < 1) {
                resultsPanel.innerHTML = "";
                resultsPanel.classList.add("hidden");
                clearBtn?.classList.add("hidden");
                activeIndex = -1;
                return;
            }

            clearBtn?.classList.remove("hidden");

            // Era Image Fallbacks
            const eraImages = {
                "Antike": "assets/img/antike.webp", "Indien": "assets/img/indien.webp",
                "China": "assets/img/china.webp", "Japan": "assets/img/japan.webp",
                "Islamische Welt": "assets/img/islam.webp", "Mittelalter": "assets/img/mittelalter.webp",
                "Frühe Neuzeit": "assets/img/neuzeit.webp", "Klassische Moderne": "assets/img/moderne.webp",
                "20. Jahrhundert": "assets/img/20jh.webp", "Gegenwart": "assets/img/gegenwart.webp",
                "Gegenwart & Zukunft": "assets/img/gegenwart.webp"
            };

            const favs = window.PhilosophieFavorites ? window.PhilosophieFavorites.getAll() : [];

            // Score and filter philosophers
            const scored = [];
            PHILOSOPHERS.forEach(p => {
                let score = 0;
                let matchSnippet = p.thesis;

                const nameMatch = (p.name || "").toLowerCase().includes(trimmed);
                const shortNameMatch = (p.shortName || "").toLowerCase().includes(trimmed);
                const eraMatch = (p.era || "").toLowerCase().includes(trimmed);
                const fieldMatch = (p.field || "").toLowerCase().includes(trimmed);
                const thesisMatch = (p.thesis || "").toLowerCase().includes(trimmed);
                
                let ideaMatch = false;
                if (p.ideas && Array.isArray(p.ideas)) {
                    for (const idea of p.ideas) {
                        if (idea.toLowerCase().includes(trimmed)) {
                            ideaMatch = true;
                            matchSnippet = idea;
                            break;
                        }
                    }
                }

                if (shortNameMatch) score += 20;
                if (nameMatch) score += 15;
                if (eraMatch) score += 8;
                if (fieldMatch) score += 6;
                if (ideaMatch) score += 7;
                if (thesisMatch) score += 5;

                if (score > 0) {
                    scored.push({ p, score, matchSnippet });
                }
            });

            scored.sort((a, b) => b.score - a.score);
            const matches = scored.slice(0, 8);

            if (matches.length === 0) {
                resultsPanel.innerHTML = `
                    <div class="spotlight-empty-state">
                        🔍 Keine Denker zu <strong>"${query}"</strong> gefunden.<br>
                        <span style="font-size: 0.85rem; color: var(--text-light); margin-top: 6px; display: inline-block;">
                            Tipp: Probiere Begriffe wie <em>Kant</em>, <em>Ethik</em>, <em>Dao</em>, <em>Sokrates</em> oder <em>Freiheit</em>.
                        </span>
                    </div>
                `;
                resultsPanel.classList.remove("hidden");
                activeIndex = -1;
                return;
            }

            const headerHtml = `
                <div class="spotlight-results-header">
                    <span>${matches.length} Treffer</span>
                    <span style="font-weight: normal; font-size: 0.72rem;">↑↓ Navigieren · Enter zum Öffnen</span>
                </div>
            `;

            const itemsHtml = matches.map((item, idx) => {
                const p = item.p;
                const isFav = favs.includes(p.slug);
                const portrait = p.portrait ? p.portrait.replace("../", "") : (eraImages[p.era] || "assets/img/antike.webp");
                return `
                    <div class="spotlight-result-item" data-index="${idx}" data-url="philosophen/${p.slug}.html" role="option">
                        <img src="${portrait}" alt="${p.name}" class="spotlight-result-avatar" loading="lazy">
                        <div class="spotlight-result-info">
                            <div class="spotlight-result-title">
                                <span>${highlightMatch(p.name, trimmed)}</span>
                                <span class="spotlight-result-era">${p.era}</span>
                            </div>
                            <div class="spotlight-result-snippet">
                                ${highlightMatch(item.matchSnippet, trimmed)}
                            </div>
                        </div>
                        <button type="button" class="spotlight-fav-btn ${isFav ? 'is-favorite' : ''}" data-slug="${p.slug}" title="${isFav ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}" aria-label="Favorit umschalten">
                            ${isFav ? '★' : '☆'}
                        </button>
                    </div>
                `;
            }).join("");

            resultsPanel.innerHTML = headerHtml + itemsHtml;
            resultsPanel.classList.remove("hidden");
            activeIndex = -1;

            // Wire up favorite toggles inside search results
            resultsPanel.querySelectorAll(".spotlight-fav-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const slug = btn.dataset.slug;
                    if (window.PhilosophieFavorites) {
                        const isNowFav = window.PhilosophieFavorites.toggle(slug);
                        btn.classList.toggle("is-favorite", isNowFav);
                        btn.textContent = isNowFav ? "★" : "☆";
                        btn.title = isNowFav ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen";
                    }
                });
            });

            // Wire up item clicks
            resultsPanel.querySelectorAll(".spotlight-result-item").forEach(item => {
                item.addEventListener("click", () => {
                    const url = item.dataset.url;
                    if (url) window.location.href = url;
                });
            });
        };

        // Input listener with debounce
        let debounceTimer;
        searchInput.addEventListener("input", (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                renderResults(e.target.value);
            }, 120);
        });

        // Clear button
        clearBtn?.addEventListener("click", () => {
            searchInput.value = "";
            renderResults("");
            searchInput.focus();
        });

        // Keyboard Navigation (ArrowUp, ArrowDown, Enter, Esc, Ctrl+K)
        document.addEventListener("keydown", (e) => {
            // Global Shortcut Ctrl+K / Cmd+K or "/" when not typing in an input
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
                searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
            } else if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
                searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        searchInput.addEventListener("keydown", (e) => {
            const items = resultsPanel.querySelectorAll(".spotlight-result-item");
            if (items.length === 0) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                activeIndex = (activeIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                activeIndex = (activeIndex - 1 + items.length) % items.length;
                updateSelection(items);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (activeIndex >= 0 && items[activeIndex]) {
                    items[activeIndex].click();
                } else if (items[0]) {
                    items[0].click();
                }
            } else if (e.key === "Escape") {
                resultsPanel.classList.add("hidden");
                searchInput.blur();
            }
        });

        const updateSelection = (items) => {
            items.forEach((item, idx) => {
                if (idx === activeIndex) {
                    item.classList.add("active-selection");
                    item.scrollIntoView({ block: "nearest" });
                } else {
                    item.classList.remove("active-selection");
                }
            });
        };

        // Close on click outside
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !resultsPanel.contains(e.target)) {
                resultsPanel.classList.add("hidden");
            }
        });
    });
})();
