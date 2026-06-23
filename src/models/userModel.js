const db = require('../config/db');


exports.criar = async ({ nome, email, senha_hash, tipo }) => {
  const [result] = await db.promise().query(
    'INSERT INTO usuario (nome, email, senha_hash, tipo) VALUES (?, ?, ?, ?)',
    [nome, email, senha_hash, tipo]
  );
  return result.insertId;
};

