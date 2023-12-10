const express = require('express');
const routerCampanhaVacinacao = express.Router();
const {campanhaDataController, cadastroCampanhaController, editCampanhaController, cadastroVacinaCampanhaController, consultaCampanhaProtecaoController, deleteVacinaCampanhaController} = require('../controllers/campanhaVacinacao-controller');

routerCampanhaVacinacao.get('/campanhaData/', campanhaDataController); // /campanhaData?data=1/1/23

routerCampanhaVacinacao.post('/', cadastroCampanhaController);

routerCampanhaVacinacao.post('/:id/:id1', cadastroVacinaCampanhaController);

routerCampanhaVacinacao.put('/:id', editCampanhaController);

routerCampanhaVacinacao.delete('/:id', deleteVacinaCampanhaController);

routerCampanhaVacinacao.get('/campanhaProtecao/:pc', consultaCampanhaProtecaoController);

module.exports = {routerCampanhaVacinacao};

