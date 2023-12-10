const express = require('express');
const routerCadastroVacina = express.Router();
const {cadastroVacinaController, edicaoVacinaController, cadastroAplicacaoAnoController, removerAplicacaoAnoController, cadastroAplicacaoMesController, removerAplicacaoMesController } = require('../controllers/cadastroVacina-controller')

// #swagger.name = 'cadastroVacina-controller'
// #swagger.description = 'cadastroVacina controller.'
// #swagger.tags = ['cadastroVacina']

routerCadastroVacina.post('/', cadastroVacinaController /*  #swagger.parameters['cadastroVacina'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_paciente: {
          type: "integer",          
        },
        id_vacina: {
          type: "integer",
        },
        data_aplicacao: {
          type: "date",          
        },
      },
      required: ["id_paciente", "id_vacina", "data_aplicacao",]
    },
} */);

routerCadastroVacina.put('/:id', edicaoVacinaController);

routerCadastroVacina.post('/cadastroAplicacaoAno', cadastroAplicacaoAnoController /*  #swagger.parameters['cadastroAplicacaoAno'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_paciente: {
          type: "integer",          
        },
        id_vacina: {
          type: "integer",
        },
        qtd_ano_inicial: {
          type: "integer",          
        },
        qtd_ano_final: {
          type: "integer",
        },
        desc_ano: {
          type: "string",
        }

      },
      required: ["id_paciente", "id_vacina", "qtd_ano_inicial", "qtd_ano_final", "desc_ano"]
    },
} */);

routerCadastroVacina.delete('/revomerAplicacaoAno/:id', removerAplicacaoAnoController);

routerCadastroVacina.post('/cadastroAplicacaoMes', cadastroAplicacaoMesController /*  #swagger.parameters['cadastroAplicacaoMes'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_paciente: {
          type: "integer",          
        },
        id_vacina: {
          type: "integer",
        },
        qtd_ano_inicial: {
          type: "integer",          
        },
        qtd_ano_final: {
          type: "integer",
        },
        desc_meses: {
          type: "string",
        }

      },
      required: ["id_paciente", "id_vacina", "qtd_ano_inicial", "qtd_ano_final", "desc_meses"]
    },
} */);

routerCadastroVacina.delete('/removerAplicacaoMes/:id', removerAplicacaoMesController);


module.exports = {routerCadastroVacina};