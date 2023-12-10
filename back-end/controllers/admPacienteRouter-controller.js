const { pesquisaPorPessoa, cadastrarNovaPessoa, pesquisarTodos, atualizaPessoa } = require('../models/db');

const todosController = async (req, res) => {
    try {
        const todos = await pesquisarTodos();
        res.send(todos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar todos os pacientes');
    }
};

const individualController = async (req, res) => {
    try {
        const { id } = req.params;
        const individuo = await pesquisaPorPessoa(id);
        if (!individuo) {
            return res.status(404).send('Paciente não encontrado');
        }
        res.send(individuo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar paciente');
    }
};

const criarController = async (req, res) => {
    try {
        const novoPaciente = req.body;
        const pacienteCadastrado = await cadastrarNovaPessoa(novoPaciente);
        res.status(201).json({
            status: "cadastrado",
            data: pacienteCadastrado
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao criar paciente');
    }
};

const atualizarController = async (req, res) => {
    try {
        const dadosAtualiza = req.body;
        const { id } = req.params;
        const pacienteAtualizado = await atualizaPessoa(dadosAtualiza, id);
        if (!pacienteAtualizado) {
            return res.status(404).send('Paciente não encontrado para atualização');
        }
        res.json({
            status: "Paciente Atualizado",
            data: pacienteAtualizado
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar paciente');
    }
};

module.exports = { todosController, individualController, criarController, atualizarController };