const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

app.get('/',(req,res) =>{
    res.status(200).json('Oxetech-Livraria');
});

module.exports = app;