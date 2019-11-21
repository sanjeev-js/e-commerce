module.exports = function(shipping){
  //Return shipping regions from shipping_region table
  shipping.get('/regions', async(request, response, next)=>{
    var query = await request.db.Shipping.query();
    console.log(query)
    response.json(query)
  });

  //Return shipping regions from shipping table
  // Always select shipping_region_id between 2 to 4 
  shipping.get('/regions/:shipping_region_id', async(request, response, next)=>{
    var shipping_region_id = request.params.shipping_region_id;
    var query = await request.db.Shipping.query().where('shipping_region_id',shipping_region_id)
    .then((shippingData)=>{
      if (shippingData.length == 0) {
        var errmsg = {"error" : "There is no shpping region with this Id."}
        return response.json(errmsg)
      }
      return response.json(shippingData);
    })
  });
}
