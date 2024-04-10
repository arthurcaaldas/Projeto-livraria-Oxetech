/*
const database = require('../models');

class AutorController{
    static async getAutores(req, res){
        try {
            const listaDeAutores = await database.Autores.findAll();
            return res.status(200).json(listaDeAutores)
        } catch (error) {
            
        }
    }
}

module.exports = AutorController;
*/

const Controller = require('./Controller.js');
const AutorServices = require('../services/autorServices.js');

const autorServices = new AutorServices();

class AutorController extends Controller {
    constructor(){
        super(autorServices);
    }
}

module.exports = AutorController;