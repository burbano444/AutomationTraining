describe('API testing', () => {
//PRUEBAS EN STATUS
/*
  it('Poke good assertion', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu') //SIN ESPECIFICAR TIPO DE CONSULTA
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu') //ESPECIFICANDO TIPO DE CONSULTA
    .its('status')
    .should('equal',200)
  })

  it('Poke bad assertion', () => {
    cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/nobita",failOnStatusCode:false}) //ESPECIFICANDO TIPO DE CONSULTA
    .its('status')
    .should('equal',404)
  })

//PRUEBAS EN BODY
  it('API testing name', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu') //ESPECIFICANDO TIPO DE CONSULTA
    .its('body.name')
    .should('equal',"pikachu")
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu') //ESPECIFICANDO TIPO DE CONSULTA
    .its('body.name')
    .should('equal',"nobita")
  })

//CONSULTAR DOS CAMPOS
  it('API testing type', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu') //ESPECIFICANDO TIPO DE CONSULTA
    .its('body.name')
    .should('equal',"pikachu")
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu') //ESPECIFICANDO TIPO DE CONSULTA
    .its('body.types[0].type.name')
    .should('equal',"electric")
  })

//CONCATENAR DOS CAMPOS
  it('API testing type', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu').then((response)=>{
      expect(response.body).to.have.property('name','pikachu');
      expect(response.body).to.have.property('order',35);
      expect(response.body.types[0].type).to.have.property('name','electric');
    })
  })

//SWAGGER https://petstore.swagger.io/
  it('Fixtures swagger mascota', () => {
    //Declaro el objeto "body" localmente
    const body={"id": 0,"category": {"id": 0,"name": "mascota"},"name": "diego","photoUrls": ["string"],"tags": [{"id": 0,"name": "prueba"}],"status": "available"} 
    cy.fixture('tc1_body').then((body)=>{ //ADELANTANDO AL TEMA: Declaro el objeto body en "tc1_body.json" y con fixture se lo asigno a la vble body
      cy.request('POST','https://petstore.swagger.io/v2/pet',body).its('status').should('eq',200)
    })
    cy.fixture('tc1_body').then((body)=>{ //ADELANTANDO AL TEMA: Declaro el objeto body en "tc1_body.json" y con fixture se lo asigno a la vble body
      expect(body.id).is.equal(0)
    })
  }) 
*/
//USAMOS EL INTERCEPT Y LO PONEMOS EN UN ALIAS
  it('Intercept alias', () => {
    cy.wait(1000)
    cy.intercept('GET','https://api.demoblaze.com/entries').as('api')
    cy.visit('www.demoblaze.com')
    cy.wait('@api').its('response.statusCode').should('eq',200) //Los objetos suelen variar un poco
  })
})


