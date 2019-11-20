'use strict' 

const {Model} = require ('objection');

class Customer extends Model {
    static get tablename() {
        return "customer";
    }
}

module.exports = Customer;