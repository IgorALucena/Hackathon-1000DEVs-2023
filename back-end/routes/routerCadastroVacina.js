const express = require('express');
const routerCadastroVacina = express.Router();
const {cadastroVacinaController, edicaoVacinaController, cadastroAplicacaoAnoController, removerAplicacaoAnoController, cadastroAplicacaoMesController, removerAplicacaoMesController } = require('../controllers/cadastroVacina-controller')

routerCadastroVacina.post('/', cadastroVacinaController);

routerCadastroVacina.put('/:id', edicaoVacinaController);

routerCadastroVacina.post('/cadastroAplicacaoAno', cadastroAplicacaoAnoController);

routerCadastroVacina.delete('/revomerAplicacaoAno/:id', removerAplicacaoAnoController);

routerCadastroVacina.post('/cadastroAplicacaoMes', cadastroAplicacaoMesController);

routerCadastroVacina.delete('/removerAplicacaoMes/:id', removerAplicacaoMesController);


module.exports = {routerCadastroVacina};