module.exports = (err, req, res, next) =>{
    console.error(err);
    res.status(500).jason({
        erro : 'Erro interno do servidor'
    });
};