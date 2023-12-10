const db = require('../models/db');


const cadastroVacinaController = async (req, res) => {
    try {
        const novaVacina = await db.cadastrarVacina(req.body);
        res.status(201).json(novaVacina);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const edicaoVacinaController = async (req, res) => {
    try {
        const vacinaAtualizada = await db.editarVacina(req.params.id, req.body);
        res.status(200).json(vacinaAtualizada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const cadastroAplicacaoAnoController = async (req, res) => {
    try {
        const novoPeriodoAno = await db.cadastrarPeriodoAplicacaoAno(req.body);
        res.status(201).json(novoPeriodoAno);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const removerAplicacaoAnoController = async (req, res) => {
    try {
        const periodoRemovido = await db.removerPeriodoAplicacaoAno(req.params.id);
        res.status(200).json(periodoRemovido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const cadastroAplicacaoMesController = async (req, res) => {
    try {
        const novoPeriodoMes = await db.cadastrarPeriodoAplicacaoMes(req.body);
        res.status(201).json(novoPeriodoMes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const removerAplicacaoMesController = async (req, res) => {
    try {
        const periodoRemovido = await db.removerPeriodoAplicacaoMes(req.params.id);
        res.status(200).json(periodoRemovido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


/*const cadastroVacinaController = async(req, res)=>{


}

const edicaoVacinaController = async(req, res)=>{

}

const cadastroAplicacaoAnoController = async(req, res)=>{

}

const removerAplicacaoAnoController = async(req, res)=>{

}

const cadastroAplicacaoMesController = async(req, res)=>{

}

const removerAplicacaoMesController = async(req, res)=>{

}*/

module.exports = { cadastroVacinaController, edicaoVacinaController, cadastroAplicacaoAnoController, removerAplicacaoAnoController, cadastroAplicacaoMesController, removerAplicacaoMesController };




