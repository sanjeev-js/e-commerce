'use strict'

const {Model} = require ('objection');

class Tax extends Model {
    static get tableName() {
        return "tax";
    }
}

module.exports = Tax;
