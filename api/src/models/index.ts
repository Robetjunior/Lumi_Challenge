// db.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initializeInvoiceModel } from './invoice';

dotenv.config();

const dbConfig = {
  username: process.env.DB_USERNAME || 'postgres.yhivluwnxpbqwntxnmtn',
  password: process.env.DB_PASSWORD || 'TMYTJopWtIBWRuDb',
  database: process.env.DB_DATABASE || 'postgres',
  host: process.env.DB_HOST || 'aws-0-us-west-1.pooler.supabase.com',
  dialect: (process.env.DB_DIALECT as 'postgres') || 'postgres',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 6543,
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
