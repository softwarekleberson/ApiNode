import { Request } from "express-validator/src/base";
import { BadRequestError } from "../../helpers/api-erros";

export class EntregaValidator {
  static valide(req: Request) {
    const { dataEntrega, observacao } = req.body;

    if (!dataEntrega || !isValidDate(dataEntrega)) {
      throw new BadRequestError(
        "Por favor, forneça uma data de entrega válida no formato 'DD/MM/YYYY'"
      );
    }

    if (!observacao || observacao.trim().length === 0) {
      throw new BadRequestError(
        "Por favor, forneça uma observação para a entrega"
      );
    }
  }
}

function isValidDate(dateString: string): boolean {
  // Verificar se a data é uma string válida no formato 'DD/MM/YYYY'
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!regex.test(dateString)) {
    return false;
  }

  // Verificar se a data é uma data válida
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  const date = new Date(year, month, day);
  if (isNaN(date.getTime())) {
    return false;
  }

  // Verificar se a data está no formato correto
  const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  if (formattedDate !== dateString) {
    return false;
  }

  return true;
}
