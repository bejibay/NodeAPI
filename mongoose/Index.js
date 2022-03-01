// 2.Working with MongoDB through Mongose

//codes in index.js as shown below

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mydb");
var studentSchema = mongoose.Schema({
name:string,
year:number,
gender:string});
var Student =mongoose.model(Student, studentSchema);

//API to get students records

app.get('/',function(req,res){Student.find(function(err,response){
if(err) throw err;
res.status(200);
res.json(response);})});


//API to create student recbbord

app.post('/', function(req,res){var newStudent=new Student({name:req.body.name,year:req.body.year,gender:req.body.gender});
newStudent.save(function(err,response){if(err)throw err;
console.log('student created successfully');
res.status(200);
res.json(response);
});
});

//API to get a student record
app.get('/:id',function(req,res){Student.find({id:req.params.id},function(err,response){if(err)throw err;
console.log("student record updated successfully");
res.status(200);
res.json(response);
});});

//App to update record
app.put('/:id',function(req,res){
if(req.body.name&&req.body.year&&req.body.gender){
Student.updateOneAndId({id:req.params.id},req.body.year,function(err,response){
console.log("student record updated")}
)}});

//API to delete student record
app.delete('/:id',function (req,res){
Student.remove({id:req.params.id},function (err,response){
if(err)throw err;
console.log('student deleted');
});});
 
app.listen(3000, function(){
console.log('listening at port 3000');});










