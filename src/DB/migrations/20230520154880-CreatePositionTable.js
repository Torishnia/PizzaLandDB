'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE "Position" (
      "id" SERIAL NOT NULL,
      "pizzaId" integer NOT NULL,
      "typeId" integer NOT NULL,
      "sizeId" integer NOT NULL,
      "count" integer NOT NULL,
      "price" integer NOT NULL,
      "orderId" integer NOT NULL,
      CONSTRAINT "PK_4c5179b1a25cf5c52157d2b2bf4" PRIMARY KEY ("id")
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Position";
  `)),
};
