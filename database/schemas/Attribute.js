'use strict'

const {Model} = require ('objection');

class Attribute extends Model {
    static get tableName() {
        return "attribute";
    }
}

module.exports = Attribute;
