'use strict' 

const {Model} = require ('objection');

class Shipping extends Model {
    static get tablename() {
        return "shipping";
    }
}

module.exports = Shipping;
