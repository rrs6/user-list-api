import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({nullable: false, unique: true})
    email!: string;

    @Column({nullable: false})
    name!: string;

    @Column()
    classId!: string;
}