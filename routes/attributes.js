module.exports = function(attributes){
  // Get Attributes list
  attributes.get('/',async(request, response, next)=>{
    var query = await request.db.Attribute.query();
    return response.json(query)
  });

  // Get Attribute by id
  attributes.get('/:id',async(request, response, next)=>{
    var id = request.params.id;
    var query = await request.db.Attribute.query().where('attribute_id',id);
      return response.json(query);
  });

  // Get values Attributes from attribute
  attributes.get('/values/:attribute_id',async(request, response, next)=>{
      var attribute_id = request.params.attribute_id;
      var query = await request.db.Attribute.query().eager('attribute_value')
      .where('attribute.attribute_id',attribute_id).then((value)=>{
        if (value.length == 0) {
          var errMsg = {'error' : "No attribute with this id"}
          return response.json(errMsg)
        }
      return response.json(value)
    });
  });

  // Get all Attributes with Product ID
  attributes.get('/inProduct/:product_id',async(request, response, next)=>{
    var product_id = request.params.product_id;
    var query = await request.db.Attribute.knex().select(
      'attribute.name as attribute_name',
      'attribute_value.attribute_value_id',
      'value as attribute_value')
        .from('attribute').join('attribute_value',function(){
          this.on('attribute.attribute_id','=','attribute_value.attribute_id');
        }).join('product_attribute',function(){
          this.on('attribute_value.attribute_value_id','=','product_attribute.attribute_value_id');
        }).join('product',function(){
          this.on('product_attribute.product_id','=','product.product_id');
        }).where('product.product_id',product_id).then((attributeList)=>{
          console.log('\nAttribute with product id:\n',attributeList);
          return response.json(attributeList)
        });
  });
};
