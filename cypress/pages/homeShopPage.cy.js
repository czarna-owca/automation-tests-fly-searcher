class homeShopPage {

    elements = {
        signinBtn: () => cy.get('.login'),
        usernameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#passwd'),
        loginBtn: () => cy.get('#SubmitLogin > span')

    }

    typeUsername(username) {
        this.elements.usernameInput().type(usernme);
    }
    typePassword(pasword) {
        this.elements.usernameInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
}

module.exports = new homeShopPage();
