const browserLang = navigator.language || navigator.userLanguage;
let currentLang = browserLang.startsWith('es') ? 'es' : 'en';
let translations = {};

export async function initI18n() {
    translations = await loadTranslations(currentLang);
    applyTranslations();
}

export function applyTranslations(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = getNestedTranslation(el.dataset.i18n) || 'NaN';
    });

    document.documentElement.lang = currentLang;
}

function getNestedTranslation(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations);
}

async function loadTranslations(lang) {
    const res = await fetch(`/i18n/${lang}.json`);
    return res.json();
}
