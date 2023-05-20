'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE "public"."pizza_type" (
      "pizzaId" integer NOT NULL, 
      "typeId" integer NOT NULL, 
      CONSTRAINT "PK_2f1dd892c2e3b54d197b6cf6f2d" PRIMARY KEY ("pizzaId", "typeId")
    );

    CREATE INDEX "IDX_7165b2994e537e7194c29ac4eb" ON "public"."pizza_type" ("pizzaId");
    CREATE INDEX "IDX_89ea50ccdfa996b72b8d0678e1" ON "public"."pizza_type" ("typeId");
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP INDEX "IDX_89ea50ccdfa996b72b8d0678e1";
    DROP INDEX "IDX_7165b2994e537e7194c29ac4eb";

    ALTER TABLE "public"."pizza_type" DROP CONSTRAINT "PK_2f1dd892c2e3b54d197b6cf6f2d";
    DROP TABLE IF EXISTS "public"."pizza_type";
  `)),
};
