const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST
});

const pesquisaPorPessoa = async (id) => {
    const result = await pool.query('SELECT * FROM PACIENTE WHERE ID_PACIENTE = $1', [id]);
    return result.rows;
};

const cadastrarNovaPessoa = async (novoPaciente) => {
    const result = await pool.query('INSERT INTO PACIENTE (ID_PACIENTE, NOME, DATA_NASCIMENTO) VALUES ($1, $2, $3)', [novoPaciente.ID_PACIENTE, novoPaciente.NOME, novoPaciente.DATA_NASCIMENTO]);
    return result.rows[0];
};

const pesquisarTodos = async () => {
    const result = await pool.query('SELECT * FROM PACIENTE');
    return result.rows;
};
const atualizaPessoa = async (dadosAtualizados, id) => {

    let queryText = 'UPDATE PACIENTE SET ';
    let queryParams = [];
    let queryValues = [];

    if (dadosAtualizados.NOME) {
        queryParams.push('NOME = $' + (queryParams.length + 1));
        queryValues.push(dadosAtualizados.NOME);
    }

    if (dadosAtualizados.DATA_NASCIMENTO) {
        queryParams.push('DATA_NASCIMENTO = $' + (queryParams.length + 1));
        queryValues.push(dadosAtualizados.DATA_NASCIMENTO);
    }

    if (queryParams.length === 0) {
        throw new Error('Nenhum dado fornecido para atualização.');
    }

    queryText += queryParams.join(', ') + ' WHERE ID_PACIENTE = $' + (queryParams.length + 1);
    queryValues.push(id);

    const result = await pool.query(queryText, queryValues);
    return result.rowCount === 1 ? result.rows[0] : null;
};

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
};

const vacinaIndividual = async (id) => {
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

};

const consultarVacinasPorAno = async (anoFornecido) => {

    const query = `
      SELECT V.ID_VACINA, V.VACINA, V.SIGLA_VACINA, V.DOENCA_PROTECAO, PAA.DESC_ANO
      FROM VACINA V
      JOIN PERIODOAPLICACAOANO PAA ON V.ID_VACINA = PAA.ID_VACINA
      WHERE PAA.QTD_ANO_INICIAL = $1;
    `;
    const values = [anoFornecido];
    const res = await pool.query(query, values);
    return res.rows
};

const consultarPorAnoAte = async (idadeEmAnos) => {

    const query = `
      SELECT V.ID_VACINA, V.VACINA, V.SIGLA_VACINA, V.DOENCA_PROTECAO, PAA.DESC_ANO, PAM.DESC_MESES
      FROM VACINA V
      LEFT JOIN PERIODOAPLICACAOANO PAA ON V.ID_VACINA = PAA.ID_VACINA
      LEFT JOIN PERIODOAPLICACAOMES PAM ON V.ID_VACINA = PAM.ID_VACINA
      WHERE (PAA.QTD_ANO_FINAL >= $1 AND PAA.QTD_ANO_INICIAL <= $1)
         OR (PAM.QTD_MESES_FINAL >= ($1 * 12) AND PAM.QTD_MESES_INICIAL <= ($1 * 12));
    `;
    const values = [idadeEmAnos];
    const res = await pool.query(query, values);
    return res.rows
};

const consultarVacinasPorMes = async (mesFornecido) => {

    const query = `
      SELECT V.ID_VACINA, V.VACINA, V.SIGLA_VACINA, V.DOENCA_PROTECAO, PAM.DESC_MESES
      FROM VACINA V
      JOIN PERIODOAPLICACAOMES PAM ON V.ID_VACINA = PAM.ID_VACINA
      WHERE PAM.QTD_MESES_INICIAL <= $1 AND PAM.QTD_MESES_FINAL >= $1;
    `;
    const values = [mesFornecido];
    const res = await pool.query(query, values);
    return res.rows
};

const consultarVacinasAteMesFornecido = async (mesFornecido) => {

    const query = `
      SELECT V.ID_VACINA, V.VACINA, V.SIGLA_VACINA, V.DOENCA_PROTECAO, PAM.DESC_MESES
      FROM VACINA V
      JOIN PERIODOAPLICACAOMES PAM ON V.ID_VACINA = PAM.ID_VACINA
      WHERE PAM.QTD_MESES_FINAL <= $1;
    `;
    const values = [mesFornecido];
    const res = await pool.query(query, values);
    return res.rows

};

