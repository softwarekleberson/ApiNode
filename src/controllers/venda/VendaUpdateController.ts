import { Request, Response } from "express";
import { vendaRepository } from "../../repositores/VendaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class VendaUpdateController {
    
    async update(req: Request, res: Response) {
        const { id } = req.body;
        const { total, desconto, observacao } = req.body;

        if (!id || isNaN(parseInt(id))) {
            throw new BadRequestError('O ID da venda é inválido');
        }

        const vendaId = parseInt(id);
        const venda = await vendaRepository.findOne({ where: { id: vendaId } });

        if (!venda) {
            throw new NotFoundError('Venda não existe');
        }

        if (total) {
            venda.total = total;
        }

        if (desconto) {
            venda.desconto = desconto;
        }

        if (observacao) {
            venda.observacao = observacao;
        }

        await vendaRepository.save(venda);
        return res.status(200).json(venda);
    }
}