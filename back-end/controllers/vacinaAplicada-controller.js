const db = require('../models/db');

const buscaVacinaAplicadas = async(req,res) =>{
    try{
        const idPaciente = req.params.id;
        console.log(idPaciente)
        const results = await db.vacinasAplicadas(idPaciente);
        res.json(results);
    }
    catch(err){
        console.log(err);
    }
}

const cadastraVacinaAplicada = async(req,res)=>{
    try{
        const dadosVacina = req.body
        console.log(dadosVacina);
        const results = await db.cadastroVacina(dadosVacina);
        res.json(results);
    }
    catch(err){
        console.log(err);
    }
    
}

const deletaVacinaAplicada = async(req,res)=>{
    try{
        const idPaciente = req.params.id;
        const idVacina = req.params.id1;
        const results = await db.deletarVacinaAplicada(idPaciente,idVacina);
        res.json(results);
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = {buscaVacinaAplicadas, cadastraVacinaAplicada, deletaVacinaAplicada}