import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/user/user.entity";

@Entity('fruits')
export class Fruit {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name: 'user_id'})
    userId:string;

    @Column()
    inventory:number;

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;
}