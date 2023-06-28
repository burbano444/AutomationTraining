describe('CSS selector', () => {
  it('Classwork Homework', () => {
    cy.visit('')  //Lo dejamos vacío ya que configuramos página en "cupress.config.js"
//  cy.visit('mercadolibre.com.co')
    cy.get('div > a[href="prod.html?idp_=1"]').click()
    cy.get('#login2').click()    
    cy.get('#loginusername').type('user123')
//SOLUCIÓN TAREA 2
    cy.get('#loginpassword').type('root123') 
    cy.get('#logInModal > div > div > div.modal-header > button > span').click()  //Se recurrio a la herramienta de cypress para el css selector
    cy.get('#tbodyid > div.row > div > a').click()  //Toda minimizacion de css selector proviende de un "id"
  })
})