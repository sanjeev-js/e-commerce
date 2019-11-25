'use strict'

const {Model} = require ('objection');

class Attribute extends Model {
    static get tableName() {
        return "attribute";
    }
    static get relationMappings() {
      return {
        attribute_value : {
          relation : Model.HasManyRelation,
          modelClass : `${__dirname}/AttributeValue.js`,
          join : {
            from : 'attribute.attribute_id',
            to : 'attribute_value.attribute_id'
          }
        }
      }
    }
}

module.exports = Attribute;
