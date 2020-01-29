const receitas = require('.././data.json');

exports.renderCliente = function(req, res) {
    return res.render('cliente/home', {items: receitas.receitas});
}

exports.renderSobre = function(req, res) {
    return res.render('cliente/sobre');
}

exports.renderReceitas = function(req, res) {
    return res.render('cliente/receitas', {items: receitas.receitas});
}

exports.renderReceita = function(req, res) {
    const { id } = req.params;

    const recipe = receitas.receitas.find(function(receita) {
        return id == receita.id
    });

    if(!recipe) return res.send('Receitas not found!');

    return res.render('cliente/receita', { receita: recipe });
}