'use strict' 

const {Model} = require ('objection');

class Category extends Model {
    static get tablename() {
        return "category";
    }
}

module.exports = Category;