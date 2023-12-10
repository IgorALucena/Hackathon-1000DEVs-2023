const db = require('../models/db');

const consultaVacinaTomadaController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.pesquisarVacinasAplicadas(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas tomadas');
    }
};

const consultaVacinaPendenteController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.pesquisarVacinasPendentes(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas pendentes');
    }
};

module.exports = { consultaVacinaTomadaController, consultaVacinaPendenteController };