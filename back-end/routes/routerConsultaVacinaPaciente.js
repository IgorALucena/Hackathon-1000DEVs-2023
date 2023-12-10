const express = require('express');
const routerConsultaVacinaPaciente = express.Router();
const {consultaVacinaTomadaController,consultaVacinaPendenteController} = require('../controllers/consultaVacinaPaciente-controller');

routerConsultaVacinaPaciente.get('/tomada/:id', consultaVacinaTomadaController);

routerConsultaVacinaPaciente.get('/pendentes/:id', consultaVacinaPendenteController);

module.exports = {routerConsultaVacinaPaciente};


