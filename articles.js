document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles-container');
    /**
     * Renders an article by taking the specific article object as a parameter.
     * This ensures the current data is used rather than any previously stored values.
     */
    const renderArticle = (article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-box');
        articleDiv.innerHTML = `
            <h1 class="t article-title-link"><a href="${article.url}" target="_blank">${article.headline}</a></h1>
            <p class="p">${article.description}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    };

    // This array simulates fetching data from an API or a database.
    // Fixed Data Alignment: Headlines now match their corresponding URLs.
    const defenceArticles = [
        {
            url: "https://www.indiandefensenews.in/2026/06/centre-to-establish-modern-air-raid.html",
            headline: "Centre To Establish Modern Air-Raid Warning Systems In 244 Districts With IAF Expertise",
            description: "Centre To Establish Modern Air-Raid Warning Systems In 244 Districts With IAF Expertise"
        },
        {
            url: "https://defence.in/threads/india-pushes-for-rafale-interface-documents-to-ensure-seamless-astra-and-brahmos-ng-integration-claims-french-media.17905/",
            headline: "India pushes for Rafale interface documents to ensure seamless Astra and BrahMos NG integration, claims French media",
            description: "India pushes for Rafale interface documents to ensure seamless Astra and BrahMos NG integration, claims French media"
        },
        {
            url: "https://bharatshakti.in/vietnam-to-become-second-asean-country-to-obtain-brahmos-missile-system/",
            headline: "Vietnam to become second ASEAN country to obtain BrahMos missile system",
            description: "Vietnam to become second ASEAN country to obtain BrahMos missile system"
        },
        {
            url: "https://www.indiandefensenews.in/2026/05/taliban-signs-first-defence-pact-with.html",
            headline: "Taliban signs first defence pact with Russia, raising concerns over regional security dynamics",
            description: "Taliban signs first defence pact with Russia, raising concerns over regional security dynamics"
        },
        {
            url: "https://www.indiandefensenews.in/2026/05/cisf-strengthens-counter-drone-and.html",
            headline: "CISF strengthens counter-drone and surveillance capabilities with new equipment",
            description: "CISF strengthens counter-drone and surveillance capabilities with new equipment"
        },
        {
            url: "https://www.indiandefensenews.in/2026/05/netrasemi-to-begin-mass-production-of.html",
            headline: "NetraSEMI to begin mass production of indigenous 3D imaging radar for Indian Army",
            description: "NetraSEMI to begin mass production of indigenous 3D imaging radar for Indian Army"
        },
        {
            headline: "India’s indigenous Bhargavastra counter-drone defence system enters final trials to combat emerging drone swarms",
            url: "https://defence.in/threads/indigenous-bhargavastra-counter-drone-defence-system-enters-final-trials-to-combat-emerging-drone-swarms.17875/",
            description: "India’s indigenous Bhargavastra counter-drone defence system enters final trials to combat emerging drone swarms"
        },
        {
            headline: "India equips Zorawar light tank with indigenous 105mm gun, successfully tests firing",
            url: "https://www.indiandefensenews.in/2026/05/india-equips-zorawar-light-tank-with.html",
            description: "India has successfully tested the firing of an indigenous 105mm gun mounted on the Zorawar light tank, marking a significant milestone in the development of the country’s armored capabilities." 
        },
        {
            headline: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status",
            url: "https://defence.in/threads/india-offers-extended-range-brahmos-missiles-to-philippines-as-coastal-defence-batteries-near-initial-operational-status.17869/",
            description: "India offers extended-range BrahMos missiles to Philippines as coastal defence batteries near Initial Operational Status"
        },
        {
            headline: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project",
            url: "https://defence.in/threads/analyzing-recent-rfp-timelines-for-amca-prototypes-from-expected-dec-2026-contract-signing-to-flight-test-completion.17876/",
            description: "India invites 3 private firms for Advanced Medium Combat Aircraft (AMCA) project"
        },
        {
            headline: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions",
            url: "https://www.indiandefensenews.in/2026/05/zen-technologies-wins-85-crore-avnl.html",
            description: "Zen Technologies wins Rs 85 crore order from AVNL for smart grid solutions"
        }
    ];

    // Load initial articles
    defenceArticles.forEach(renderArticle);
});