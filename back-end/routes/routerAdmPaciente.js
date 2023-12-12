const express = require('express');
const routerAdmPaciente = express.Router();
const { todosController, individualController, criarController, atualizarController } = require('../controllers/admPacienteRouter-controller');

routerAdmPaciente.get('/', todosController 
// #swagger.name = 'adm-paciente-consulta-controller'
// #swagger.description = 'Rota voltada para consultas de pacientes.'
//#swagger.tags = ['ADM Pacientes']
);

routerAdmPaciente.get('/:id', individualController
// #swagger.name = 'adm-paciente-consulta-individual-controller'
// #swagger.description = 'Rota voltada para consulta de paciente individual.'
//#swagger.tags = ['ADM Pacientes']
);

routerAdmPaciente.post('/', criarController 
// #swagger.tags = ['ADM Pacientes']
// #swagger.name = 'adm-cria-paciente-controller'
// #swagger.description = 'Rota voltada para criação de paciente.'
/*  #swagger.parameters['admPaciente'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      id_paciente: {
        type: "integer",          
      },
      nome: {
        type: "string"
      },
      data_nascimento: {
        type: "date",          
      },
    },
    required: ["id_paciente", "nome", "data_nascimento",]
  },
} */);

routerAdmPaciente.put('/:id', atualizarController
// #swagger.tags = ['ADM Pacientes']
// #swagger.name = 'adm-edita-paciente-controller'
// #swagger.description = 'Rota voltada para edição de paciente.'
/*  #swagger.parameters['admPaciente'] = {      
  in: 'body',
  type: 'object',
  required: true,
  '@schema': {
    properties: {
      id_paciente: {
        type: "integer",          
      },
      nome: {
        type: "string"
      },
      data_nascimento: {
        type: "date",          
      },
    },
    required: ["id_paciente", "nome", "data_nascimento",]
  },
} */
);

module.exports = { routerAdmPaciente };