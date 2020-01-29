const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require('method-override');

//Criando o servidor "server"
const server = express();

//Funcao para o Express servir os arquivos estaticos com a pasta public
server.use(express.urlencoded({extended: true})); //Linha de comando para habilitar o req.body
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

//Configurando a view engine do server
server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

//Criacao de rota


//Servidor estara ouvindo mudancas na porta 5000
server.listen(5000, function() {
    console.log('Server is running');
});