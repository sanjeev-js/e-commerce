'use strict'

const {Model} = require ('objection');

class ProductCategory extends Model {
    static get tableName() {
        return "product_category";
    }
}

module.exports = ProductCategory;
