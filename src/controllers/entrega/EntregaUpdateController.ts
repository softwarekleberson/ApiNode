import { Request, Response } from "express";
import { entregaRepository } from "../../repositores/EntregaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class EntregaUpdateController {
    
    async update(req: Request, res: Response) {
        const { id } = req.body;
        const { dataEntrega, observacao } = req.body;

        if (!id || isNaN(parseInt(id))) {
            throw new BadRequestError('O ID da entrega é inválido');
        }

        const entregaId = parseInt(id);
        let entrega = await entregaRepository.findOne({ where: { id: entregaId } });

        if (!entrega) {
            throw new NotFoundError('Entrega não existe');
        }

        if (dataEntrega) {
            entrega.dataEntrega = dataEntrega;
        }

        if (observacao) {
            entrega.observacao = observacao;
        }

        entrega = await entregaRepository.save(entrega);

        return res.status(200).json(entrega);
    }
}