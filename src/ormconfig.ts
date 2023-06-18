import { DataSource, DataSourceOptions } from 'typeorm';
import {
  DB_LOGGING,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@environments';
import { NamingStrategy } from './utils/naming-strategy';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [`${__dirname}/entities/*.entity{.ts,.js}`],
  namingStrategy: new NamingStrategy(),
  migrationsTableName: '__migrations',
  migrations: ['migrations/**/*.ts'],
  logging: DB_LOGGING,
};

export const connectionSource = new DataSource(dataSourceOptions);
