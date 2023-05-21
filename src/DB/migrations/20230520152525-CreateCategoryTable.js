'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TYPE "public"."Category_title_enum" AS ENUM('MEAT', 'VEGETARIAN', 'GRILL', 'SPICY');
    
    CREATE TABLE IF NOT EXISTS "public"."Category" (
      "id" SERIAL PRIMARY KEY,
      "title" "public"."Category_title_enum" NOT NULL
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Category";
    DROP TYPE IF EXISTS "public"."Category_title_enum";
  `)),
}
