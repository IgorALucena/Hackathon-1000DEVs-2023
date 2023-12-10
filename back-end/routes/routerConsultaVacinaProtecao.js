const express = require('express');
const routerConsultaVacinaProtecao = express.Router();
const {consultaVacinaProtecaoController} = require('../controllers/consultaVacinaProtecao-controller');

routerConsultaVacinaProtecao.get('/', consultaVacinaProtecaoController);

module.exports = {routerConsultaVacinaProtecao};

