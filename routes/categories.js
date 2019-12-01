module.exports = function(categories,knex){
  // Get list of all categories
  categories.get('/',async(request, response, next)=>{
    var query = await request.db.Category.query()
    console.log(query);
    response.json(query)
  });

  // Get category by id
  categories.get('/:category_id',async(request, response, next)=>{
    var category_id = request.params.category_id;
    var query = await request.db.Category.query().where('category_id',category_id).then((category)=>{
      if(category.length == 0){
        var errMsg = {
                        "error": "Don't exist product with this ID."
                     }
        return response.json(errMsg);
      }
      return response.json(category);
    });
  });

  // Get categories of product
    categories.get('/inProduct/:product_id',async(request, response, next)=>{
        var product_id = request.params.product_id;
        var query = await request.db.Category.knex().select('category.category_id','category.department_id','category.name')
        .from('category').join('product_category',function(){
          this.on('category.category_id','=','product_category.category_id');
        }).join('product',function(){
          this.on('product.product_id','=','product_category.product_id');
        }).where('product.product_id',product_id).then((categoryList)=>{
          console.log('\nCategory of product:\n',categoryList);
          return response.json(categoryList)
        })
    })

    // Get category in department by department id
    categories.get('/inDepartment/:department_id',async(request, response, next)=>{
      var department_id = request.params.department_id;
      var query = await request.db.Category.query().select('*').where('department_id',department_id).then((category)=>{
        console.log("\nCategory by department:\n",category);
        return response.json(category);
      });
    });
};
