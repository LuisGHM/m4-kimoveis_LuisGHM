import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDeleteNameUser1698862677502 implements MigrationInterface {
    name = 'FixDeleteNameUser1698862677502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deleteAt" TO "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "deleteAt"`);
    }

}
