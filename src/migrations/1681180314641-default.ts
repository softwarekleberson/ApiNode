import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681180314641 implements MigrationInterface {
    name = 'Default1681180314641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nome" text NOT NULL, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "dataEntrega"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "dataEntrega" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "total" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "desconto"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "desconto" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "desconto"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "desconto" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD "total" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "dataEntrega"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "dataEntrega" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
