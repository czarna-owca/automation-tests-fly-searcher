class homeLoginPage {

    elements = {
        usernameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#passwd'),
        loginBtn: () => cy.get('#SubmitLogin > span'),
        logoutBtn: () => cy.get('.logout'),
        signinBtn: () => cy.get('.login')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    clickLogout() {
        this.elements.logoutBtn().click()
    }

    clickSignin() {
        this.elements.signinBtn().click()
    }

}

module.exports = new homeLoginPage();