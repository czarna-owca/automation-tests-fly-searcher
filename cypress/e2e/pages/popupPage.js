class popupPage  {
    elements ={
        proceedBtn: () => cy.get('.btn btn-default button button-medium'),
        continueBtn: () => cy.get('.continue btn btn-default button exclusive-medium')
        
}
    
    clickProceed() {
        this.elements.proceedBtn().click();
    }

    clickContinue() {
        this.elements.continueBtn().click();
    }

}

module.exports = new popupPage();