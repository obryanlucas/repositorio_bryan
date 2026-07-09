const model = require('../models/usuario.model');

exports.cadastrar = async (req, res, next) => {
  try {
    const { nome, email, senha_hash, tipo } = req.body;
    console.log(req.body, "req.body");
    console.log({ nome, email, senha_hash, tipo }, "nome, email, senha_hash, tipo");
    const id = await model.criar({ nome, email, senha_hash, tipo });
    res.status(201).json({ id, nome, email, senha_hash, tipo });
  } catch (err) {
    next(err);
  }
};

exports.listar_usuarios = async (req, res, next) => {
  try {
    const usuarios = await model.listar();
    res.json(usuarios);
  } catch (err) {
    next(err);
  }
};


exports.buscarEmail = async (req, res, next) => {
  try {
    const usuario = await model.buscarporemail(req.params.email);
    if (!usuario) return res.status(404).json({ erro: 'usuario não encontrado' });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
};


exports.busacar_usuario = async (req, res, next) => {
  try {
    const usuario = await model.buscarporid(req.params.id);
    if (!usuario) return res.status(404).json({ erro: 'usuario não encontrado' });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
};


exports.alterar_usuario = async (req, res, next) => {
  try {
    const { nome, email, senha_hash, tipo } = req.body;

    await model.alterar(req.params.id, { nome, email, senha_hash, tipo });

    res.json({ mensagem: "atualização de usuario realizada com sucesso" });
  } catch (err) {
    next(err);
  }
};


exports.deletar = async (req, res, next) => {
  try {
    await model.deletar(req.params.id);
    res.json({ mensagem: 'usuario removido' });
  } catch (err) {
    next(err);
  }
};

// empresa controlles



exports.criar_desafio = async (req, res, next) => {
  try {
    const { titulo, descricao, area, prazo, recursos, condicao } = req.body;
    const id = await model.criar_desafio({ titulo, descricao, area, prazo, recursos, condicao });

    return res.status(201).json({sucesso: true, mensagem: "Desafio criado com sucesso!", id
    });
   } catch (erro) {
    next(erro);
  }
};