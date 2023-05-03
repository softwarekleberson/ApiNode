import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produtos')
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    descricao: string

    @Column({ type: 'decimal' })
    preco: number

    @Column({ type: 'text' })
    url: string

    
}