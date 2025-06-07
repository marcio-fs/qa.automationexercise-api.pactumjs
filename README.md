# 🚀 Projeto de Automação de Testes de API com PactumJS 

[![CI Pipeline](https://github.com/pricaimiTech/qa.automationexercise-api.pactumjs/actions/workflows/ci.yml/badge.svg)](https://github.com/pricaimiTech/qa.automationexercise-api.pactumjs/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

Este projeto disponibiliza uma suíte abrangente de testes automatizados para a API do Automation Exercise, empregando tecnologias modernas como PactumJS, Mocha e Joi para assegurar qualidade e confiabilidade.

---

## 🔍 Visão Geral do Projeto

### Objetivos Principais
- ✅ Criar testes de API robustos e eficientes  
- ✅ Garantir a qualidade funcional e contratual da API  
- ✅ Implementar boas práticas de automação de testes  
- ✅ Fornecer relatórios detalhados de execução  

### Documentação da API
A API oficial está documentada em:  
📚 [https://automationexercise.com/api_testing](https://automationexercise.com/api_testing)

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **Node.js** | Ambiente de execução JavaScript |
| **PactumJS** | Framework de teste de API |
| **Mocha** | Framework de execução de testes |
| **Joi** | Validação de schemas JSON |
| **Mochawesome** | Geração de relatórios HTML |

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- Node.js 16.x ou superior
- npm 8.x ou superior
- Git (para clonar o repositório)

### ⚙️ Instalação Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/marcio-fs/qa.automationexercise-api.pactumjs.git
   cd qa.automationexercise-api.pactumjs
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute os testes**:
   - Para executar todos os testes:
     ```bash
     npm run test:all
     ```
   - Para testes funcionais:
     ```bash
     npm run test:functional
     ```
   - Para testes de contrato:
     ```bash
     npm run test:contract
     ```

---


## 🧪 Estrutura dos Testes
## Project Structure
```
qa.automationexercise-api.pactumjs

├── helpers/   
├── test/ 
│ ├── contract/ 
│ ├── functional/
├── testData/
├── testSchemas/ 
│ ├── category/ 
│ ├── generals/ 
│ ├── product/ 
├── mochawesome-report
├── .gitignore 
├── package-lock.json 
├── package.json
└── README.md # Este arquivo
```
### Exemplo de Caso de Teste
**[CT004] Exclusão de Conta - Deve retornar erro quando o usuário não existe**

- **Ação**: Exclusão de conta (DELETE /deleteAccount)  
- **Cenário**: Usuário inexistente  
- **Resultado esperado**: Status erro (não encontrado)  

Este padrão utiliza descrições claras e rastreáveis.

---

## 📊 Relatórios de Testes
*   **Executar todos os testes e gerar o relatório HTML:**
    ```bash
    npm run test:report
    ```
    Após a execução, o relatório HTML estará disponível na pasta `mochawesome-report/`. Abra o arquivo `mochawesome.html` em um navegador para visualizar. E possível consultar o último relatório no github action

Os relatórios são gerados automaticamente após a execução dos testes e podem ser encontrados na pasta `/reports`. Eles incluem detalhes como:
- Casos de teste executados
- Resultados (sucesso ou falha)
- Logs detalhados para análise


---

**Nota:** Este projeto é apenas para fins de avaliação técnica.
