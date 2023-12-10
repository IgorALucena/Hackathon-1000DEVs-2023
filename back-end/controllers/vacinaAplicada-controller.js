const db = require('../models/db');

const buscaVacinaAplicadas = async (req, res) => {
    try {
        const { id } = req.params;
        const vacinasAplicadas = await db.vacinasAplicadas(id);
        if (!vacinasAplicadas || vacinasAplicadas.length === 0) {
            return res.status(404).send('Nenhuma vacina aplicada encontrada para o paciente');
        }
        res.json(vacinasAplicadas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar vacinas aplicadas');
    }
};

const cadastraVacinaAplicada = async (req, res) => {
    try {
        const dadosVacina = req.body;
        const vacinaCadastrada = await db.cadastroVacina(dadosVacina);
        if (!vacinaCadastrada) {
            return res.status(400).send('Dados inválidos para cadastro de vacina');
        }
        res.status(201).json(vacinaCadastrada);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar vacina aplicada');
    }
};

const deletaVacinaAplicada = async (req, res) => {
    try {
        const { id, id1: idVacina } = req.params;
        const vacinaDeletada = await db.deletarVacinaAplicada(id, idVacina);
        if (!vacinaDeletada) {
            return res.status(404).send('Vacina aplicada não encontrada para deletar');
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar vacina aplicada');
    }
};

module.exports = { buscaVacinaAplicadas, cadastraVacinaAplicada, deletaVacinaAplicada };