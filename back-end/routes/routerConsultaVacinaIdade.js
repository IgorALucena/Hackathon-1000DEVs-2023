const express = require('express');
const routerConsultaVacinaIdade = express.Router();
const {anoExatoController, anoAteController, mesExatoController, mesAteController} = require('../controllers/consultaVacinaIdade-controller');

routerConsultaVacinaIdade.get('/anoExato/:ano', anoExatoController);

routerConsultaVacinaIdade.get('/anoAte/:ano', anoAteController);

routerConsultaVacinaIdade.get('/mesExato/:mes', mesExatoController);

routerConsultaVacinaIdade.get('/mesAte/:mes', mesAteController);

module.exports={routerConsultaVacinaIdade};