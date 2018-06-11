const axios = require('axios');
const https = require('https');
const env_config = require('../config/config');

module.exports = class ApiHelper {
  static async create() {
    const apiHelper = new ApiHelper(env_config);
    return apiHelper;
  }

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: env_config.baseURL,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  async login() {
    /**
     * Simple Login call implementation.
     * Change according to your need
     */
    const response = await this._axiosInstance.request({
      url: env_config.login_api,
      method: 'POST',
      data: { username: env_config.username, password: env_config.password }
    });
    return response;
  }
};
