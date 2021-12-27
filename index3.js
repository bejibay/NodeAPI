
c. Working with NoSql MongoDB

1. You can work with Mongo DB directly
2.You can work with MongoDB through mongoose

1.Working with MongoDB directly

index3.js

var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var app = express();
app.use(bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());
 
// create connection to mongodb

Var MongoClient= require('mongodb').MongoClient;
var url=mongoDB://localhost/mydb;
var con =MongoClient.connect(url,function(err,db){
If(err )throw err;
console.log('connected to database');});
}

//API to get all students
app.get('/',function(req,res){db.collection('students').find({}).toarray(function(err,result){
if (err)throw err;
res.status(200);
red.json(result);
})});

//API to get a student record
app.get('/:id',function(req,res){
var query ={id:req.params.id};
db.collections(students).find(query).toArray(function(err,result){if(err)throw err;
res.status(200);
res.json(result);
});});

//API to create student record

app.post('/',function(req,res){
{if(req.body.name&&req.body.sex&&req.body.age){
var data={name:req.body.name,sex:req.body.sex,age:req.body.age};
db.collections('students').insertOne(data,function(err,result){
if(err)throw err;
console.log(result.inserted Count+' document inserted');
res.status(200);
res.json(result);
});});
}});

//API to update student record

app.put('/:id',function(req, res){if(req.body.name&&req.body.sex&&req.body.age){var query = {_id:req.params.id};
var newValues = {$set:{name:req.body.name,sex:req.body.sex,age:req.body.age}};
db.collections(students).updateOne(query,newValues,function(err,result)
{if(err) throw err;
console.log('student record updated');});
)}
});

API to delete Record
app.delete('/:id',function(req,res){
var query = ={_id:req.params.id};
db.collections('students').deleteOne(query,function(err,result){if(err)throw err:
console.log('record deleted');
});
});

2.Working with MongoDB through Mongose

//codes in index3.js as shown below

var mongoose = require('mongoose');
mongoose.connect(mongodb://localhost/mydb);
var studentSchema = mongoose.Schema({
name:string,
sex:string,
age:number});
var Student =mongoose.model(Student, studentSchema);

//API to get students records

app.get('/',function(req,res){Student.find(function(err,response){
if(err) throw err;
res.status(200);
res.json(response);})});


API to create student record

app.post('/', function(req,res){var newStudent=new Student({name:req.body.name,sex:req.body.sex,age:req.body.age});
newStudent.save(function(err,response){if(err)throw err;
console.log('student created successfully');
res.status(200);
res.json(response);
});
});

//API to update student record
app.get('/:id',function(req,res){Person.find({id:req.params.id},function(err,response){if(err)throw err;
console.log("student record updated successfully");
res.status(200)!
res.json(response);
});});

//App to update record
app.put('/:id',function(req,res){if(req.body.name&&req.body.sex&&req.body.age){Person.updateOneAndId({id:req.params.id},req.body,function(err,response){})}});

//API to delete student record
app.delete('/:id',function (req,res){Person.remove({id:req.params.id},function (err,response){if(err)throw err;
console.log('student deleted');
});});
 
app.listen(3000, function(){
console.log('server is
listening at port 3000');










