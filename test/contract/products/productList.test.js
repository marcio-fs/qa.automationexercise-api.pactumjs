const Joi = require('joi');
require('module-alias/register');
const { pactum } = require('@helpers/utils');
const { endpoints } = require('@helpers/config'); // modelo com alias facilitando a manutenção dos endpoints

const {
    allProductsListResponseSchema
} = require('../../../testSchema/product/productSchema') // modelo sem alias, visando manunabilidade do código pode gerar confusão
    
describe('API 1: - Contract -Gerenciamento de Produtos - Validação da Listagem Geral', () => {

    it('[CT-CONTRACT-001] Deve retornar o schema correto para a listagem completa de produtos', async () => {
        const response = await pactum
            .spec()
            .get(endpoints.allProducts)
            .expectStatus(200);
        Joi.assert(JSON.parse(response.body), allProductsListResponseSchema)
    });
});
        
