const data = require('.././data.json');
const fs = require('fs');

//Renderizar a tela inicial de admin
exports.renderAdmin = function(req, res) {
    //return res.send({items: data.receitas});
    return res.render('admin/receitas', {items: data.receitas});
}

//Renderizando a receita em especifico
exports.receita = function(req, res) {
    const { id } = req.params;

    const foundReceita = data.receitas.find(function(receita) {
        return id == receita.id
    });

    if(!foundReceita) return res.send('Receita not found!');

    return res.render('admin/receita', { items: foundReceita });
}

//Renderizar a tela de criacao de receita
exports.renderCreate = function(req, res) {
    return res.render('admin/create');
}

//Envio do formulario preenchido com o "POST"
exports.receitaCreate = function(req, res) {
    const keys = Object.keys(req.body);

    for(key of keys) {
        if(req.body[key] == '') {
            return res.send('Preencha todos os campos');
        }
    }

    let { receita_url, name, criador_name, ingredientes, modePreparation, id, information } = req.body;
    id = Number(data.receitas.length + 1);

    data.receitas.push({
        id,
        receita_url, 
        name, 
        criador_name, 
        ingredientes, 
        modePreparation,
        information
    });
    
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/admin');
    });
}

//Renderizar pagina de editar receita
exports.receitaEdit = function(req, res) {
    const { id } = req.params;

    const foundReceita = data.receitas.find(function(receita) {
        return id == receita.id
    });

    if(!foundReceita) return res.send('Receita not found!');

    return res.render('admin/edit', { items: foundReceita });
}

// put
exports.put = function(req, res) {
    const { id } = req.body;
    let index = 0;

    const foundReceita = data.receitas.find(function(receita, foundIndex) {
        if(id == receita.id) {
            index = foundIndex;
            return true;
        }
    });

    if(!foundReceita) return res.send('Receita not found!');

    const receitaAtualizada = {
        ...foundReceita,
        ...req.body,
        id: Number(req.body.id)
    }

    data.receitas[index] = receitaAtualizada;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file error!');

        return res.redirect(`/admin/receita/${id}`);
    });
}

// delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredReceitas = data.receitas.filter(function(receita) {
        return receita.id != id;
    });

    data.receitas = filteredReceitas;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file error!');

        return res.redirect('/admin');
    })
}