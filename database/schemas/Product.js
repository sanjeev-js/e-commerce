'use strict' 

const {Model} = require ('objection');

class Product extends Model {
    static get tablename() {
        return "product";
    }
}

module.exports = Product;