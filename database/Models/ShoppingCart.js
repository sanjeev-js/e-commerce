'use strict'

const {Model} = require ('objection');

class ShoppingCart extends Model {
    static get tableName() {
        return "shopping_cart";
    }
}

module.exports = ShoppingCart;
