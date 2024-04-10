const express = require('express');
const autores = require('./autorRoutes.js');
const editoras = require('./editoraRoutes.js');
const livros = require('./livroRoutes.js');

const routes = (app) =>{
    app.use(
        express.json(),
        autores,
        editoras,
        livros
    );
};

module.exports = routes;