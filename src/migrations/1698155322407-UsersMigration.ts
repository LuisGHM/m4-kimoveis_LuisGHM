import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersMigration1698155322407 implements MigrationInterface {
    name = 'UsersMigration1698155322407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "hour" TIME NOT NULL, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "schedules"`);
    }

}
