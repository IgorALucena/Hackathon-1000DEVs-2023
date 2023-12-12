const express = require('express');
const routerCadastroVacina = express.Router();
const {cadastroVacinaController, edicaoVacinaController, cadastroAplicacaoAnoController, removerAplicacaoAnoController, cadastroAplicacaoMesController, removerAplicacaoMesController } = require('../controllers/cadastroVacina-controller')

routerCadastroVacina.post('/', cadastroVacinaController 
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'cadastro-vacina-controller'
// #swagger.description = 'Cadastra vacina'
/*  #swagger.parameters['cadastroVacina'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      id_vacina: {
        type: "integer",          
      },
      nome_vacina: {
        type: "string"
      },
      sigla_vacina: {
        type: "string",          
      },
      doenca_protecao: {
        type: "string",          
      },
      dose: {
        type: "string",          
      },
      id_rede: {
        type: "integer",          
      },
    },
    required: ["id_vacina", "nome_vacina", "sigla_vacina", "doenca_protecao", "dose", "id_rede"]
  },
} */
);

routerCadastroVacina.put('/:id', edicaoVacinaController 
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'edicao-vacina-controller'
// #swagger.description = 'Edita vacina'
/*  #swagger.parameters['cadastroVacina'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      nome_vacina: {
        type: "string",          
      },
      sigla_vacina: {
        type: "string"
      },
      doenca_protecao: {
        type: "string",          
      },
      dose: {
        type: "string",          
      },
      id_rede: {
        type: "integer",
      },
    },
    required: ["nome_vacina", "sigla_vacina", "doenca_protecao", "dose", "id_rede"]
  },
} */
);

routerCadastroVacina.post('/cadastroAplicacaoAno', cadastroAplicacaoAnoController
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'cadastro-aplicacao-ano-controller'
// #swagger.description = 'Cadastra aplicação ano'
/*  #swagger.parameters['cadastroVacina'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      id: {
        type: "integer",          
      },
      id_vacina: {
        type: "integer"
      },
      qtd_ano_inicial: {
        type: "integer",          
      },
      qtd_ano_final: {
        type: "integer",          
      },
      desc_ano: {
        type: "string",
      },
    },
    required: ["id", "id_vacina", "qtd_ano_inicial", "qtd_ano_final", "desc_ano"]
  },
} */
);

routerCadastroVacina.delete('/revomerAplicacaoAno/:id', removerAplicacaoAnoController
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'remover-aplicacao-ano-controller'
// #swagger.description = 'Deleta cadastro de aplicação ano'
);

routerCadastroVacina.post('/cadastroAplicacaoMes', cadastroAplicacaoMesController
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'cadastro-aplicacao-mes-controller'
// #swagger.description = 'Cadastra aplicação mês'
/*  #swagger.parameters['cadastroVacina'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      id: {
        type: "integer",          
      },
      id_vacina: {
        type: "integer"
      },
      qtd_meses_inicial: {
        type: "integer",          
      },
      qtd_meses_final: {
        type: "integer",          
      },
      desc_meses: {
        type: "string",
      },
    },
    required: ["id_paciente", "nome", "data_nascimento",]
  },
} */
);

routerCadastroVacina.delete('/removerAplicacaoMes/:id', removerAplicacaoMesController
// #swagger.tags = ['Cadastro de Vacina']
// #swagger.name = 'remover-aplicacao-mes-controller'
// #swagger.description = 'Deleta aplicação mês'
);

module.exports = {routerCadastroVacina};