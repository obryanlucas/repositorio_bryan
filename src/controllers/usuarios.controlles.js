const model = require('../models/userModel');

exports.criar = async (req, res, next) => {
  try {
    const { nome, email, senha_hash, tipo} = req.body;
    console.log(req.body, "req.body");
    console.log({ nome, email, senha_hash, tipo }, "nome, email, senha_hash, tipo");
    const id = await model.criar({ nome, email, senha_hash, tipo });
    res.status(201).json({ id, nome, email, senha_hash, tipo });
  } catch (err) {
    next(err);
  }
};

