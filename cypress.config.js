const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zu75ue",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
//  baseUrl: "https://www.demoblaze.com"  //Para ejecutar las tareas de la 1 a la 4
    baseUrl: "https://ecommerce-playground.lambdatest.io/"  //Para ejecutar la tarea 5
  },
});
