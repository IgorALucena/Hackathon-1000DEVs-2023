const { Pool } = require('pg');

const pool = new Pool({
    user: 'bertha',
    host: 'itcpostgresql.postgres.database.azure.com',
    database: 'db002',
    password: '%&unsas_aew27002',
    port: 5432,
    ssl: true
});

const pesquisaPorPessoa = async (id) => {
    const result = await pool.query('SELECT * FROM PACIENTE WHERE ID_PACIENTE = $1', [id]);
    return result.rows;
}

const cadastrarNovaPessoa = async (novoPaciente) => {
    const result = await pool.query('INSERT INTO PACIENTE (ID_PACIENTE, NOME, DATA_NASCIMENTO) VALUES ($1, $2, $3)', [novoPaciente.ID_PACIENTE, novoPaciente.NOME, novoPaciente.DATA_NASCIMENTO]);
    return result.rows[0];
}

const pesquisarTodos = async () => {
    const result = await pool.query('SELECT * FROM PACIENTE');
    return result.rows;
}
const atualizaPessoa = async (dadosAtualizados, id) => {
    // Inicializa partes da consulta SQL
    let queryText = 'UPDATE PACIENTE SET ';
    let queryParams = [];
    let queryValues = [];

    // Verifica se o nome foi fornecido e prepara a consulta
    if (dadosAtualizados.NOME) {
        queryParams.push('NOME = $' + (queryParams.length + 1));
        queryValues.push(dadosAtualizados.NOME);
    }

    // Verifica se a data de nascimento foi fornecida e prepara a consulta
    if (dadosAtualizados.DATA_NASCIMENTO) {
        queryParams.push('DATA_NASCIMENTO = $' + (queryParams.length + 1));
        queryValues.push(dadosAtualizados.DATA_NASCIMENTO);
    }

    // Se nenhum dado foi fornecido, retorna sem fazer a atualização
    if (queryParams.length === 0) {
        throw new Error('Nenhum dado fornecido para atualização.');
    }

    // Completa a consulta SQL
    queryText += queryParams.join(', ') + ' WHERE ID_PACIENTE = $' + (queryParams.length + 1);
    queryValues.push(id);

    // Executa a consulta SQL
    const result = await pool.query(queryText, queryValues);
    return result.rowCount === 1 ? result.rows[0] : null;
}

//consulta vacina:

const todasVacinas = async () => {

    const queryText = `
    SELECT 
        V.ID_VACINA,
        V.VACINA,
        V.SIGLA_VACINA,
        V.DOENCA_PROTECAO,
        V.DOSE,
        R.TIPO_REDE,
        PAA.QTD_ANO_INICIAL,
        PAA.QTD_ANO_FINAL,
        PAA.DESC_ANO,
        PAM.QTD_MESES_INICIAL,
        PAM.QTD_MESES_FINAL,
        PAM.DESC_MESES
    FROM 
        VACINA V
    JOIN 
        REDE R ON V.ID_REDE = R.ID_REDE
    LEFT JOIN 
        PERIODOAPLICACAOANO PAA ON V.ID_VACINA = PAA.ID_VACINA
    LEFT JOIN 
        PERIODOAPLICACAOMES PAM ON V.ID_VACINA = PAM.ID_VACINA;
`;
    const result = await pool.query(queryText);
    return result.rows;
}

const vacinaIndividual = async (id)=>{
    const query = `
SELECT 
    V.ID_VACINA,
    V.VACINA,
    V.SIGLA_VACINA,
    V.DOENCA_PROTECAO,
    V.DOSE,
    R.TIPO_REDE,
    PAA.QTD_ANO_INICIAL,
    PAA.QTD_ANO_FINAL,
    PAA.DESC_ANO,
    PAM.QTD_MESES_INICIAL,
    PAM.QTD_MESES_FINAL,
    PAM.DESC_MESES
FROM 
    VACINA V
JOIN 
    REDE R ON V.ID_REDE = R.ID_REDE
LEFT JOIN 
    PERIODOAPLICACAOANO PAA ON V.ID_VACINA = PAA.ID_VACINA
LEFT JOIN 
    PERIODOAPLICACAOMES PAM ON V.ID_VACINA = PAM.ID_VACINA
WHERE 
    V.ID_VACINA = $1;
`;

const result = await pool.query(query, [id]);
console.log(result.rows[0]);

return result.rows[0];

}

//

module.exports = { pesquisaPorPessoa, cadastrarNovaPessoa, pesquisarTodos, atualizaPessoa, todasVacinas,vacinaIndividual };