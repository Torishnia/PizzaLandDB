'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    CREATE TYPE "public"."Size_title_enum" AS ENUM('S', 'M', 'L');
    CREATE TYPE "public"."Size_size_enum" AS ENUM('25', '35', '45');
    CREATE TYPE "public"."Size_coefficient_enum" AS ENUM('1', '2', '3');
    
    CREATE TABLE IF NOT EXISTS "public"."Size" (
      "id" SERIAL PRIMARY KEY,
      "title" "public"."Size_title_enum" NOT NULL,
      "size" "public"."Size_size_enum" NOT NULL,
      "coefficient" "public"."Size_coefficient_enum" NOT NULL
    );
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DROP TABLE IF EXISTS "public"."Size";

    DROP TYPE IF EXISTS "public"."Size_coefficient_enum";
    DROP TYPE IF EXISTS "public"."Size_size_enum";
    DROP TYPE IF EXISTS "public"."Size_title_enum";
`)),
};