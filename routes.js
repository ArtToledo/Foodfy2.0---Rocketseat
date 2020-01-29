const express = require('express');
const routes = express.Router();
const admin = require('./controllers/admin');
const cliente = require('./controllers/cliente');

routes.get('/', cliente.renderCliente);
routes.get('/sobre', cliente.renderSobre);
routes.get('/receitas', cliente.renderReceitas);
routes.get('/receita/:id', cliente.renderReceita);


routes.get('/admin', admin.renderAdmin);
routes.get('/admin/receita/:id', admin.receita);
routes.get('/admin/receita/:id/edit', admin.receitaEdit);
routes.put('/admin/receita', admin.put);
routes.delete('/admin/receita', admin.delete);
routes.get('/admin/create', admin.renderCreate);
routes.post('/admin/receitas', admin.receitaCreate);

module.exports = routes;