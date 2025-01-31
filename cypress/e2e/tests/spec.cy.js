import HomePage from "../pages/homePage";
import ResultPage from "../pages/resultPage";

describe('Test', () => {

  it('Should verify that all search results contain the term "android"', () => {
    cy.visit('/');    
    HomePage.searchText('android');
    HomePage.clickSearchButton();
    cy.origin('https://duckduckgo.com/', () => {
      cy.get('[data-testid="result-title-a"]>span').each(($el) => {
          cy.wrap($el).invoke('text').should('match', /android/i);
        });
      });
    });


  it('Should validate that the region dropdown has more than 10 options', () => {
    cy.visit('https://duckduckgo.com/?t=h_&hps=1&start=1&q=android&ia=web'); 
    ResultPage.openRegionFilter();
    ResultPage.clearFilters();
      ResultPage.getRegionsDropdown().then(($elements) => {
          const totalCount = $elements.length;
          expect(totalCount).to.be.greaterThan(10);
        });
      });

  it('Should Print out the value of the Icon URL if its not null.', () => {

        cy.getJSON('https://api.duckduckgo.com/?q=android&format=json');

        cy.fixture('android').then((android) => {
            const logIcons = (obj) => {
                if (obj.Icon?.URL) {
                    cy.log(`"URL": ${obj.Icon.URL}`);
                }
            };

        const traverse = (obj) => {
            if (Array.isArray(obj)) {
                obj.forEach(traverse);
            } else if (typeof obj === 'object' && obj !== null) {
                logIcons(obj);
                Object.values(obj).forEach(traverse);
            }
        };

        traverse(android);
    });

  });

}); 