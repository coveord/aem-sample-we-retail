(async () => {
    const initComponent = async (el) => {
        await el.initialize({
            accessToken: "xx63e73577-c09a-42cc-855c-0bc9b8f0fbc1",
            organizationId: "adobedemor5tin3wu",
        });
    };

    const initSearchResultPage = async () => {
        const el = document.querySelector(".search-results-page");

        // If the page does not have a search component.
        if (!el) {
            console.log('Coveo not initialized as no result page was found.');
            return;
        }

        // Initialization
        await initComponent(el);

        // Trigger a first search
        el.executeFirstSearch();
    }

    const initGlobalSearch = async () => {
        const el = document.querySelector(".search-global");

        // If the page does not have a search component.
        if (!el) {
            console.log('Coveo not initialized as no global search was found.');
            return;
        }

        // Initialization
        await initComponent(el);

        // Trigger a first search
        el.executeFirstSearch();
    }

    const coveoInit = async () => {
        console.log('Coveo initializing.');

        await import('https://static.cloud.coveo.com/atomic/v1/atomic.esm.js')
            .catch(() => console.log('Error loading coveo scripts.'));

        await customElements.whenDefined("atomic-search-interface");
        await initSearchResultPage();
        await initGlobalSearch();

        console.log('Coveo initialized.');
    };
    await coveoInit();
})();