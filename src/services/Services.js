const dataSource = require('../models')

class Services{
    constructor(nomeModelo){
        this.model = nomeModelo;
    }
    async getTodosRegistros(){
        return dataSource[this.model].findAll();
    }
    async getRegistroPorId(id){
        return dataSource[this.model].findOne();
    }
    async createRegistro(dados){
        return dataSource[this.model].crate(dados);
    }

    async updateRegistro(dadosAtualizados, id){
        const listaRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {where: {id:id},});
        if (listaRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
    
    async deleteRegistro(id){
        return dataSource[this.model].destroy({where:{id}});
    }
}

module.exports = Services;