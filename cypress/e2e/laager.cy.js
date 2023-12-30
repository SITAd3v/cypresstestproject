describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https:///www.lager157.com/')
    cy.get('[href="https://lager157.com/sv-se/"] > span').click()
    //cy.get(':nth-child(4) > [data-style-attr="Node_Content_Level_1"] > .CMS-SubMenuNode-title > .Link').click()
    //cy.get(':nth-child(4) > [data-style-attr="Node_Content_Level_1"] > .CMS-SubMenuNode-title > .Link').click()
    cy.get('.SearchForm-input').type('jeans')
  })
})