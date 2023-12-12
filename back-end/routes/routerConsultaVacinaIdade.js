const express = require('express');
const routerConsultaVacinaIdade = express.Router();
const {anoExatoController, anoAteController, mesExatoController, mesAteController} = require('../controllers/consultaVacinaIdade-controller');

routerConsultaVacinaIdade.get('/anoExato/:ano', anoExatoController
// #swagger.tags = ['Vacina por Idade']
// #swagger.name = 'controller-consulta-vacina-ano'
// #swagger.description = 'Consulta vacina ano exato'
);

routerConsultaVacinaIdade.get('/anoAte/:ano', anoAteController
// #swagger.tags = ['Vacina por Idade']
// #swagger.name = 'controller-consulta-vacina-ano'
// #swagger.description = 'Consulta vacina a ser tomada até o ano informado'
);

routerConsultaVacinaIdade.get('/mesExato/:mes', mesExatoController
// #swagger.tags = ['Vacina por Idade']
// #swagger.name = 'controller-consulta-vacina-mes'
// #swagger.description = 'Consulta vacina mês exato'
);

routerConsultaVacinaIdade.get('/mesAte/:mes', mesAteController
// #swagger.tags = ['Vacina por Idade']
// #swagger.name = 'controller-consulta-vacina-mes'
// #swagger.description = 'Consulta vacina a ser tomada até o mês informado'
);

module.exports={routerConsultaVacinaIdade};