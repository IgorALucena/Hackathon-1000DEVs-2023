const express = require('express');
const routerConsultaVacina = express.Router();
const {consultaVacinaController, consultaTodasVacinasController, consultaIndividualVacinasController} = require('../controllers/consultaVacina-controller');

// #swagger.name = 'consultaVacina-controller'
// #swagger.description = 'consultaVacina controller.'
// #swagger.tags = ['consultaVacina']

routerConsultaVacina.get('/', consultaVacinaController);

routerConsultaVacina.get('/:id', consultaIndividualVacinasController);

module.exports = {routerConsultaVacina};