import { MigrationInterface, QueryRunner } from "typeorm";

export class Relations1698327826814 implements MigrationInterface {
    name = 'Relations1698327826814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ADD "realEstatesId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressesId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "UQ_d64118a1cb2b2b54747d5851fe9" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9" FOREIGN KEY ("realEstatesId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "UQ_d64118a1cb2b2b54747d5851fe9"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "realEstatesId"`);
    }

}
