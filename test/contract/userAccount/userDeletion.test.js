const Joi = require('joi');
const pactum = require('pactum');
require('module-alias/register');
const { endpoints } = require('@helpers/config');
const {
    generateValidUserData
} = require('@data/user.data');
const {
    userCreationSuccess
} = require('@helpers/messageExpectations');
const {
    expectMessageSchema
} = require('@schema/generals/expectMessageSchema');

describe('API 12: - Contract - Gerenciamento de Contas - Validação de Cenários de Remoção', () => {

    let newUserFaker;
    let userEmail;
    let userPassword;
    let payload;

    before(()=>{
        newUserFaker = generateValidUserData()
        userEmail = newUserFaker.email
        userPassword = newUserFaker.password

        payload = {
            email: userEmail,
            password: userPassword
        }
    })

    it('[SetUp] Criar um novo registro de Usuário com sucesso', async () => {
        await pactum.spec()
            .post(endpoints.createUser)
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT-CONTRACT-001] Deve validar o schema de resposta para exclusão bem-sucedida', async () => {
        const response = await pactum.spec()
            .delete(endpoints.deleteUser)
            .withForm(payload)
            .expectStatus(200)

        Joi.assert(JSON.parse(response.body), expectMessageSchema)
    });
});