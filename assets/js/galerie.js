document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('galleryContainer');
    const emptyState = document.getElementById('emptyState');
    const undoBtn = document.getElementById('btnUndo');
    const counterEl = document.getElementById('galleryCounter');
    
    if (typeof PHILOSOPHERS === 'undefined') return;

    // Shuffle philosophers for random discovery
    const philosophers = [...PHILOSOPHERS].sort(() => 0.5 - Math.random());
    const totalCount = philosophers.length;
    const swipedHistory = [];
    
    // Render cards backwards so first is on top (last child in DOM)
    philosophers.reverse().forEach((p) => {
        const eraImages = {
            "Antike": "antike.webp", "Indien": "indien.webp", "China": "china.webp", 
            "Japan": "japan.webp", "Islamische Welt": "islam.webp", "Mittelalter": "mittelalter.webp", 
            "Frühe Neuzeit": "neuzeit.webp", "Klassische Moderne": "moderne.webp", 
            "20. Jahrhundert": "20jh.webp", "Gegenwart": "gegenwart.webp", "Gegenwart & Zukunft": "gegenwart.webp"
        };
        const portrait = p.portrait ? p.portrait.replace('../', '') : `assets/img/${eraImages[p.era]}`;
        
        const card = document.createElement('div');
        card.className = 'tinder-card';
        card.dataset.slug = p.slug;
        card.innerHTML = `
            <div class="card-img-area">
                <img src="${portrait}" alt="${p.name}" class="card-img" draggable="false">
            </div>
            <div class="card-body">
                <div class="card-era">${p.era}</div>
                <div class="card-name">${p.name}</div>
                <div class="card-quote">«${p.thesis}»</div>
            </div>
        `;
        container.appendChild(card);
    });

    const favBtn = document.getElementById('btnGalleryFav');

    const updateFavButton = () => {
        if (!favBtn) return;
        if (!topCard) {
            favBtn.disabled = true;
            favBtn.classList.remove('is-favorite');
            return;
        }
        favBtn.disabled = false;
        const slug = topCard.dataset.slug;
        const isFav = window.PhilosophieFavorites ? window.PhilosophieFavorites.has(slug) : false;
        favBtn.classList.toggle('is-favorite', isFav);
        favBtn.title = isFav ? 'Aus Favoriten entfernen (★)' : 'Als Favorit merken (⭐)';
        favBtn.textContent = isFav ? '★' : '⭐';
    };

    const refreshTopCard = () => {
        const remaining = document.querySelectorAll('.tinder-card');
        topCard = remaining.length > 0 ? remaining[remaining.length - 1] : null;
        updateCounter();
        updateUndoButton();
        updateFavButton();
    };

    const updateCounter = () => {
        if (!counterEl) return;
        const remaining = document.querySelectorAll('.tinder-card').length;
        if (remaining === 0) {
            counterEl.textContent = `${totalCount} / ${totalCount} entdeckt`;
        } else {
            const currentNumber = totalCount - remaining + 1;
            counterEl.textContent = `${currentNumber} / ${totalCount}`;
        }
    };

    const updateUndoButton = () => {
        if (undoBtn) {
            undoBtn.disabled = swipedHistory.length === 0;
        }
    };

    let cards = document.querySelectorAll('.tinder-card');
    let topCard = cards[cards.length - 1];
    updateCounter();
    updateUndoButton();

    let startX = 0, currentX = 0;
    let isDragging = false;

    const handleStart = (e) => {
        if (!topCard) return;
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        topCard.style.transition = 'none';
    };

    const handleMove = (e) => {
        if (!isDragging || !topCard) return;
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        currentX = x - startX;
        const rotate = currentX * 0.05;
        topCard.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
    };

    const handleEnd = () => {
        if (!isDragging || !topCard) return;
        isDragging = false;
        topCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        
        if (Math.abs(currentX) > 100) {
            // swipe out
            const direction = currentX > 0 ? 1 : -1;
            swipeOut(direction);
        } else {
            // snap back
            topCard.style.transform = `translateX(0) rotate(0deg)`;
        }
        currentX = 0;
    };

    const swipeOut = (direction) => {
        if (!topCard) return;

        if (navigator.vibrate) {
            navigator.vibrate(15);
        }

        const outX = direction * (window.innerWidth + 200);
        topCard.style.transform = `translateX(${outX}px) rotate(${direction * 30}deg)`;
        topCard.style.opacity = '0';
        
        const swipedCard = topCard;
        const currentSlug = topCard.dataset.slug;

        setTimeout(() => {
            if (swipedCard && swipedCard.parentNode) {
                swipedCard.remove();
                swipedHistory.push(swipedCard);
            }
            refreshTopCard();
            if (!topCard) {
                emptyState.style.display = 'block';
            }
        }, 280);
        
        if (direction === 1) {
            // Swiped right (Love/Read) -> Go to profile
            setTimeout(() => {
                window.location.href = `philosophen/${currentSlug}.html`;
            }, 350);
        }
    };

    const undoLastSwipe = () => {
        if (swipedHistory.length === 0) return;

        if (navigator.vibrate) {
            navigator.vibrate(10);
        }

        const cardToRestore = swipedHistory.pop();
        cardToRestore.style.transition = 'none';
        cardToRestore.style.transform = 'translateX(-120%) rotate(-15deg)';
        cardToRestore.style.opacity = '0';

        container.appendChild(cardToRestore);
        // Force reflow
        void cardToRestore.offsetHeight;

        cardToRestore.style.transition = 'transform 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.35s ease';
        cardToRestore.style.transform = 'translateX(0) rotate(0deg)';
        cardToRestore.style.opacity = '1';

        emptyState.style.display = 'none';
        refreshTopCard();
    };

    // Attach events
    container.addEventListener('mousedown', handleStart);
    container.addEventListener('touchstart', handleStart, {passive: true});
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, {passive: true});
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            swipeOut(-1); // Nope
        } else if (e.key === 'ArrowRight') {
            swipeOut(1); // Love
        } else if (e.key === 'z' || e.key === 'Z' || e.key === 'Backspace') {
            undoLastSwipe();
        }
    });

    document.getElementById('btnNope').addEventListener('click', () => swipeOut(-1));
    document.getElementById('btnLove').addEventListener('click', () => swipeOut(1));
    if (favBtn) {
        favBtn.addEventListener('click', () => {
            if (!topCard) return;
            const slug = topCard.dataset.slug;
            if (window.PhilosophieFavorites) {
                const isNowFav = window.PhilosophieFavorites.toggle(slug);
                updateFavButton();
                if (navigator.vibrate) navigator.vibrate([15, 30, 15]);
            }
        });
    }
    if (undoBtn) {
        undoBtn.addEventListener('click', undoLastSwipe);
    }
});
