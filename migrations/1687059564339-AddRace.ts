import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRace1687059564339 implements MigrationInterface {
  name = 'AddRace1687059564339';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "races" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "year" smallint NOT NULL, "grand_prix" character varying NOT NULL, "position" integer NOT NULL, "number" integer NOT NULL, "driver" character varying NOT NULL, "car" character varying NOT NULL, "laps" integer NOT NULL, "time_retired" character varying, "points" integer NOT NULL, CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "races"`);
  }
}
