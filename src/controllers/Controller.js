//Essa classe serve para criar um controlador genérico que pode ser usado para qualquer entidade do sistema.
//Entidade são as tabelas do banco de dados, por exemplo: Pessoas,Categorias,Produtos, etc.
class Controller{
    //Constructor recebe um serviço de entidade que será injetado no controlador
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }
    //Método para pegar todos os registros da entidade
    async getTodosRegistros(req,res){
        try{
            const listaDeTodos = await this.entidadeService.getTodosRegistros();
            res.status(200).json(listaDeTodos);
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    //Método para pegar um registro por ID
    async getRegistroPorID(req,res){
        const id = req.params.id;
        try{
            const registroEncontrado = await this.entidadeService.getRegistroPorID(id);
            res.status(200).json(registroEncontrado);
        }catch(erro){
            res.json({message: erro.message});
        }
    }
    //Método para criar um novo registro
    async create(req,res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await this.entidadeService.criaRegistro(novoRegistro);
            res.status(201).json({
                message:'Registro Criado',
                novoRegistro: novoRegistroCriado
            });
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    //Método para atualizar um registro
    async update(req,res){
        const id = req.params.id;
        const dadosAtualizados = req.body;
        try{
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados,Number(id));
            if(foiAtualizado){
                return res.status(200).json({message:'Atualizado com sucesso'});
            }
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    //Método para deletar um registro
    //Removendo em cascata
    async delete(req,res){
        const id = req.params.id;
        try{
            const foiDeletado = await this.entidadeService.deletaRegistro(Number(id));
            if(foiDeletado){
                return res.status(200).json({message:'Deletado com sucesso'});
            }
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
}

//Exporta a classe Controller
module.exports = Controller;