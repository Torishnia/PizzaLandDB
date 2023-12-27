'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TYPE "public"."Order_status_enum" AS ENUM('ACTIVE', 'COMPLETED', 'CANCELLED');

    CREATE TABLE "Order" (
      "id" SERIAL NOT NULL,
      "payCash" boolean NOT NULL DEFAULT true,
      "totalPrice" integer NOT NULL,
      "status" "public"."Order_status_enum" NOT NULL DEFAULT 'ACTIVE',
      "userId" integer NOT NULL,
      CONSTRAINT "PK_3d5a3861d8f9a6db372b2b317b7" PRIMARY KEY ("id")
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Order";
    DROP TYPE IF EXISTS "public"."Order_status_enum";
  `)),
};
