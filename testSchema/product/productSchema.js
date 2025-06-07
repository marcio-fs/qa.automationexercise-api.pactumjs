const Joi = require('joi');
const { categorySchema } = require('../category/categorySchema');

// Schemas de Validação
const productSchema = Joi.object({
  id: Joi.number().integer().positive().required()
    .example(1)
    .description('ID numérico do produto'),
    
  name: Joi.string().required()
    .example('Blue Top')
    .description('Nome do produto'),
    
  price: Joi.string().pattern(/^Rs\.\s\d+$/, 'formato monetário')
    .required()
    .example('Rs. 500')
    .description('Preço no formato "Rs. XXXX"'),
    
  brand: Joi.string().optional()
    .allow(null, '')
    .example('Polo')
    .description('Marca do produto (opcional)'),
    
  category: categorySchema
    .description('Categoria do produto')
})
.description('Estrutura de dados de um produto');

const allProductsListResponseSchema = Joi.object({
  responseCode: Joi.number().valid(200).required()
    .description('Código de resposta HTTP'),
    
  products: Joi.array().items(productSchema).required()
    .description('Lista de produtos')
})
.description('Resposta da API para listagem de produtos');

module.exports = {
  productSchema,
  allProductsListResponseSchema
};