const db = require('../models/db');

const consultaVacinaController = async (req, res) => {
    try {
        const vacinas = await db.todasVacinas();
        res.json(vacinas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas');
    }
};

const consultaIndividualVacinasController = async (req, res) => {
    try {
        const { id } = req.params;
        const vacina = await db.vacinaIndividual(id);
        if (!vacina) {
            return res.status(404).send('Vacina não encontrada');
        }
        res.json(vacina);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacina individual');
    }
};

module.exports = { consultaVacinaController, consultaIndividualVacinasController };