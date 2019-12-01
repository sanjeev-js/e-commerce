'use strict' 

const {Model} = require ('objection');

class Order extends Model {
    static get tablename() {
        return "orders";
    }
}

module.exports = Order;
