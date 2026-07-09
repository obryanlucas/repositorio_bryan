const db = require('../config/db');


exports.criar = async ({ nome, email, senha_hash, tipo }) => {
  const [result] = await db.promise().query(
    'INSERT INTO users (nome, email, senha_hash, tipo) VALUES (?, ?, ?, ?)',
    [nome, email, senha_hash, tipo]
  );
  return result.insertId;
};
exports.listar = async () => {
  const [rows] = await db.promise().query('SELECT * FROM users');
  return rows;
};

exports.buscarporid = async (id) => {
  const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

exports.alterar = async (id, { nome, email, senha_hash, tipo }) => {
  await db.promise().query(
    'UPDATE users SET nome = ?, email = ?, senha_hash = ?, tipo = ? WHERE id = ?',
    [nome, email, senha_hash, tipo, id]
  );
};

exports.deletar = async (id) => {
  await db.promise().query('DELETE FROM users WHERE id = ?', [id]);
};



// empresa modal 


exports.criar_desafio = async ({titulo, descricao, area, prazo, recursos,condicao
}) => {const [resultado] = await db.promise().query(
      `INSERT INTO desafios
      (titulo, descricao, area, prazo, recursos, condicao)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [titulo, descricao, area, prazo, recursos, condicao]
  );

  return resultado.insertId;
};