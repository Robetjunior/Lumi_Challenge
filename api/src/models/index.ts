// db.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initializeInvoiceModel } from './invoice';

dotenv.config();

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não está definida`);
  }
  return value;
}

const dbConfig = {
  username: requiredEnv('DB_USERNAME'),
  password: requiredEnv('DB_PASSWORD'),
  database: requiredEnv('DB_DATABASE'),
  host: requiredEnv('DB_HOST'),
  dialect: requiredEnv('DB_DIALECT') as 'postgres',
  port: parseInt(requiredEnv('DB_PORT'), 10),
};

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

const Invoice = initializeInvoiceModel(sequelize);

const db = {
  sequelize,
  Sequelize,
  Invoice,
};

export default db;
