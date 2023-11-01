import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./Users.entity";
import RealEstate from "./RealEstates.entity";

@Entity("schedules")
export default class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: Date})
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => RealEstate, (realEstates) => realEstates.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    user: User
}