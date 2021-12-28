
// Working with MYSQL Database
//codes in index1.js

//index1.js

var express = require('express');
var app = express();
var mysql = require ('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var con = mysql.createConnection({
host:"localhost",
user:"root",
password:123456,
database:mydb});
con.connect(function (err){
if (err) throw err;
console.log('connected!');
});

//Get router for all Students
app.get('/',function(req, res){
var sql = "SELECT* FROM students";
con.query(sql,function(err,result){
if(err) throw err;
res.status(200);
res.json(result);
});
});
//Get router for individual student
app.get('/:id',function(req,res){
var sql="SELECT* from students where id=?";
var value=req.params.id;
con.query(sql,[value],function(err,result){
if (err) throw err;
result.status(200);
res.json(result);
});
});


//API to create a student record

app.post('/',function(req, res){
if(!req.body.name||!req.body.year||!req.body.gender){
res.status(400);
res.json({message:" Bad Request"});}
else{
var sql = "INSERT INTO students(name,year,gender) VALUES ?";
var val =[req.body.name,req.body.year,req.body.gender];
con.query(sql,[val],function(err,result){
if (err) throw err;
res.status(200);
res.json(result);});}
});

//API to update individual student record
app.put('/:id',function(req,res){
if(!req.body.name||!req.body.year||!req.body.gender){
res.status(400);
res.json({message:"Bad Request"});}
else{
var sql="update students where id=req.params.id";
con.query(sql,function(err,result){
if (err) throw err;
console.log(result.affected + row +'updated');});
}
});
//API to delete a student record
app.delete('/:id', function(req,res){
var sql='DELETE from students where id=req.params.id';
con.query(sql,function(err,result){if(err)throw err;
console.log(result.affected() + 'row updated');});
});

app.listen(3000, function(){
console.log('server is listening at port 3000');});





