import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./Users.entity";
import RealEstate from "./RealEstates.entity";

@Entity("schedules")
export default class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    date: Date

    @Column("time")
    hour: string

    @ManyToOne(() => RealEstate, (realEstates) => realEstates.schedules)
    realEstates: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    user: User
}