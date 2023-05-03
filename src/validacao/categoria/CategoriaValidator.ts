import { Request } from "express";
import { BadRequestError } from "../../helpers/api-erros";

export class CategoriaValidator {
  static valide(req: Request) {
    const { nome } = req.body;

    if (!nome || nome.trim().length === 0) {
      throw new BadRequestError("O campo 'nome' não pode estar vazio");
    }
  }
}
