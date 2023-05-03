import { Fruit } from "src/fruit/fruit.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name: string;

    @Column()
    pswd:string;

    @OneToOne(() => Fruit, (fruit) => fruit.user)
    fruit:Fruit;
}