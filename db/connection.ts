import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "userpassword",
    database: "userlist",
    entities: ["./db/entities/*.ts"],
    migrations: ["./db/migrations/*.ts"],
    synchronize: false
})