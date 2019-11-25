'use strict'

const {Model} = require ('objection');

class ProductAttribute extends Model {
    static get tableName() {
        return "product_attribute";
    }
}

module.exports = ProductAttribute;
