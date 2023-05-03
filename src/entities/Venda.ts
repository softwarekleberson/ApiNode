import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('vendas')
export class Venda {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'decimal' })
    total: number

    @Column({ type: 'decimal' })
    desconto: number

    @Column({ type: 'text' })
    observacao: string

}




