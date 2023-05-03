import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruit } from 'src/fruit/fruit.entity';
import { User } from 'src/user/user.entity';

dotenv.config();

export default TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Fruit, User],
    synchronize: false,
    logging: true,
})

console.log(process.env)