import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 45})
    title: string

    @Column({length: 45, unique: true})
    email: string

    @Column({default: false})
    admin: boolean

    @Column({length:120})
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn({nullable: true})
    deleteAt?: Date | null | undefined
}