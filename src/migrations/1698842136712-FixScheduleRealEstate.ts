import { MigrationInterface, QueryRunner } from "typeorm";

export class FixScheduleRealEstate1698842136712 implements MigrationInterface {
    name = 'FixScheduleRealEstate1698842136712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstatesId" TO "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "realEstateId" TO "realEstatesId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_b2e54237377c6f210dee4d15fb9" FOREIGN KEY ("realEstatesId") REFERENCES "realEstates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
