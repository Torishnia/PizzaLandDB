'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TABLE IF NOT EXISTS "public"."Images" (
      "id" SERIAL PRIMARY KEY,
      "alt" VARCHAR(128) NOT NULL,
      "img" VARCHAR(500) NOT NULL,
      "pizzaId" INT NOT NULL
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Images";
`)),
};