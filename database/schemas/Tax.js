'use strict' 

const {Model} = require ('objection');

class Tax extends Model {
    static get tablename() {
        return "tax";
    }
}

module.exports = Tax;