import { MigrationInterface, QueryRunner } from "typeorm";

export class UserName1698328014230 implements MigrationInterface {
    name = 'UserName1698328014230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "title"`);
    }

}
