import { AppDataSource } from "../data-source";

import { Produto } from "../entities/Produto";

export const produtoRepository = AppDataSource.getRepository(Produto)