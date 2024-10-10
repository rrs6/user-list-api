import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn('increment')
    id!: Number;

    @Column()
    name!: string;
}