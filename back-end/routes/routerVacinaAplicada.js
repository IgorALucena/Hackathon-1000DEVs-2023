const express = require('express');
const routerConsultaVacinaAplicada = express.Router();
const {buscaVacinaAplicadas, cadastraVacinaAplicada, deletaVacinaAplicada} = require('../controllers/vacinaAplicada-controller');

routerConsultaVacinaAplicada.get('/:id', buscaVacinaAplicadas);

routerConsultaVacinaAplicada.post('/', cadastraVacinaAplicada);

routerConsultaVacinaAplicada.delete('/:id/:id1', deletaVacinaAplicada);

module.exports = {routerConsultaVacinaAplicada};

