const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    retries: 2,
    viewportWidth: 1920,
    viewportHeight: 1080

  },
});
