const Joi = require('joi');

/**
 * Schema para validação de categorias de produtos por tipo de usuário
 */
const userTypeSchema = Joi.object({
  usertype: Joi.string()
    .required()
    .example('Men')
    .description('Tipo de usuário (ex: Women, Men, Kids)')
}).description('Objeto contendo o tipo de usuário');

const categorySchema = Joi.object({
  usertype: userTypeSchema
    .required()
    .description('Categoria do usuário'),
  
  category: Joi.string()
    .required()
    .example('Tops')
    .description('Subcategoria de produtos (ex: Tops, Dresses)')
})
.required()
.description('Schema completo para categorização de produtos');

module.exports = {
  categorySchema,
  userTypeSchema // Exportando também para possível reutilização
};