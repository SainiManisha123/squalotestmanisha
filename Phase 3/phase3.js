const request=require('request')

const url='https://jsonplaceholder.typicode.com/users/'

request({ url: url, json:true},(error,response)=>{
   var data = response.body
   console.log(data) 
})

var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req, res){
   res.sendFile(path.join(__dirname + '/data.html'));
});

app.listen(8000);