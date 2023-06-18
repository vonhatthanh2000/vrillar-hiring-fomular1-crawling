import {
  AUTO_MIGRATE,
  DB_LOGGING,
  DB_SYNCHRONIZE,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@environments';
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NamingStrategy } from '@utils';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      entities: [`${__dirname}/**/entities/*.entity{.ts,.js}`],
      namingStrategy: new NamingStrategy(),
      autoLoadEntities: true,
      synchronize: DB_SYNCHRONIZE,
      logging: DB_LOGGING,
      migrationsRun: AUTO_MIGRATE,
      migrationsTableName: '__migrations',
      migrations: [`${__dirname}/**/**/migrations/**/*.ts`],
    };
  }
}