const vacinasAplicadas = async (id) => {

    const query = `
    SELECT V.ID_VACINA, V.VACINA, V.SIGLA_VACINA, V.DOENCA_PROTECAO, VA.DATA_APLICACAO
    FROM VACINAAPLICADA VA
    JOIN VACINA V ON VA.ID_VACINA = V.ID_VACINA
    WHERE VA.ID_PACIENTE = $1;
  `;
    const values = [id];
    const results = await pool.query(query, values);
    return results.rows;

};

const cadastroVacina = async (dadosVacinaAplicada) => {

    const inserirVacinaAplicadaText = `
            INSERT INTO VACINAAPLICADA(ID_PACIENTE, ID_VACINA, DATA_APLICACAO)
            VALUES($1, $2, $3)
            RETURNING *;
          `;
    const results = await pool.query(inserirVacinaAplicadaText, [dadosVacinaAplicada.id_paciente, dadosVacinaAplicada.id_vacina, dadosVacinaAplicada.data_aplicacao]);
    return results.rows;

};

const deletarVacinaAplicada = async (idPaciente, idVacina) => {

    const deletarVacinaAplicadaText = `
        DELETE FROM VACINAAPLICADA
        WHERE ID_PACIENTE = $1 AND ID_VACINA = $2;
      `;
    const res = await pool.query(deletarVacinaAplicadaText, [idPaciente, idVacina]);

    console.log(`Vacina aplicada deletada com sucesso: ${res.rowCount} registro(s) removido(s).`);
};

const pesquisarVacinaPorProtecao = async (doencaProtecao) => {
    const pesquisarVacinaText = `
      SELECT ID_VACINA, VACINA, SIGLA_VACINA, DOENCA_PROTECAO, DOSE
      FROM VACINA
      WHERE DOENCA_PROTECAO ILIKE $1;
    `;
    const valorPesquisa = `%${doencaProtecao}%`;
    const res = await pool.query(pesquisarVacinaText, [valorPesquisa]);
    console.log(res.rows);
    return res.rows;
};

const pesquisarVacinasAplicadas = async (idPaciente) => {

    const query = 'SELECT V.VACINA, VA.DATA_APLICACAO FROM VACINAAPLICADA VA INNER JOIN VACINA V ON VA.ID_VACINA = V.ID_VACINA WHERE VA.ID_PACIENTE = $1';
    const result = await pool.query(query, [idPaciente]);
    console.log(result.rows)
    return result.rows;
};

const pesquisarVacinasPendentes = async (idPaciente) => {

    const query = `
            SELECT V.VACINA
            FROM VACINA V
            WHERE V.ID_VACINA NOT IN (
                SELECT VA.ID_VACINA
                FROM VACINAAPLICADA VA
                WHERE VA.ID_PACIENTE = $1
            )`;
    const result = await pool.query(query, [idPaciente]);
    console.log(result.rows)
    return result.rows;

};

const consultarCampanhasAtivasPorData = async (data) => {

    const query = 'SELECT * FROM CAMPANHA WHERE DATA_INICIO <= $1 AND DATA_FIM >= $1';
    const result = await pool.query(query, [data]);
    console.log(result.rows);
    return result.rows;
};

const consultarCampanhasPorProtecao = async (doencaProtecao) => {

    const query = `
        SELECT C.* FROM CAMPANHA C
        INNER JOIN CAMPANHAVACINA CV ON C.ID_CAMPANHA = CV.ID_CAMPANHA
        INNER JOIN VACINA V ON CV.ID_VACINA = V.ID_VACINA
        WHERE V.DOENCA_PROTECAO ILIKE $1`;
    const valorLike = `%${doencaProtecao}%`;
    const result = await pool.query(query, [valorLike]);
    console.log(result.rows);
    return result.rows;
};

const cadastrarCampanha = async (novaCampanha) => {

    const query = 'INSERT INTO CAMPANHA (ID_CAMPANHA, DESCRICAO, DATA_INICIO, DATA_FIM) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [novaCampanha.ID_CAMPANHA, novaCampanha.DESCRICAO, novaCampanha.DATA_INICIO, novaCampanha.DATA_FIM];
    const result = await pool.query(query, values);
    console.log(result.rows[0])
    return result.rows[0];
};

