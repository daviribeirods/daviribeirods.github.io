/**
 * ============================================================================
 * DAVI SANTOS PORTFOLIO - TRANSLATIONS DICTIONARY & I18N ENGINE
 * Separated file for internationalization (English default, Portuguese option)
 * ============================================================================
 */

const siteTranslations = {
    en: {
        pageTitle: "Davi Santos | Data Scientist & Machine Learning",
        heroName: "Davi Santos",
        heroSubtitle: "Data Scientist | Machine Learning & Predictive Modeling",
        heroBio: "Hi! I’m Davi. This is where I document my hands-on <strong>Data Science</strong> projects, <strong>Machine Learning</strong> studies, and notes on what I’m actively learning and building.",
        getInTouch: '<i class="bi bi-envelope-fill"></i> Get in Touch',
        allFilter: '<i class="bi bi-grid-fill"></i> All',
        projectsFilter: '<i class="bi bi-code-slash"></i> Projects',
        articlesFilter: '<i class="bi bi-journal-text"></i> Articles',
        modalBackBtn: '<i class="bi bi-arrow-left"></i> Back to Portfolio',

        // Contact Section
        contactTitle: "Let’s Connect",
        contactDesc: "My inbox is always open for opportunities in Data Science within the financial sector, analytical challenges, or exchanging ideas about Machine Learning.",
        contactEmailBtn: '<i class="bi bi-envelope-fill"></i> davidatascientist@gmail.com',
        contactLinkedInBtn: '<i class="bi bi-linkedin"></i> Connect on LinkedIn',

        // Footer
        footerCopyright: "© 2026 Davi Santos • Data Science & Predictive Modeling"
    },
    pt: {
        pageTitle: "Davi Santos | Cientista de Dados & Modelagem Preditiva",
        heroName: "Davi Santos",
        heroSubtitle: "Cientista de Dados | Machine Learning & Modelagem Preditiva",
        heroBio: "Olá! Sou o Davi. Este espaço é onde documento meus projetos práticos de <strong>Ciência de Dados</strong>, estudos em <strong>Machine Learning</strong> e notas sobre o que venho aprendendo e construindo.",
        getInTouch: '<i class="bi bi-envelope-fill"></i> Entrar em Contato',
        allFilter: '<i class="bi bi-grid-fill"></i> Todos',
        projectsFilter: '<i class="bi bi-code-slash"></i> Projetos',
        articlesFilter: '<i class="bi bi-journal-text"></i> Artigos',
        modalBackBtn: '<i class="bi bi-arrow-left"></i> Voltar ao Portfólio',

        // Contact Section
        contactTitle: "Vamos conversar?",
        contactDesc: "Minha caixa de entrada está sempre aberta para oportunidades em Ciência de Dados no setor financeiro, desafios analíticos ou troca de ideias sobre Machine Learning.",
        contactEmailBtn: '<i class="bi bi-envelope-fill"></i> davidatascientist@gmail.com',
        contactLinkedInBtn: '<i class="bi bi-linkedin"></i> Conectar no LinkedIn',

        // Footer
        footerCopyright: "© 2026 Davi Santos • Ciência de Dados & Modelagem Preditiva"
    }
};

window.siteTranslations = siteTranslations;

function applyI18n(lang) {
    const targetLang = (lang === 'pt' || lang === 'en') ? lang : 'en';
    const selected = siteTranslations[targetLang] || siteTranslations.en;
    document.title = selected.pageTitle;
    document.documentElement.setAttribute('lang', targetLang);

    // 1. Static Dictionary Translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (selected[key]) {
            // Check if element has a nested badge or child to preserve
            const filterCount = el.querySelector('.filter-count');
            if (filterCount) {
                const countHtml = filterCount.outerHTML;
                el.innerHTML = selected[key] + ' ' + countHtml;
            } else {
                el.innerHTML = selected[key];
            }
        }
    });

    // 2. Dynamic Attribute Translations (data-en / data-pt)
    document.querySelectorAll('[data-en][data-pt]').forEach(el => {
        const text = el.getAttribute('data-' + targetLang);
        if (text) {
            el.innerHTML = text;
        }
    });

    // 3. Update Modal if currently open
    const modalBackdrop = document.getElementById('article-reader-modal');
    if (modalBackdrop && modalBackdrop.classList.contains('active')) {
        const currentArticleId = modalBackdrop.getAttribute('data-active-article-id');
        if (currentArticleId && typeof window.syncModalLanguage === 'function') {
            window.syncModalLanguage(currentArticleId, targetLang);
        }
    }

    // 4. Update Language Toggle Indicator
    const langIndicator = document.getElementById('lang-indicator');
    if (langIndicator) {
        langIndicator.textContent = targetLang.toUpperCase();
    }

    localStorage.setItem('user_lang', targetLang);
}

window.applyI18n = applyI18n;
