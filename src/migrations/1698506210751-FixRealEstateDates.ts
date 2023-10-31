import { MigrationInterface, QueryRunner } from "typeorm";

export class FixRealEstateDates1698506210751 implements MigrationInterface {
    name = 'FixRealEstateDates1698506210751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
