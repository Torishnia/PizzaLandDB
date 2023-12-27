'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE "User" (
      "id" SERIAL NOT NULL,
      "name" character varying(32) NOT NULL,
      "phone" character varying(9) NOT NULL,
      "address" character varying(128) NOT NULL,
      CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."User";
  `)),
};
