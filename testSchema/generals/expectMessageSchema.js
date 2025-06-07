const Joi = require('joi');

/**
 * Schema para respostas de sucesso com mensagem padrão
 * @constant {Joi.ObjectSchema} expectMessageSchema
 */
const expectMessageSchema = Joi.object({
  responseCode: Joi.number()
    .valid(200)
    .required()
    .description('Código de resposta HTTP 200 (Sucesso)'),
    
  message: Joi.string()
    .valid('Account deleted!')
    .required()
    .description('Mensagem de confirmação padrão')
})
.required()
.description('Modelo padrão para respostas de sucesso com mensagem');

module.exports = {
  expectMessageSchema
};