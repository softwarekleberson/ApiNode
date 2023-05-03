import { AppDataSource } from "../data-source";
import { Categoria } from "../entities/Categoria";

export const categoriaRepository = AppDataSource.getRepository(Categoria)

