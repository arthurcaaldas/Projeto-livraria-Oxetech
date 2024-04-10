/*
class LivroController{
    static async getLivros(req, res){
        try {
            const listaDeLivros = await database.Livros.findAll();
            return res.status(200).json(listaDeLivros)
        } catch (error) {
            
        }
    }
}

module.exports = LivroController;
*/

const Controller = require('./Controller.js');
const LivroServices = require('../services/livroServices.js');

const livroServices = new LivroServices();

class LivroController extends Controller {
    constructor(){
        super(livroServices);
    }
}

module.exports = LivroController;