const express = require('express');
const routerConsultaVacinaPaciente = express.Router();
const {consultaVacinaTomadaController,consultaVacinaPendenteController} = require('../controllers/consultaVacinaPaciente-controller');

routerConsultaVacinaPaciente.get('/tomada/:id', consultaVacinaTomadaController
// #swagger.tags = ['Vacina por Paciente']
// #swagger.name = 'controller-consulta-vacina-tomada-paciente'
// #swagger.description = 'Consulta vacina tomada por paciente'
);

routerConsultaVacinaPaciente.get('/pendentes/:id', consultaVacinaPendenteController
// #swagger.tags = ['Vacina por Paciente']
// #swagger.name = 'controller-consulta-vacina-pendente-paciente'
// #swagger.description = 'Consulta vacina pendente por paciente'
);

module.exports = {routerConsultaVacinaPaciente};


