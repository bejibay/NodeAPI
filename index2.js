b Working with MYSQL database

index1.js
var express = require('express');
var app = express();



var mysql = require ('mysql');
var con = mysql.createConnection({
host:"localhost",
user:"root",
password:123456,
database:mydb});
con.connect(function (err){
if(err) throw err;
console.log('Connected 
to Database');});
}


var express = require('express');
var db = require('./conne
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true});
app.use,(bodyParser.json());

//Get router for all Students
app.get('/',function(req, res){
var sql = "SELECT* FROM students";
db.query(sql,function(err,result){
if(err) throw err;
res.render('display', {name:result.name,sex:result.sex,age:result.age})
}
});
//Get router for individual student
app.get("/:id",function(req,res){
var sql="SELECT* from students where id=?";
var value=req.params.id;
con.query(sql,[value],function(err,result)
{res.json(result;)});});


//API to create a student record
router.get('/create',function(req,res){res.render(create);});
router.post("/create",function(req, res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(404);
res.json({message:" Bad Request");}
else{
Mid.query("INSERTinto students(name,sex,age) Values(req.body.name,req.body.sex,req.body.age)",function(err,result){if(err)throw err;
console.log(result);});

//API to update individual student record
router.get('/update/:id',function(req,res){

c.query("SELECT*from students where id=req.params.id",function(err,result){if(err)throw err;
res.render('update',{name:result.name,age:result.age,sex:result.age});});});
router.put('/update/:id',function(req,res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(400);
res.json({message:"Bad Request"});
else{
var sql="update students where id=req.params.id";
Conn.query(sql,function(err,result){if(err)throw err;
console.log(result.affected row +'updatex');});
}
});
//API to delete a student record
appr.delete('delete/:id', function(req,res){
var sql='DELETE from students where id=req.params.id';
db.query(sql,function(err,result){if(err)throw err;
console.log(result.affected row+'updated');});
});
c. Working with NoSql MongoDB
1. You can work with Mongo DB directly
2.You can work with MongoDB through mongoose
1.Working with MongoDB directly

Writing the codes
Index.js
var express = require('express');
var app=express();
app.listen(3000, function(){
console.log('app is listening at port '+3000 );});

create a file for connection 
 
connection.js
Var MongoClient= require('mongoDB').MongoClient;
var url=mongoDB://localhost/mydb;
var con =MongoClient.connect(url,function(err,db){
If(err )throw err;
console.log('connected to database');});
module.exports=con;
}

router.js
var express= require('express');
var dbase=require('./connection.js');
var router=express.Router();
API to get all students
router.get('/',function(req,res){dbase.db.collection('students').find({}).toarray(function(err,result){
if (err)throw err;
res.render('display',{
name:result.name,age:result.age,sex:result.sex
});
})});
API to get a student record
router.get('/:id',function(req,res){
var query ={id:req.params.id};
dbase.db.collections(students).find(query).toArray(function(err,result){if(err)throw err;
res.render('display',{name:result[0].name,sex:result[0].sex,age:result[0].age});
});
});
API to create student record
router.get('/create',function(req,res){res.render('display',);});
router.post('/create',function(req,res){if(req.body.name&&req.body.sex&&req.body.age){var data={name:req.body.name,sex:req.body.sex,age:req.body.age};
con.dbase.db.collections('students').insertOne(data,function(err,result){if(err)throw err;
console.log(result.inserted Count+' document inserted');
});});
else{res.status(404);
res.json({message:'Bad Request'})
}});
API to update student record
router.get('/update/:id',function(req,res){con.dbase.db.collections(students).find one(query).to array(function(err, result){if (err)throw err;
res.render('display', {name:result.name,sex:result.sex,age:result.age})
});});
router.put('/update/:id',function(req, res){if(req.body.name&&req.body.sex&&req.body.age){var query = {_id:req.params.id};
var newValues = {$set:{name:req.body.name,sex:req.body.sex,age:req.body.age}};
con.dbase.db.collections(students).updateOne(query,newValues,function(err,result)
{if(err) throw err;
console.log('student record updated');});
)}
});
API to delete Record
router.delete('/delete/:id',function(req,res){
var query = ={_id:req.params.id};
con.dbase.db.collections('students').deleteOne(query,function(err,result){if(err)throw err:
console.log('record deleted');
});
});
2.Working with MongoDB through Mongose

Writing the codes
Index.js
var express = require('express');
app.listen(8000, function(){
console.log('server is listening at port 8000');
})
router.js
var mongoose = require('mongoose');
mongoose.connect(mongodb://localhost/mydb);
var studentSchema = mongoose.Schema({
name:string,
sex:string,
age:number});
var Student =mongoose.model(Student, studentSchema);
API to get students records
router.get('/',function(req,res){Student.find(function(err,response){res.render('display',{name:response.name,sex:response.sex,age:response.age});});});
API to create student record 
router.get('/create',function(req,res){var newStudent=new Student({name:req.body.name,sex:req.body.sex,age:req.body.age});
newStudent.save(function(err,response){if(err)throw err;
console.log('student created successfully');
});
});
API to update student record
router.get('/update/:id',function(req,res){Person.find({id:req.params.id},function(err,response){if(err)throw err;
res.render('display'{name:response.name,sex:response.sex,age:response.age});
});});
router.put('/update/:id',function(req,res){if(req.body.name&&req.body.sex&&req.body.age){Person.updateOneAndId({id:req.params.id},req.body,function(err,response){})}});

API to delete student record
router.delete('/delete/:id',function (req,res){Person.remove({id:req.params.id},function (err,response){if(err)throw err;
console.log('student deleted');
});});
app.listen(3000, function(){
console.log('server is
listening at port 3000');





