module.exports = class controllerNumbers{
    //Cadastro de professor
    static async postTeacher(req,res){
        const {numero} = req.body;
        if(numero){
            res.status(400).json({message: "Error"});
        }
        else{
            res.status(200).json({message:"Informação recebida: Docente cadastrado", nome, cargaHoraria,});
        }
    }
    //Listar professor
    static async getTeacher(req,res){
        res.status(200).json({nome:"Prior"})
    }
};
