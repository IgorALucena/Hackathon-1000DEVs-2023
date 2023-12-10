const db = require('../models/db');

const anoExatoController = async (req, res) => {
    try {
        const { ano } = req.params;
        const anoExato = await db.consultarVacinasPorAno(ano);
        if (!anoExato || anoExato.length === 0) {
            return res.status(404).send('Nenhuma vacina encontrada para o ano fornecido');
        }
        res.json(anoExato);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas por ano');
    }
};

const anoAteController = async (req, res) => {
    try {
        const { ano } = req.params;
        const anoAte = await db.consultarPorAnoAte(ano);
        if (!anoAte || anoAte.length === 0) {
            return res.status(404).send('Nenhuma vacina encontrada até o ano fornecido');
        }
        res.json(anoAte);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas até o ano fornecido');
    }
};

const mesExatoController = async (req, res) => {
    try {
        const { mes } = req.params;
        const mesExato = await db.consultarVacinasPorMes(mes);
        if (!mesExato || mesExato.length === 0) {
            return res.status(404).send('Nenhuma vacina encontrada para o mês fornecido');
        }
        res.json(mesExato);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas por mês');
    }
};

const mesAteController = async (req, res) => {
    try {
        const { mes } = req.params;
        const mesAte = await db.consultarVacinasAteMesFornecido(mes);
        if (!mesAte || mesAte.length === 0) {
            return res.status(404).send('Nenhuma vacina encontrada até o mês fornecido');
        }
        res.json(mesAte);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas até o mês fornecido');
    }
};

module.exports = { anoExatoController, anoAteController, mesExatoController, mesAteController };