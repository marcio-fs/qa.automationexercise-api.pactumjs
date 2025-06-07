const pactum = require('pactum');
const { endpoints } = require('@helpers/config');
const {
    generateValidUserData
} = require('@data/user.data');
const {
    userCreationSuccess,
    userCreationFailedEmailExists
} = require('@helpers/messageExpectations');
const { end } = require('pactum/src/exports/reporter.js');

describe('API 11: Gerenciamento de Contas - Validação de Cenários de Criação', () => {
    let newUserFaker;
    let secondUserFaker;

    // Configuração do ambiente de teste
    before(() => {
        // Gera dados principais do usuário
        newUserFaker = generateValidUserData();
        
        // Cria usuário duplicado com mesmo e-mail (para testes de conflito)
        secondUserFaker = {
          ...generateValidUserData(),
          email: newUserFaker.email,
          name: '- Conflict Scenario: Duplicate Test User -'
        };
      });

    it('[CT001] Deve retornar sucesso ao criar usuário com dados válidos', async () => {
        await pactum.spec()
            .post(endpoints.createUser)
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT002] Deve retornar conflito ao tentar cadastrar e-mail duplicado', async () => {
        await pactum.spec()
            .post(endpoints.createUser)
            .withForm(secondUserFaker)
            .expectStatus(200)
            .expectJsonLike(userCreationFailedEmailExists)
    });

    it('[CT003] Deve retornar erro quando faltam campos obrigatórios', async() => {
        await pactum.spec()
        .post('/createAccount')
        .withJson({
          email: newUserFaker.email // Faltam name e password
        })
        .expectStatus(200)
        .expectJsonLike({
            responseCode: 400, 
        });

    });

    it('[CT004] Deve retornar erro ao enviar dados inválidos',async () => {
        await pactum.spec()
        .post('/createAccount')
        .withJson({
          name: 'A',
          email: 'email-invalido',
          password: '123' 
        })
        .expectStatus(200) //Apis devem retornar 200, mesmo com erro de validação
        .expectJsonLike({
            responseCode: 400,
            message: 'Bad request, name parameter is missing in POST request.'// Implementação diretamente no endpoint e alternativa em visa as soluçoes anteriores.
        });

    });

});