const express = require('express');
const routerConsultaVacina = express.Router();
const {consultaVacinaController, consultaTodasVacinasController, consultaIndividualVacinasController} = require('../controllers/consultaVacina-controller');

routerConsultaVacina.get('/', consultaVacinaController);

routerConsultaVacina.get('/:id', consultaIndividualVacinasController);

module.exports = {routerConsultaVacina};