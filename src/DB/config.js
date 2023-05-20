require('dotenv').config();

const commonOptions = {
    dialect: 'postgres',
    seederStorageTableName: 'SequelizeMeta_seed',
    seederStorage: 'sequelize',
};

module.exports = {
    development: {
        ...commonOptions,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: 5432,
    }
}