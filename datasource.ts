import constants from "./src/config/constants";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceConfig: DataSourceOptions = {
    type: 'mysql',
    host: constants.DB_HOST,
    port: parseInt(constants.DB_PORT, 10),
    username: constants.DB_USERNAME,
    password: constants.DB_PASSWORD,
    database: constants.DB_NAME,
    entities: [__dirname + '/src/modules/**/*/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/database/migrations/**/*/*{.ts,.js}'],
    synchronize: false,
}

const dataSource = new DataSource(dataSourceConfig);

export default dataSource;