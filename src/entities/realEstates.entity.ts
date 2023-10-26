import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./Schedules.entity";
import Category from "./Categories.entity";
import Address from "./Addresses.entity";

@Entity("realEstates")
export default class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({default: false})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale: 2, default: 0})
    value: number | string

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    addresses: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category

    @OneToMany(() => Schedule, (schedule) => schedule.realEstates)
    schedules: Array<Schedule>
}