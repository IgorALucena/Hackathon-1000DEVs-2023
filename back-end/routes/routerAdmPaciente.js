const express = require('express');
const routerAdmPaciente = express.Router();
const { todosController, individualController, criarController, atualizarController } = require('../controllers/admPacienteRouter-controller');

// #swagger.name = 'admPacienteRouter-controller'
// #swagger.description = 'admPaciente controller.'
// #swagger.tags = ['admPaciente']

routerAdmPaciente.get('/', todosController);

routerAdmPaciente.get('/:id', individualController);

routerAdmPaciente.post('/', criarController /*  #swagger.parameters['admPaciente'] = {      
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

routerAdmPaciente.put('/:id', atualizarController);

module.exports = { routerAdmPaciente };