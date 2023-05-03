import { Column, Entity,PrimaryGeneratedColumn } from "typeorm"

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    nome : string

}