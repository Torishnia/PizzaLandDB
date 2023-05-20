'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE IF NOT EXISTS "public"."Pizza" (
      "id" SERIAL PRIMARY KEY,
      "title" VARCHAR(128) NOT NULL,
      "description" VARCHAR(255) NOT NULL,
      "price" INT NOT NULL,
      "logo" VARCHAR(500) NOT NULL,
      "rating" INT NOT NULL,
      "categoryId" INT NOT NULL
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Pizza";
  `)),
}
