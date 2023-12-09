const express = require('express');
const server = express();
const {routerAdmPaciente} = require('./routes/routerAdmPaciente');
const {routerConsultaVacina} = require('./routes/routerConsultaVacina');
const {routerConsultaVacinaIdade} = require('./routes/routerConsultaVacinaIdade')
const {routerConsultaVacinaAplicada} = require('./routes/routerVacinaAplicada');
const {rootRouteController} = require('./controllers/root-router-controller');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

server.use(cors());

server.use(express.json());

server.get('/', rootRouteController);

server.use('/routerAdmPaciente', routerAdmPaciente);

server.use('/routerConsultaVacina', routerConsultaVacina);

server.use('/routerConsultaVacinaIdade', routerConsultaVacinaIdade);

server.use('/routerVacinaAplicada', routerConsultaVacinaAplicada);

server.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});