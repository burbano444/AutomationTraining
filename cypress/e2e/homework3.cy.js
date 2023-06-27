describe('Assertions', () => {
  it('Classwork Homework', () => {
    cy.visit('')  //Lo dejamos vacío ya que configuramos página en "cupress.config.js"
//  cy.visit('mercadolibre.com.co')
//  cy.get('div > a[href="prod.html?idp_=1"]').click()
//  cy.get('#login2').click()    
//  cy.get('#loginusername').type('user123')

//  EJEMPLO JULI
//  cy.get('#itemc:nth-of-type(4)').click()
//  cy.get('#tbodyid > div ').should('have.length.greaterThan',2)

//ASSERTIONS
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=1"]').should('have.text','Samsung galaxy s6')
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=1"]').should('not.have.text','Samsung galaxy s')
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=1"]').should('contain','6')
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=1"]').should('contain','s6').and('have.text','Samsung galaxy s6')

//OTRA MANERA DE ESCRIBIRLOS
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=1"]').then((elementName)=>{
      expect(elementName).to.have.text('Samsung galaxy s6')
      expect(elementName).to.contain('s6')
      expect(elementName).to.have.length(1) 
    })

//SOLUCIÓN TAREA 3
//Con "then" como Yield
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=2"]').then((elementName2)=>{
      expect(elementName2).to.have.text('Nokia lumia 1520')
      expect(elementName2).to.contain('1520')
      expect(elementName2).to.have.length(1) 
    })

//Con "should" como Yield
    cy.get('#tbodyid .card-title a[href="prod.html?idp_=2"]').should((elementName3)=>{
      expect(elementName3).to.have.text('Nokia lumia 1520')
      expect(elementName3).to.contain('1520')
      expect(elementName3).to.have.length(1) 
    })    
  })
})