import { AppDataSource } from "../data-source";

import { Entrega } from "../entities/Entrega";

export const entregaRepository = AppDataSource.getRepository(Entrega)