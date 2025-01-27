class ResultPage {

    titleList = '[data-testid="result-title-a"]>span';
    regionFilterDropDown = '[data-testid="region-filter-label"]';
  
    getTitles() {
      return cy.get(this.titleList);
    }
  
    openRegionFilter() {
        cy.get(this.regionFilterDropDown).click();
        
    }
  
    clearFilters() {
        cy.contains('Clear All').click();
    }
  
    getRegionsDropdown() {
      return cy.get('[data-testid="dropdown-options"]').eq(1).find('div div span:nth-child(2)');
    }
  
  }
  
  export default new ResultPage();