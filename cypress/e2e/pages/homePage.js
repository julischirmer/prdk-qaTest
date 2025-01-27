class HomePage {

  txtSearchBar = 'input[type="text"]';
  submitButton = 'button[type="submit"]';

  searchText(text) {
    cy.get(this.txtSearchBar).type(`${text}`);
  }

  clickSearchButton() {
    cy.get(this.submitButton).click();
  }
  

}
export default new HomePage();