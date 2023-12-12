const express = require('express');
const routerCampanhaVacinacao = express.Router();
const {campanhaDataController, cadastroCampanhaController, editCampanhaController, cadastroVacinaCampanhaController, consultaCampanhaProtecaoController, deleteVacinaCampanhaController} = require('../controllers/campanhaVacinacao-controller');

routerCampanhaVacinacao.get('/campanhaData/', campanhaDataController
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Pesquisa campanha por data'
);

routerCampanhaVacinacao.post('/', cadastroCampanhaController 
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Cadastra Campanha de vacinação'
/*  #swagger.parameters['campanhaVacinacao'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_campanha: {
          type: "integer",          
        },
        descricao: {
          type: "string",
        },
        data_inicio: {
          type: "date",          
        },
        data_fim: {
          type: "date",
        },
      },
      required: ["id_campanha", "descricao", "data_inicio", "data_fim"]
    },
} */);

routerCampanhaVacinacao.post('/:id/:id1', cadastroVacinaCampanhaController 
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Cadastra vacina em campanha'
/*  #swagger.parameters['campanhaVacinacao'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_campanha: {
          type: "integer",          
        },
        vacina: {
          type: "string",
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
      required: ["id_campanha", "vacina", "sigla_vacina", "doenca_protecao", "dose", "id_rede"]
    },
} */);

routerCampanhaVacinacao.put('/:id', editCampanhaController
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Edita campanha'
/*  #swagger.parameters['campahaVacinacao'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      descricao: {
        type: "string",          
      },
      data_inicio: {
        type: "date"
      },
      data_fim: {
        type: "date",          
      },
    },
    required: ["descricao", "data_inicio", "data_fim"]
  },
} */
);

routerCampanhaVacinacao.delete('/:id', deleteVacinaCampanhaController
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Deleta vacina campanha'
);

routerCampanhaVacinacao.get('/campanhaProtecao/:pc', consultaCampanhaProtecaoController
// #swagger.tags = ['Campanha de Vacinação']
// #swagger.name = 'controller-campanha-vacinação'
// #swagger.description = 'Consulta campanha proteção'
);

module.exports = {routerCampanhaVacinacao};

