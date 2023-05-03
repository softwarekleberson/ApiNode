import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    nome: string

    @Column({ type: 'text', unique: true })
    email: string

    @Column({ type: 'text' })
    senha: string

}

