const express = require('express');
const routerConsultaVacinaProtecao = express.Router();
const {consultaVacinaProtecaoController} = require('../controllers/consultaVacinaProtecao-controller');

// #swagger.name = 'consultaVacinaProtecao-controller'
// #swagger.description = 'consultaVacinaProtecao controller.'
// #swagger.tags = ['consultaVacinaProtecao']

routerConsultaVacinaProtecao.get('/', consultaVacinaProtecaoController);

module.exports = {routerConsultaVacinaProtecao};

