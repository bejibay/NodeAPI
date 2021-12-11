The following are some nodejs projects
1. REST CRUD APIs with nodejs and expressjs

a. CRUD API with virtual memory and JSON 
b.CRUD API with mysql database 
c.CRUD API with MongoDB no SQL database

Project Set Up


Install a text editor eg notepad+, or an IDE
Download node.js to install nodejs and the npm
on your machine
To test the versions of nodejs and npm type this at the command prompt
node -- version
npm -- version

Create your project directory and init it

Type these at the cmd prompt
mkdir nodeprojecta
cd nodeprojecta
npm init

Note: Your entry point is index.js

Create index.js and router.js files in your directory 

a. Working with virtual memory with JSON 
writing the code

index.js
var express = require('express');
var app = express();
var students = require("./router.js");
app.use("/students", "students");
app.listen(3000, function(){
console.log('server is
listening at port 3000');

router.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true});

var students =[ {id:201, name:"Yola", age:1996,sex:"male"},
{id:202,name:"Dupe",age:1998,sex:"female"},
{id:203,name:"Tolu",age:"2001,sex:"male"}];

//Get router for all Students
router.get('/',function(req, res){
console.log(students);
res.json(students);
});
//Get router for individual student
router.get("/:id([0-9]{3,})",function(req,res){
var currStudent = students.filter(function(student){
if(students.id = req.params.id){return true;}
});
if(currStudent.length==1){
res.json(currStudent);}
else{res.status(404);
res.json({message:"Bad Request"});}
});

//POST Router to create a student record

router.post("/",function(req, res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(404);
res.json({message:" Bad Request");}
else{
var newId=studentd[students.length-1].id+1;
students.push({id:newId,
name:req.body.name,age:req.body.age,sex:req.body.sex});}
res.json(students);
});
//PUT router to update individual student record
router.put("/:id",function(req,res){
var updateindex = students.map(function(student){
return students.id;}.indexOf(req.params.id);
if(updateindex!=<-1 && req.body.name && req.body.age && req.body.sex){students[updateindex]={name:req.body.name,age:req.body.age,sex:req.body.sex};};});
res.json(students);});

//DELETE Router to delete a student record
router.delete('/', function(req, res){
var removeIndex = students.map(function(student)){
return students.id}).indexOf(req.params.id);}
students.splash(removeindex,1);
res.json(students);
});

b Working with MYSQL database
Download MYSL and install it on your local machine.
Require MYSQL driver with NPM.

create a separate file for connection to the database

connection.js
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
module.exports= con


}

index.js
var express = require('express')
var app = express();
var students = require("./router.js");
app.use("/students", "students");
app.listen(3000, function(){
console.log('server is
listening at port 3000');

router.js
var express = require('express');
var db = require('./connection.js');
var app = express();
app.set('view-engine', 'Jade');
app.set('views','/views');
var bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true});

//Get router for all Students
router.get('/',function(req, res){
var sql = "SELECT* FROM students";
db.query(sql,function(err,result){
if(err) throw err;
res.render('display', {name:result.name,sex:result.sex,age:result.age})
}
});
//Get router for individual student
router.get("/:id",function(req,res){
var sql="SELECT* from students where id=?";
var value=req.params.id;
db.query(sql,[val],function(err,result){res.sender(display,{name:result.name,sex:result.sex,age:result.age});});


//API to create a student record
router.get('/create',function(req,res){res.render(create);});
router.post("/create",function(req, res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(404);
res.json({message:" Bad Request");}
else{
db.query("INSERTinto students(name,sex,age) Values(req.body.name,req.body.sex,req.body.age)",function(err,result){if(err)throw err;
console.log(result);});}

//API to update individual student record
router.get('/update/:id',function(req,res){

db.query("SELECT*from students where id=req.params.id",function(err,result){if(err)throw err;
res.render('update',{name:result.name,age:result.age,sex:result.age});});});
router.put('/update/:id',function(req,res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(400);
res.json({message:"Bad Request"});
else{
var sql="update students where id=req.params.id";
db.query(sql,function(err,result){if(err)throw err;
console.log(result.affected row +'updatex');});
}
});
//API to delete a student record
router.delete('delete/:id', function(req,res){
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
 












