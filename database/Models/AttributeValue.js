'use strict'

const {Model} = require ('objection');

class AttributeValue extends Model {
    static get tableName() {
        return "attribute_value";
    }
}

module.exports = AttributeValue;
