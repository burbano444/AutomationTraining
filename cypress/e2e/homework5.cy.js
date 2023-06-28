const homePage = require("../page-objects/homePage")
const loginPage = require("../page-objects/loginPage")

context('Test Suit', () => {
  it("home page loads properly", () => {
    homePage.visit()
    homePage.verifyHomePageLoads()
  })

  it("login failed- user doesn't exist", () => {
    loginPage.visit()
    cy.fixture("loginTSData").then((data)=>{
      loginPage.loginUser(data.tc1_loginerror.email,data.tc1_loginerror.password)
    })
    loginPage.verifyLoginErrorMessage()
  })

  it("login success user login", () => {
    loginPage.visit()
    cy.fixture("loginTSData").then((data)=>{
      cy.intercept(data.tc2_loginsuccess.method,data.tc2_loginsuccess.endpoint).as("afterLogin")
      loginPage.loginUser(data.tc2_loginsuccess.email,data.tc2_loginsuccess.password)
      cy.wait("@afterLogin").its("response.statusCode").should("eq",200)
    })
    loginPage.verifyAccountLogin()
  })

  it("login failed- user gets block after 4 attemps", () => {
    loginPage.visit()
    cy.fixture("loginTSData").then((data)=>{
      loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password)
      loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password)
      loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password)
      loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password)
    })
    loginPage.verifyBlockedLoginErrorMessage()
  })

  it("all fields requirement shows and alert", ()=>{
    cy.visit("index.php?route=account/register");
    cy.get(".float-right .btn").click();
    //Estoy en el ID "input-firstname", entonces parese en el padre div, y dirijase al hijo con la caracteristica text danger hacer la assertion
    //NOTA: Se usa mucho para busqueda en tablas
    cy.get("#input-firstname").parent("div").children(".text-danger").should("be.visible") 
    //Estoy en el ID "input-firstname", entonces tengo un hermano con clase "text-danger", sobre el que hago el assert 
    cy.get("#input-firstname").siblings(".text-danger").should("be.visible")
  })

  it("add a item to the shopping car", ()=>{
    cy.visit("index.php?route=product/category&path=18_45");
    //Eliminamos la clase para que el botón flotante aparezca
    cy.get(".product-action").should('have.class', 'product-action').invoke('removeClass', 'product-action');
    cy.get("[title='Add to Cart']").eq(0).click();
    cy.get("#notification-box-top .toast-header .mr-auto").should("contain.text", "1 item(s)")
  })

})