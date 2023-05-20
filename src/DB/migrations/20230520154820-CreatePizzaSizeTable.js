'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE "public"."pizza_size" (
      "pizzaId" integer NOT NULL, 
      "sizeId" integer NOT NULL, 
      CONSTRAINT "PK_f550d3439a9ccb6b9641c3bbe6d" PRIMARY KEY ("pizzaId", "sizeId")
    );

    CREATE INDEX "IDX_ea052edd06a4618b9bd22ad63c" ON "public"."pizza_size" ("pizzaId");
    CREATE INDEX "IDX_41792502df637615377df587d3" ON "public"."pizza_size" ("sizeId");
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP INDEX "IDX_41792502df637615377df587d3";
    DROP INDEX "IDX_ea052edd06a4618b9bd22ad63c";

    ALTER TABLE "public"."pizza_size" DROP CONSTRAINT "PK_f550d3439a9ccb6b9641c3bbe6d";
    DROP TABLE IF EXISTS "public"."pizza_size";
  `)),
};
