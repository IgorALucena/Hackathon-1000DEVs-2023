const express = require('express');
const routerConsultaVacinaProtecao = express.Router();
const {consultaVacinaProtecaoController} = require('../controllers/consultaVacinaProtecao-controller');

routerConsultaVacinaProtecao.get('/:protecao', consultaVacinaProtecaoController
// #swagger.tags = ['Vacina por Proteção']
// #swagger.name = 'controller-consulta-vacina-protecao'
// #swagger.description = 'Consulta vacina por proteção'
);

module.exports = {routerConsultaVacinaProtecao};