const editarCampanha = async (idCampanha, dadosEdicao) => {
    const query = 'UPDATE CAMPANHA SET DESCRICAO = $2, DATA_INICIO = $3, DATA_FIM = $4 WHERE ID_CAMPANHA = $1 RETURNING *';
    const values = [idCampanha, dadosEdicao.DESCRICAO, dadosEdicao.DATA_INICIO, dadosEdicao.DATA_FIM];
    const result = await pool.query(query, values);
    console.log(result.rows[0]);
    return result.rows[0];
};

const cadastrarVacinaEmCampanha = async (idCampanha, idVacina) => {

    const query = 'INSERT INTO CAMPANHAVACINA (ID_CAMPANHA, ID_VACINA) VALUES ($1, $2)';
    const result = await pool.query(query, [idCampanha, idVacina]);
    console.log(result.rows)
    return result.rowCount === 1 ? 'Vacina cadastrada na campanha com sucesso.' : 'Erro ao cadastrar vacina na campanha.';
};

const deletarVacinaDeCampanha = async (idCampanha, idVacina) => {

    const query = 'DELETE FROM CAMPANHAVACINA WHERE ID_CAMPANHA = $1 AND ID_VACINA = $2';
    const result = await pool.query(query, [idCampanha, idVacina]);
    return result.rowCount === 1 ? 'Vacina deletada da campanha com sucesso.' : 'Erro ao deletar vacina da campanha.';
};

const cadastrarVacina = async (vacina) => {
    const { id_vacina, nome_vacina, sigla_vacina, doenca_protecao, dose, id_rede } = vacina;
    const query = `
    INSERT INTO vacina (id_vacina, vacina, sigla_vacina, doenca_protecao, dose, id_rede)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
    const res = await pool.query(query, [id_vacina, nome_vacina, sigla_vacina, doenca_protecao, dose, id_rede]);
    return res.rows[0];
};

const editarVacina = async (id_vacina, dadosAtualizados) => {
    const { nome_vacina, sigla_vacina, doenca_protecao, dose, id_rede } = dadosAtualizados;
    const query = `
      UPDATE vacina
      SET vacina = $1, sigla_vacina = $2, doenca_protecao = $3, dose = $4, id_rede = $5
      WHERE id_vacina = $6
      RETURNING *;
    `;
    const res = await pool.query(query, [nome_vacina, sigla_vacina, doenca_protecao, dose, id_rede, id_vacina]);
    return res.rows[0];
};

const cadastrarPeriodoAplicacaoAno = async (periodo) => {
    const { id, id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano } = periodo;
    const query = `
      INSERT INTO periodoaplicacaoano (id, id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const res = await pool.query(query, [id, id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano]);
    return res.rows[0];
};

const removerPeriodoAplicacaoAno = async (id) => {
    const query = `
      DELETE FROM periodoaplicacaoano
      WHERE id = $1
      RETURNING *;
    `;
    const res = await pool.query(query, [id]);
    return res.rows[0];
};

const cadastrarPeriodoAplicacaoMes = async (periodo) => {
    const { id, id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses } = periodo;
    const query = `
      INSERT INTO periodoaplicacaomes (id, id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const res = await pool.query(query, [id, id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses]);
    return res.rows[0];
};

const removerPeriodoAplicacaoMes = async (id) => {
    const query = `
      DELETE FROM periodoaplicacaomes
      WHERE id = $1
      RETURNING *;
    `;
    const res = await pool.query(query, [id]);
    return res.rows[0];
};





module.exports = {
    pesquisaPorPessoa, cadastrarNovaPessoa, pesquisarTodos,
    atualizaPessoa, todasVacinas, vacinaIndividual, consultarVacinasPorAno,
    consultarPorAnoAte, consultarVacinasPorMes, consultarVacinasAteMesFornecido,
    vacinasAplicadas, cadastroVacina, deletarVacinaAplicada, pesquisarVacinaPorProtecao,
    pesquisarVacinasAplicadas, pesquisarVacinasPendentes, consultarCampanhasAtivasPorData,
    consultarCampanhasPorProtecao, cadastrarCampanha, editarCampanha, cadastrarVacinaEmCampanha,
    deletarVacinaDeCampanha, cadastrarVacina, editarVacina, cadastrarPeriodoAplicacaoAno,
    removerPeriodoAplicacaoAno, cadastrarPeriodoAplicacaoMes, removerPeriodoAplicacaoMes
};
