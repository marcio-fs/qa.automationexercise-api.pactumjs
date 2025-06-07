const pactum = require('pactum');
require('module-alias/register');
const { endpoints } = require('@helpers/config');
const {
    generateValidUserData
} = require('@data/user.data');
const {
    userCreationSuccess,
    userDeletionSuccess,
    userCreationFailedEmailParam,
    userDeleteErrorNotFound,
    loginErrorUserNotFound
} = require('@helpers/messageExpectations');

describe('API 12: Gerenciamento de Contas - Validação de Cenários de Remoção', () => {
    let newUserFaker;
    let userEmail;
    let userPassword;
    let payload;

    before(() => {
        newUserFaker = generateValidUserData()
        userEmail = newUserFaker.email
        userPassword = newUserFaker.password

        payload = {
            email: userEmail,
            password: userPassword
        }
    })

    it('[SetUp] Criação de novo Usuário realizada com sucesso', async () => {
        await pactum.spec()
            .post(endpoints.createUser)
            .withForm(newUserFaker)
            .expectStatus(200)
            .expectJson('responseCode', userCreationSuccess.responseCode)
            .expectJson('message', userCreationSuccess.message)

    });

    it('[CT001] Exclusão de Conta - Deve retornar sucesso ao remover usuário válido', async () => {
        if (!userEmail || !userPassword) {
            throw new Error('É necessária a criação de um usuário para este teste; o SetUp não foi executado.');
        }
        await pactum.spec()
            .delete('/deleteAccount')
            .withForm(payload)
            .expectStatus(200)
            .expectJsonLike(userDeletionSuccess);
    });

    it('[CT002] Login - Deve retornar erro quando tentar acessar com conta removida', async () => {
        if (!userEmail || !userPassword) {
            throw new Error('É necessária a criação de um usuário para este teste; o SetUp não foi executado.');
        }

        await pactum.spec()
            .post('/verifyLogin')
            .withForm(payload)
            .expectStatus(200)
            .expectJsonLike(loginErrorUserNotFound);
    });

    it('[CT003] Exclusão de Conta - Deve retornar erro quando credenciais estão incorretas', async () => {
        const testData = {
          email: 'incorrect@email.com',
          password: 'wrongpassword'
        };
    
        const response = await pactum.spec()
          .delete('/deleteAccount')
          .withBody(testData) // Outra forma de enviar os dados
          .expectStatus(200)
          .expectJsonLike(userCreationFailedEmailParam);
    
      });

    it('[CT004] Exclusão de Conta - Deve retornar erro quando o usuário não existe', async () => {
        const nonExistentAccount = {
            email: 'nonexistent@user.com',
            password: 'randompass123'
          };
      
          const response = await pactum.spec()
            .delete('/deleteAccount')
            .withBody(nonExistentAccount)
            .expectStatus(200)
            .expectJsonLike(userDeleteErrorNotFound);
            //.inspect(); // exibição do corpo da resposta para depuração

    });

});