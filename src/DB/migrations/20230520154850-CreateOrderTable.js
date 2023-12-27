'use strict';

const { transaction } = require('../../utils');


module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE "Order" (
      "id" SERIAL NOT NULL,
      "userId" integer NOT NULL,
      CONSTRAINT "PK_3d5a3861d8f9a6db372b2b317b7" PRIMARY KEY ("id")
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Order";
  `)),
};
