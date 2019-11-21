module.exports = function(departments){
  // get list of all departments
  departments.get('/',async(request, response, next)=>{
    var query = await request.db.Department.query();
    response.json(query)
  });

  // get department by id
  departments.get('/:department_id',async(request, response, next)=>{
    var department_id = request.params.department_id;
    var query = await request.db.Department.query().where('department_id',department_id).then((department)=>{
      if(department.length == 0){
        var errMsg = {
                        "error": "Don't exist any department with this ID."
                     }
        return response.json(errMsg);
      }
      return response.json(department);
    });
  });
};
