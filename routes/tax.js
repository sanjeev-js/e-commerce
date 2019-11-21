module.exports = function(tax){
  //Get all Taxes
  tax.get('/',async(request, response, next)=>{
  var query = await request.db.Tax.query();
      return response.json(query);
  });

  //Get Tax by ID
  tax.get('/:tax_id',async(request, response, next)=>{
    var tax_id = request.params.tax_id;
    var query = await request.db.Tax.query().where('tax_id',tax_id).then((tax)=>{
          return response.json(tax);
        });
  });
};
