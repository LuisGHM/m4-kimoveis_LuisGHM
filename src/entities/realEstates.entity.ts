import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("realEstates")
export default class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({default: false})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale: 2, default: 0})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}