import { Request } from "express-validator/src/base";
import { BadRequestError } from "../../helpers/api-erros";

export class UsuarioValidator{

    static valide(req: Request){
        const{nome, email, senha} = req.body

        if(!nome || nome.trim().length === 0){
            throw new BadRequestError("O campo nome não pode estar vazio")
        }

        if(!email || email.trim().length === 0){
            throw new BadRequestError("O campo email não pode estar vazio")
        }

        if(!senha || senha.trim().length === 0){
            throw new BadRequestError("O campo senha não pode estar vazio")
        }
    }
}