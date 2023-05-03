import { Request } from "express-validator/src/base";
import { BadRequestError } from "../../helpers/api-erros";

export class VendaValidator{

    static valide(req: Request){
        const{total, desconto, observacao} = req.body

        if(!total || total.trim().length === 0){
            throw new BadRequestError("O campo valor não pode estar vazio")
        }

        if(!desconto || desconto.trim().length === 0){
            throw new BadRequestError("O campo desconto não pode estar vazio")
        }

        if(!observacao || observacao.trim().length === 0){
            throw new BadRequestError("O campo observação não pode estar vazio")
        }
    }
}