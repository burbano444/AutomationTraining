describe('VisitPages', () => {
  it('Landing Page Demoblaze', () => {
    cy.visit('')  //Lo dejamos vacío ya que configuramos página en "cupress.config.js"
  })
  it('Login into Demoblaze', () => {  //No hicimos login, ingresamos a un producto
    cy.visit('/prod.html?idp_=1') //Cambiamos endpoint de la página
  })  
})