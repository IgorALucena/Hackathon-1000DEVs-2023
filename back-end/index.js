const express = require('express');
const server = express();
const cors = require('cors');
const {routerAdmPaciente} = require('./routes/routerAdmPaciente');
const {routerConsultaVacina} = require('./routes/routerConsultaVacina');
const {routerConsultaVacinaIdade} = require('./routes/routerConsultaVacinaIdade')
const {routerConsultaVacinaAplicada} = require('./routes/routerVacinaAplicada');
const {routerConsultaVacinaProtecao} = require('./routes/routerConsultaVacinaProtecao');
const {routerConsultaVacinaPaciente} = require('./routes/routerConsultaVacinaPaciente');
const {routerCadastroVacina} = require('./routes/routerCadastroVacina')
const {routerCampanhaVacinacao} = require('./routes/routerCampanhaVacinacao');
const {rootRouteController} = require('./controllers/root-router-controller');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

server.use(cors({
    allowedHeaders: ['Content-Type', 'api_key', 'Authorization']
  }));

server.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;

server.use(express.json());

server.get('/', rootRouteController // #swagger.name = 'rota-raiz'
// #swagger.description = 'boas-vindas.'
// #swagger.tags = ['Raiz']
);

server.use('/routerAdmPaciente', routerAdmPaciente);

server.use('/routerConsultaVacina', routerConsultaVacina);

server.use('/routerConsultaVacinaIdade', routerConsultaVacinaIdade);

server.use('/routerConsultaVacinaProtecao', routerConsultaVacinaProtecao);

server.use('/routerVacinaAplicada', routerConsultaVacinaAplicada);


server.use('/routerConsultaVacinaPaciente', routerConsultaVacinaPaciente);

server.use('/routerCampanhaVacinacao', routerCampanhaVacinacao);

server.use('/routerCadastroVacina', routerCadastroVacina);

server.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});