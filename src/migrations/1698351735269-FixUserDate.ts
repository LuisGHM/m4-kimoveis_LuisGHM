import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUserDate1698351735269 implements MigrationInterface {
    name = 'FixUserDate1698351735269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
