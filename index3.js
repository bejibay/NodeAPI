// Working with NoSql MongoDB

// 1. You can work with Mongo DB directly
// 2.You can work with MongoDB through mongoose

// 1.Working with MongoDB directly

// index3.js

var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 
// create connection to mongodb

var MongoClient= require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/mydb";
var con =MongoClient.connect(url,function(err,db){
if(err)throw err;
console.log('connected to database');
});


//API to get all students
app.get('/',function(req,res){db.collection('students').find({}).toArray(function(err,result){
if (err)throw err;
res.status(200);
res.json(result);
})});

//API to get a student record
app.get('/:id',function(req,res){
var query ={id:req.params.id};
db.collection(students).find(query).toArray(function(err,result){
if(err)throw err;
res.status(200);
res.json(result);
});});

//API to create student record

app.post('/',function(req,res){
if(req.body.name&&req.body.year&&req.body.gender){
var data={name:req.body.name,year:req.body.year,age:req.body.gender};
db.collection('students').insertOne(data,function(err,result){
if(err)throw err;
console.log(result.insertedCoun() +' document inserted');
res.status(200);
res.json(result);
});
}});

//API to update student record

app.put('/:id',function(req, res){
if(req.body.name&&req.body.year&&req.body.gender){var query = {_id:req.params.id};
var newValues = {$set:{name:req.body.name,year:req.body.year,gender:req.body.gender}};
db.collection(students).updateOne(query,newValues,function(err,result){
if(err) throw err;
console.log('student record updated');
});
}});

// API to delete Record
app.delete('/:id',function(req,res){
var query = {_id:req.params.id};
db.collection('students').deleteOne(query,function(err,result){
if(err)throw err;
console.log('record deleted');
});
});

// 2.Working with MongoDB through Mongose

//codes in index3.js as shown below

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

app.post('/', function(req,res){var newStudent=new Student({name:req.body.name,year:req.body.year,gender:req.body.age});
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










