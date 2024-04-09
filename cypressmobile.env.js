const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 480,
    viewportHeight: 640,
    
  },
});