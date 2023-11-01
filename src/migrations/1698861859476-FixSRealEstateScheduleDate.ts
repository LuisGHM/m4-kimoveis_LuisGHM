import { MigrationInterface, QueryRunner } from "typeorm";

export class FixSRealEstateScheduleDate1698861859476 implements MigrationInterface {
    name = 'FixSRealEstateScheduleDate1698861859476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" TIME NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" TIMESTAMP NOT NULL`);
    }

}
