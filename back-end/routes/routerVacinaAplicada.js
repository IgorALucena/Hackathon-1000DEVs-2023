const express = require('express');
const routerConsultaVacinaAplicada = express.Router();
const {buscaVacinaAplicadas, cadastraVacinaAplicada, deletaVacinaAplicada} = require('../controllers/vacinaAplicada-controller');

// #swagger.name = 'vacinaAplicada-controller'
// #swagger.description = 'vacinaAplicada controller.'
// #swagger.tags = ['vacinaAplicada']

routerConsultaVacinaAplicada.get('/:id', buscaVacinaAplicadas);

routerConsultaVacinaAplicada.post('/', cadastraVacinaAplicada /*  #swagger.parameters['cadastraVacinaAplicada'] = {      
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
      required: ["id_paciente", "id_vacina", "data_aplicacao"]
    },
} */);

routerConsultaVacinaAplicada.delete('/:id/:id1', deletaVacinaAplicada);

module.exports = {routerConsultaVacinaAplicada};

