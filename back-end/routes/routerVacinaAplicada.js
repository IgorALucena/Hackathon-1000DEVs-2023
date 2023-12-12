const express = require('express');
const routerConsultaVacinaAplicada = express.Router();
const {buscaVacinaAplicadas, cadastraVacinaAplicada, deletaVacinaAplicada} = require('../controllers/vacinaAplicada-controller');

routerConsultaVacinaAplicada.get('/:id', buscaVacinaAplicadas
// #swagger.tags = ['Vacina Aplicada']
// #swagger.name = 'controller-vacina-aplicada-individual'
// #swagger.description = 'Consulta de vacina aplicada individualmente'
);

routerConsultaVacinaAplicada.post('/', cadastraVacinaAplicada 
// #swagger.tags = ['Vacina Aplicada']
// #swagger.name = 'controller-vacina-aplicada'
// #swagger.description = 'Cadastro de vacina aplicada'
/*  #swagger.parameters['cadastraVacinaAplicada'] = {      
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

routerConsultaVacinaAplicada.delete('/:id/:id1', deletaVacinaAplicada
// #swagger.tags = ['Vacina Aplicada']
// #swagger.name = 'controller-vacina-aplicada'
// #swagger.description = 'Deleta vacina aplicada'
);

module.exports = {routerConsultaVacinaAplicada};

