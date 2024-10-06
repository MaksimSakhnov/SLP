import { MigrationInterface, QueryRunner } from 'typeorm';

export class levels1728235951077 implements MigrationInterface {
  name = 'levels1728235951077';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "levels" ("id" SERIAL NOT NULL, "text" character varying(300) NOT NULL, "picture_first" character varying(300) NOT NULL, "picture_second" character varying(300) NOT NULL, "statistic_first" integer NOT NULL, "statistic_second" integer NOT NULL, CONSTRAINT "PK_05f8dd8f715793c64d49e3f1901" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "levels"`);
  }
}
