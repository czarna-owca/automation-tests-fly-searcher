class searchtoolPage {

    elements = {
        searchInput: () => cy.get('#search_query_top'),
        searchBtn: () => cy.get('#searchbox > .btn')
    }

    typeProductName(productname) {
        this.elements.searchInput().type(productname);
    }

    clickSearch() {
        this.elements.searchBtn().click();
    }
}

module.exports = new searchtoolPage();