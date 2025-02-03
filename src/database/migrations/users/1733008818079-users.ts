import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1733008818079 implements MigrationInterface {
    name = 'Users1733008818079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` DATETIME NOT NULL, \`updatedAt\` DATETIME NOT NULL, \`deletedAt\` DATETIME NULL, \`name\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
