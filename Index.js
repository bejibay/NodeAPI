//a. Using virtual memory to store data.

//index.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var students = [ 
{id:201,name:"Yola",year:1996,gender:"female"},
{id:202,name:"Dupe",year:1998,gender:"female"},
{id:203,name:"Tolu",year:2001,gender:"male"}
];

//Get router for all Students
app.get('/',function(req, res){
console.log(students);
res.json(students);
});
//Get router for individual student
app.get("/:id([0-9]{3,})",function(req,res){
var currStudent = students.filter(function(student){
if(students.id = req.params.id){return true;}
});
if(currStudent.length==1){
res.json(currStudent);}
else{res.status(404);
res.json({message:"Bad Request"});}
});

//POST Router to create a student record

app.post("/",function(req, res){
if(!req.body.name||!req.body.age||!req.body.gender)
{res.status(404);
res.json({message:" Bad Request"});}
else{
var newId=students[students.length-1].id+1;
students.push({id:newId,
name:req.body.name,age:req.body.age,gender:req.body.gender});}
res.json(students);
});
//PUT router to update individual student record
app.put("/:id",function(req,res){
var updateindex = students.map(function(student){
return students.id;}).indexOf(req.params.id);
if(updateIndex !== -1 && req.body.name && req.body.age && req.body.gender){
students[updateIndex]={name:req.body.name,age:req.body.age,gender:req.body.gender};}
res.json(students);
});

//DELETE Router to delete a student record
app.delete('/', function(req, res){
var removeIndex = students.map(function(student){
return students.id}).indexOf(req.params.id);
students.splash(removeindex,1);
res.json(students);
});

app.listen(3000);

