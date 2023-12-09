const {pesquisaPorPessoa, cadastrarNovaPessoa, pesquisarTodos, atualizaPessoa} = require('../models/db');

const todosController = async (req, res) => {

    try {
        const pesquisaTodos = await pesquisarTodos();
        res.send(pesquisaTodos);
    }
    catch (err) {
        console.error(err);
    }
}

const individualController = async (req, res) => {
    
    try {
        const id = req.params.id;
        const pesquisaInd = await pesquisaPorPessoa(id);
        res.send(pesquisaInd);
    }
    catch (err) {
        console.error(err);
    }
}

const criarController = async (req, res) => {

    try {
        const novoPaciente = req.body;
        const cadastrarNovo = await cadastrarNovaPessoa(novoPaciente);
        res.json({
            status:"cadastrado",
            data:cadastrarNovo
        });
    }
    catch (err) {
        console.error(err);
    }

}

const atualizarController = async (req, res) => {
    
    try {
        const dadosAtualiza = req.body
        const id = req.params.id
        const atualizacao = await atualizaPessoa(dadosAtualiza, id);
        res.json({
            status:"Paciente Atualizado",
            data:atualizacao
        })
    }
    catch (err) {
        console.error(err);
    }

}



module.exports ={todosController, individualController, criarController, atualizarController};