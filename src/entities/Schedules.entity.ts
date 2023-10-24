import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schedules")
export default class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    date: Date

    @Column("time")
    hour: string
}