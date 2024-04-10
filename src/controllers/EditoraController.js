/*
class EditoraController{
    static async getEditoras(req, res){
        try {
            const listaDeEditoras = await database.Editoras.findAll();
            return res.status(200).json(listaDeEditoras)
        } catch (error) {
            
        }
    }
}

module.exports = EditoraController;
*/

const Controller = require('./Controller.js');
const EditoraServices = require('../services/editoraServices.js');

const editoraServices = new EditoraServices();

class EditoraController extends Controller {
    constructor(){
        super(editoraServices);
    }
}

module.exports = EditoraController;