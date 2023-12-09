const db = require('../models/db')

const anoExatoController = async(req,res)=>{
    try{
        const ano = req.params.ano
        const anoExato = await db.consultarVacinasPorAno(ano);
        res.json(anoExato);
    }
    catch(err){
        console.log(err);
    }
};
const anoAteController = async(req,res)=>{
    try{
        const ano = req.params.ano
        const anoAte = await db.consultarPorAnoAte(ano);
        res.json(anoAte);
    }
    catch(err){
        console.log(err);
    }
};
const mesExatoController = async(req,res)=>{
    try{
        const mes = req.params.mes
        const mesExato = await db.consultarVacinasPorMes(mes);
        res.json(mesExato);
    }
    catch(err){
        console.log(err);
    }
};
const mesAteController = async(req,res)=>{
    try{
        const mes = req.params.mes
        const mesAte = await db.consultarVacinasAteMesFornecido(mes);
        res.json(mesAte);
    }
    catch(err){
        console.log(err);
    }
};

module.exports = {anoExatoController, anoAteController, mesExatoController, mesAteController};