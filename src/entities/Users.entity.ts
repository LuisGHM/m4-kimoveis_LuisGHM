import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./Schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 45})
    name: string

    @Column({length: 45, unique: true})
    email: string

    @Column({length:120})
    password: string

    @Column({default: false})
    admin: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({nullable: true})
    deleteAt: Date | null 

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Array<Schedule>

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds: number = getRounds(this.password);

        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        }
    }
}