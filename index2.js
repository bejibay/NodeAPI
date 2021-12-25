b Working with MYSQL database

index1.js

var express = require('express');
var app = express();
var mysql = require ('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());
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

//Get router for all Students
app.get('/',function(req, res){
var sql = "SELECT* FROM students";
con.query(sql,function(err,result){
if(err) throw err;
res.status(200);
res.json(result))
}
});
//Get router for individual student
app.get('/:id',function(req,res){
var sql="SELECT* from students where id=?";
var value=req.params.id;
con.query(sql,[value],function(err,result)
if(err) throw err;
{result.status(200);
res.json(result);});});


//API to create a student record

app.post('/',function(req, res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(400);
res.json({message:" Bad Request");}
else{
con.query("INSERTinto students(name,sex,age) 
Values(req.body.name,req.body.sex,req.body.age)",function(err,result)
{if(err)throw err;
result.status(200);
console.log(result);});

//API to update individual student record
app.get('/:id',function(req,res){
con.query("SELECT*from students where id=req.params.id",function(err,result){if(err)throw err;
app.put('/:id',function(req,res){
if(!req.body.name||!req.body.age||!req.body.sex){
res.status(400);
res.json({message:"Bad Request"});
else{
var sql="update students where id=req.params.id";
Con.query(sql,function(err,result){if(err)throw err;
console.log(result.affected + row +'updated');});
}
});
//API to delete a student record
app.delete('/:id', function(req,res){
var sql='DELETE from students where id=req.params.id';
con.query(sql,function(err,result){if(err)throw err;
console.log(result.affected row+'updated');});
});

app.listen(3000, function(){
console.log('server is
listening at port 3000');





