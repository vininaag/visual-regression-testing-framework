var env_config = require('../config/config');
module.exports = [
  {
    label: 'Githum SignIn Page',
    url: env_config.baseURL + '/login',
    readySelector: "div[role='main']",
    selectors: ['div[role="main"]']
  }
];
