const pactum = require('pactum');
const config = require('./config.js');
const Joi = require('joi');

pactum.request.setBaseUrl(config.baseUrl);
module.exports = {
    pactum
  };