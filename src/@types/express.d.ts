import { Usuario } from "../entities/Usuario";

declare global {
    namespace Express {
        export interface Request {
            usuario: Partial<Usuario>
        }
    }
}