const express = require('express');
const routerCampanhaVacinacao = express.Router();
const {campanhaDataController, cadastroCampanhaController, editCampanhaController, cadastroVacinaCampanhaController, consultaCampanhaProtecaoController, deleteVacinaCampanhaController} = require('../controllers/campanhaVacinacao-controller');

// #swagger.name = 'campanhaVacinacao-controller'
// #swagger.description = 'campanhaVacinacao controller.'
// #swagger.tags = ['campanhaVacinacao']

routerCampanhaVacinacao.get('/campanhaData/', campanhaDataController); // /campanhaData?data=1/1/23

routerCampanhaVacinacao.post('/', cadastroCampanhaController /*  #swagger.parameters['CampanhaVacinacao'] = {      
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

routerCampanhaVacinacao.post('/:id/:id1', cadastroVacinaCampanhaController /*  #swagger.parameters['cadastroVacina'] = {      
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

routerCampanhaVacinacao.put('/:id', editCampanhaController);

routerCampanhaVacinacao.delete('/:id', deleteVacinaCampanhaController);

routerCampanhaVacinacao.get('/campanhaProtecao/:pc', consultaCampanhaProtecaoController);

module.exports = {routerCampanhaVacinacao};

