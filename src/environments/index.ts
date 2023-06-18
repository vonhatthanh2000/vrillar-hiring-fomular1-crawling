// postgres
export const POSTGRES_HOST: string = process.env.POSTGRES_HOST || 'localhost';
export const POSTGRES_PORT: number = process.env.POSTGRES_PORT
  ? parseInt(process.env.POSTGRES_PORT, 10)
  : 5432;
export const POSTGRES_USER: string = process.env.POSTGRES_USER || 'postgres';
export const POSTGRES_PASSWORD: string =
  process.env.POSTGRES_PASSWORD || 'let-me-in';
export const POSTGRES_DB: string = process.env.POSTGRES_DB || 'fomular1';
export const AUTO_MIGRATE: boolean = process.env.AUTO_MIGRATE === 'true';

export const DB_LOGGING: boolean = process.env.DB_LOGGING === 'true';
export const DB_SYNCHRONIZE: boolean =
  process.env.DB_SYNCHRONIZE === 'true' || false;
