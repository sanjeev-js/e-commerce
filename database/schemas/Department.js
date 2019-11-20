'use strict' 

const {Model} = require ('objection');

class Department extends Model {
    static get tablename() {
        return "department";
    }
}

module.exports = Department;