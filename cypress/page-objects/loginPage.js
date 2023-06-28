class loginPage{
    constructor(){
        this.url="index.php?route=account/login"
        this.loginErrorMessage="Warning: No match for E-Mail Address and/or Password."
        this.blockLoginErrorMessage="Your account has exceeded allowed number of login attempts. Please try again in 1 hour"
    }

    element={
        loginEmailField:()=> cy.get("#input-email"),
        loginPasswordField:()=> cy.get("#input-password"),
        loginButton:()=> cy.get("form > .btn"),
        errorMessage:()=> cy.get("#account-login > .alert"),
        accountHeader:()=> cy.get(".card-header").contains("My Account")
    }

    visit(){
        cy.visit(this.url)
    }

    typeInLoginEmail(email){
        this.element.loginEmailField().clear().type(email)
    }

    typeInLoginPassword(password){  
        this.element.loginPasswordField().clear().type(password)
    }

    clickLoginButton(){
        this.element.loginButton().click()
    }

    verifyErrorMessage(message){
        this.element.errorMessage().should("be.visible").should("contain.text",message)
    }

    verifyLoginErrorMessage(){
        this.verifyErrorMessage(this.loginErrorMessage)
    }

    verifyBlockedLoginErrorMessage(){
        this.verifyErrorMessage(this.blockLoginErrorMessage)
    }

    loginUser(email,password){
        this.typeInLoginEmail(email)
        this.typeInLoginPassword(password)
        this.clickLoginButton()
    }

    verifyAccountLogin(){
        this.element.accountHeader().should("be.visible")
    }
}

module.exports=new loginPage();