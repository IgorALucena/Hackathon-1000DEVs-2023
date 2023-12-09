const express = require('express');
const routerAdmPaciente = express.Router();
const {todosController, individualController, criarController, atualizarController} = require('../controllers/admPacienteRouter-controller');

routerAdmPaciente.get('/', todosController);

routerAdmPaciente.get('/:id', individualController);

routerAdmPaciente.post('/', criarController);

routerAdmPaciente.put('/:id', atualizarController);

module.exports = {routerAdmPaciente};