/**
 * - Use this file if your URL needs a login to perform first.
 * - This file is used to generate the cookie.
 * - The Cookie will be generated only once and used for all tests.
 * - The Cookied should be returned from getCookie function
 * - You can use the _apihelper object
 */

const ApiHelper = require('./api-helper');
const env_config = require('../config/config');
module.exports = class CookieUtil {
  constructor() {
    //Use below variables if needed during cookie generation/ modification inside getCookie() function
    let domain = env_config.baseURL
      .replace('https://', '')
      .replace('http://', '');
    this._config = Object.assign({}, env_config, { domain });
    this.validity = new Date();
    this.validity = this.validity.setHours(this.validity.getHours() + 24);
  }
  async getCookie() {
    this.cookies = [];
    this._apiHelper = await ApiHelper.create(this._config);
    /**
     * Here
     * Implement your login functionality here or api-helper.js login function
     *  or
     * Cookie Generation mechanism
     */

    //this.cookies = this._apiHelper.login();
    return this.cookies;
  }
};
