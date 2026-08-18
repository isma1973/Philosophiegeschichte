/* ---------------------------------------------------
   CORE TOOLKIT – GLOBAL FÜR ALLE PROJEKTE
   Version 1.0 – by Ismail
--------------------------------------------------- */

/* -----------------------------
   DATE FORMATTING
----------------------------- */
export function formatDate(dateInput, output = "DD.MM.YYYY") {
  if (!dateInput) return "";

  let date = dateInput instanceof Date ? dateInput : null;

  if (!date && typeof dateInput === "string" && dateInput.includes("-")) {
    date = new Date(dateInput + "T00:00:00");
  }

  if (!date && typeof dateInput === "number") {
    date = new Date(dateInput);
  }

  if (!date) {
    const parts = dateInput.match(/(\d{1,4})/g);
    if (!parts) return dateInput;

    if (parts[0].length === 4) {
      date = new Date(parts[0], parts[1] - 1, parts[2]);
    } else {
      date = new Date(parts[2], parts[1] - 1, parts[0]);
    }
  }

  if (!(date instanceof Date) || isNaN(date)) return dateInput;

  const DD = String(date.getDate()).padStart(2, "0");
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const YYYY = date.getFullYear();

  return output
    .replace("DD", DD)
    .replace("MM", MM)
    .replace("YYYY", YYYY);
}

/* -----------------------------
   NUMBER FORMATTING
----------------------------- */
export function formatNumber(num, decimals = 2) {
  if (num === null || num === undefined || num === "") return "-";
  return Number(num).toFixed(decimals);
}

export function formatCurrency(num, currency = "CHF") {
  if (!num && num !== 0) return "-";
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency
  }).format(num);
}

export function formatPercent(num, decimals = 2) {
  if (!num && num !== 0) return "-";
  return Number(num).toFixed(decimals) + "%";
}

/* -----------------------------
   STORAGE
----------------------------- */
export const Store = {
  load(key, fallback = []) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  },
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

/* -----------------------------
   MATH / FINANCE
----------------------------- */
export function calcDiff(buy, current) {
  return current - buy;
}

export function calcPercent(buy, current) {
  if (!buy) return 0;
  return ((current - buy) / buy) * 100;
}

/* -----------------------------
   HELPERS
----------------------------- */
export function uid(prefix = "id") {
  return prefix + "_" + Math.random().toString(36).slice(2, 10);
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
