'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    ALTER TABLE "public"."Images" ADD CONSTRAINT "FK_abb2bf2d9257d369807507632bb" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
    ALTER TABLE "public"."Pizza" ADD CONSTRAINT "FK_e9d51fdc903ba07bbce7a0853e8" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
    
    ALTER TABLE "public"."pizza_type" ADD CONSTRAINT "FK_7165b2994e537e7194c29ac4ebc" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    ALTER TABLE "public"."pizza_type" ADD CONSTRAINT "FK_89ea50ccdfa996b72b8d0678e11" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

    ALTER TABLE "public"."pizza_size" ADD CONSTRAINT "FK_ea052edd06a4618b9bd22ad63ce" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    ALTER TABLE "public"."pizza_size" ADD CONSTRAINT "FK_41792502df637615377df587d3a" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    ALTER TABLE "public"."pizza_size" DROP CONSTRAINT "FK_41792502df637615377df587d3a";
    ALTER TABLE "public"."pizza_size" DROP CONSTRAINT "FK_ea052edd06a4618b9bd22ad63ce";

    ALTER TABLE "public"."pizza_type" DROP CONSTRAINT "FK_89ea50ccdfa996b72b8d0678e11";
    ALTER TABLE "public"."pizza_type" DROP CONSTRAINT "FK_7165b2994e537e7194c29ac4ebc";

    ALTER TABLE "public"."Pizza" DROP CONSTRAINT "FK_e9d51fdc903ba07bbce7a0853e8";
    ALTER TABLE "public"."Images" DROP CONSTRAINT "FK_abb2bf2d9257d369807507632bb";
  `)),
};
