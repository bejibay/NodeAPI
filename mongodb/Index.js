// Working with NoSql MongoDB

// 1. You can work with Mongo DB directly
// 2.You can work with MongoDB through mongoose

// 1.Working with MongoDB directly

// index.js

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

