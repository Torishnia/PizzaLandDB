'use strict';

const { transaction } = require('../../utils');

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(transaction(`
    INSERT INTO "public"."Category" ("id", "title") VALUES ('1', 'MEAT');
    INSERT INTO "public"."Category" ("id", "title") VALUES ('2', 'VEGETARIAN');
    INSERT INTO "public"."Category" ("id", "title") VALUES ('3', 'GRILL');
    INSERT INTO "public"."Category" ("id", "title") VALUES ('4', 'SPICY');

    INSERT INTO "public"."Size" ("id", "title", "size", "coefficient") VALUES ('1', 'S', '25', '1');
    INSERT INTO "public"."Size" ("id", "title", "size", "coefficient") VALUES ('2', 'M', '35', '2');
    INSERT INTO "public"."Size" ("id", "title", "size", "coefficient") VALUES ('3', 'L', '45', '3');

    INSERT INTO "public"."Type" ("id", "title") VALUES ('1', 'THIN');
    INSERT INTO "public"."Type" ("id", "title") VALUES ('2', 'TRADITIONAL');

    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('1', 'Mexico', 'Hunting sausages, salami, ham, pickled cucumbers, herbs, spicy sauce, mayonnaise, cheese.', '10', 'https://images.pexels.com/photos/2918532/pexels-photo-2918532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '0', '4');
    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('2', 'California', 'Shrimp, pineapple, basil, cheeses: camembert, brie, blue cheese, parmesan.', '20', 'https://images.pexels.com/photos/2909821/pexels-photo-2909821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '0', '2');
    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('3', 'Greek', 'Chicken breast, olives, bell pepper, basil, onion, mayonnaise, ketchup, cheese, mushrooms.', '15', 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg', '0', '1');
    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('4', 'Chese Overload', 'Pear, cheeses: camembert, brie, blue cheese, mozzarella.', '15', 'https://images.pexels.com/photos/2909820/pexels-photo-2909820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '0', '2');
    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('5', 'Neapolitan', 'Cherry tomatoes, basil, sauce, cheeses: mozzarella, brie, camembert.', '20', 'https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', '0', '3');
    INSERT INTO "public"."Pizza" ("id", "title", "description", "price", "logo", "rating", "categoryId") VALUES ('6', 'Bavarian', 'Chicken breast, salami, pickled cucumbers, tomato, mayonnaise, cheese.', '10', 'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '0', '4');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('1', 'pizza_slider', 'https://images.pexels.com/photos/2918532/pexels-photo-2918532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '1');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('2', 'pizza_slider', 'https://images.pexels.com/photos/2918532/pexels-photo-2918532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '1');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('3', 'pizza_slider', 'https://images.pexels.com/photos/2918532/pexels-photo-2918532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '1');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('4', 'pizza_slider', 'https://images.pexels.com/photos/2909821/pexels-photo-2909821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('5', 'pizza_slider', 'https://images.pexels.com/photos/2909821/pexels-photo-2909821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('6', 'pizza_slider', 'https://images.pexels.com/photos/2909821/pexels-photo-2909821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('7', 'pizza_slider', 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg', '3');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('8', 'pizza_slider', 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg', '3');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('9', 'pizza_slider', 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg', '3');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('10', 'pizza_slider', 'https://images.pexels.com/photos/2909820/pexels-photo-2909820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '4');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('11', 'pizza_slider', 'https://images.pexels.com/photos/2909820/pexels-photo-2909820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '4');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('12', 'pizza_slider', 'https://images.pexels.com/photos/2909820/pexels-photo-2909820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '4');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('13', 'pizza_slider', 'https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', '5');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('14', 'pizza_slider', 'https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', '5');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('15', 'pizza_slider', 'https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', '5');

    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('16', 'pizza_slider', 'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '6');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('17', 'pizza_slider', 'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '6');
    INSERT INTO "public"."Images" ("id", "alt", "img", "pizzaId") VALUES ('18', 'pizza_slider', 'https://images.pexels.com/photos/2918521/pexels-photo-2918521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '6');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('1', '1');
    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('1', '2');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('2', '1');
    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('2', '2');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('3', '1');
    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('3', '2');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('4', '1');
    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('4', '2');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('5', '1');

    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('6', '1');
    INSERT INTO "public"."pizza_type" ("pizzaId", "typeId") VALUES ('6', '2');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('1', '1');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('1', '2');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('1', '3');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('2', '1');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('2', '2');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('2', '3');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('3', '1');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('3', '2');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('3', '3');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('4', '2');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('4', '3');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('5', '1');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('5', '2');

    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('6', '1');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('6', '2');
    INSERT INTO "public"."pizza_size" ("pizzaId", "sizeId") VALUES ('6', '3');

    INSERT INTO "public"."User" ("id", "name", "phone", "address") VALUES ('1', 'admin', '380991234567', 'Kiev, str. Soborna 1');

    INSERT INTO "public"."Order" ("id", "payCash", "totalPrice", "userId") VALUES ('1', 'true', '85', '1');

    INSERT INTO "public"."Position" ("id", "pizzaId", "typeId", "sizeId", "count", "price", "orderId")
    VALUES
      ('1', '6', '1', '2', '2', '40', '1'),
      ('2', '4', '1', '3', '1', '45', '1');
  `)),

  down: (queryInterface) => queryInterface.sequelize.query(transaction(`
    DELETE FROM "public"."Position";
    DELETE FROM "public"."Order";
    DELETE FROM "public"."User";
    DELETE FROM "public"."pizza_size";
    DELETE FROM "public"."pizza_type";
    DELETE FROM "public"."Images"; 
    DELETE FROM "public"."Pizza"; 
    DELETE FROM "public"."Type";  
    DELETE FROM "public"."Size";  
    DELETE FROM "public"."Category";
  `)),
};
