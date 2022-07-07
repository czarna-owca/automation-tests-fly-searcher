class searchtoolPage {

    elements = {
        searchInput: () => cy.get('#search_query_top'),

        //loginBtn: () => cy.get('#SubmitLogin > span'),

    }

    typeProductName(productname) {
        this.elements
            .productNameInput()
            .type(productname);
    }


    // clickLogin() {
    //     this.elements.loginBtn().click();
    // }


}

module.exports = new searchtoolPage();