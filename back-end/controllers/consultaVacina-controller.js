const db = require('../models/db');

const consultaVacinaController = async (req, res) => {
    try {
        const vacinas = await db.todasVacinas();
        res.json(vacinas);
        console.log(vacinas);
    }
    catch (err) {
        console.log(err);
    }
}

const consultaIndividualVacinasController = async (req, res) => {
    try {
        const id = req.params.id
        const vacinas = await db.vacinaIndividual(id);
        res.json(vacinas);
        console.log(vacinas);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { consultaVacinaController, consultaIndividualVacinasController }