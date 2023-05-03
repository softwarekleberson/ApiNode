import { Request } from "express-validator/src/base";
import { BadRequestError } from "../../helpers/api-erros";

export class ProdutoValidator{

    static valide(req: Request){
        const{descricao, preco, url} = req.body

        if(!descricao || descricao.trim().length === 0){
            throw new BadRequestError("O campo descrição não pode estar vazio")
        }

        if(!preco || preco.trim().length === 0){
            throw new BadRequestError("O campo preço não pode estar vazio")
        }

        if(!url || url.trim().length === 0){
            throw new BadRequestError("O campo url não pode estar vazio")
        }
    }
}