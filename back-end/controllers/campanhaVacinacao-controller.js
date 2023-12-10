const db = require('../models/db');

const campanhaDataController = async (req, res)=>{ // /campanhaData?data=1/1/23
    try{
        const data = req.query.data;
        const consulta = await db.consultarCampanhasAtivasPorData(data);
        res.json(consulta);
    }catch(err){
        res.status(500).send('Erro ao consultar campanhas por data');
    } 
}

const cadastroCampanhaController = async (req, res)=>{
    try{
        const novaCampanha = req.body
        const resultado = await db.cadastrarCampanha(novaCampanha);
        res.json(resultado);
    }catch(err){
        res.status(500).send('Erro ao cadastrar campanha por data');
    } 
}

const editCampanhaController = async (req, res)=>{
    try{
        const id = req.params.id;
        const editCampanha = req.body
        const resultado = await db.editarCampanha(id, editCampanha);
        res.json(resultado);
    }catch(err){
        res.status(500).send('Erro ao editar campanha');
    } 
}

const deleteVacinaCampanhaController = async (req, res)=>{
    try{
        const id = req.params.id;
        const resultado = await db.deletarVacinaDeCampanha(id);
        res.json(resultado);
    }catch(err){
        res.status(500).send('Erro ao deletar');
    } 
}

const cadastroVacinaCampanhaController = async (req, res)=>{
    try{
        const id = req.params.id;
        const id1 = req.params.id1;
        const resultado = await db.cadastrarVacinaEmCampanha(id,id1);
        res.json(resultado);
    }catch(err){
        res.status(500).send('Erro ao cadastrar vacina em campanha');
    } 
}

const consultaCampanhaProtecaoController = async (req, res)=>{
    try{
        const palavraChave = req.params.pc;
        console.log(palavraChave)
        const resultado = await db.consultarCampanhasPorProtecao(palavraChave);
        res.json(resultado);
    }catch(err){
        res.status(500).send('Erro ao consultar campanha por protecao');
    } 
}

module.exports = {campanhaDataController, cadastroCampanhaController, 
    editCampanhaController, cadastroVacinaCampanhaController,
    consultaCampanhaProtecaoController, deleteVacinaCampanhaController
  }