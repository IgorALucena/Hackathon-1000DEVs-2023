const express = require('express');
const routerConsultaVacina = express.Router();
const {consultaVacinaController, consultaTodasVacinasController, consultaIndividualVacinasController} = require('../controllers/consultaVacina-controller');

routerConsultaVacina.get('/', consultaVacinaController
// #swagger.tags = ['Consulta de Vacinas']
// #swagger.name = 'controller-consulta-Vacina'
// #swagger.description = 'Consulta todas vacinas'
);

routerConsultaVacina.get('/:id', consultaIndividualVacinasController
// #swagger.tags = ['Consulta de Vacinas']
// #swagger.name = 'consulta-Vacina-controller'
// #swagger.description = 'Consulta de vacina individual'
);

module.exports = {routerConsultaVacina};