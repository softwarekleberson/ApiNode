import { Column, Entity,PrimaryGeneratedColumn } from "typeorm"

@Entity('entregas')
export class Entrega {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    dataEntrega: Date

    @Column({ type: 'text' })
    observacao: string

}