import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'jhosepmyr10',
    database: 'shoppc',
    dialect: 'mysql',
    port: 3306
});

export default sequelize