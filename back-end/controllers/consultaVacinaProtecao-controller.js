const db = require('../models/db');

const consultaVacinaProtecaoController = async (req, res) => {
    try {
        const doenca_protecao = req.params.protecao;
        const vacinas = await db.pesquisarVacinaPorProtecao(doenca_protecao);
        if (!vacinas || vacinas.length === 0) {
            return res.status(404).send('Nenhuma vacina encontrada para a proteção informada');
        }
        res.json(vacinas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar vacinas por proteção');
    }
};

module.exports = { consultaVacinaProtecaoController };