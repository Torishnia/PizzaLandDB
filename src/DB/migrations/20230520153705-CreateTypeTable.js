'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TYPE "public"."Type_title_enum" AS ENUM('THIN', 'TRADITIONAL');

    CREATE TABLE IF NOT EXISTS "public"."Type" (
      "id" SERIAL PRIMARY KEY,
      "title" "public"."Type_title_enum" NOT NULL DEFAULT 'THIN'
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Type";
    DROP TYPE IF EXISTS "public"."Type_title_enum";
`)),
};
