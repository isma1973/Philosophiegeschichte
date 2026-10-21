// assets/js/favorites.js - Philosophiegeschichte Favorites Manager
(() => {
    const STORAGE_KEY = 'philo_favorites_v1';

    const getFavorites = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    };

    const saveFavorites = (favs) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
        } catch (e) {}
    };

    const isFavorite = (slug) => {
        if (!slug) return false;
        return getFavorites().includes(slug);
    };

    const toggleFavorite = (slug) => {
        if (!slug) return false;
        let favs = getFavorites();
        let added = false;
        if (favs.includes(slug)) {
            favs = favs.filter(s => s !== slug);
            added = false;
        } else {
            favs.push(slug);
            added = true;
        }
        saveFavorites(favs);
        window.dispatchEvent(new CustomEvent('philosophy:favorites-changed', {
            detail: { slug, isFavorite: added, count: favs.length, favorites: favs }
        }));
        return added;
    };

    const getCount = () => getFavorites().length;

    window.PhilosophieFavorites = {
        getAll: getFavorites,
        has: isFavorite,
        toggle: toggleFavorite,
        getCount: getCount
    };
})();
