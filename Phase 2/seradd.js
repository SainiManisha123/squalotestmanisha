var app = require('express')();
var http=require('http').Server(app);

app.get('/',function(req,res){
    res.sendfile('index.html');

})
app.get('/download', function(req,res){
    res.download(__dirname + '/phase1excel.xlsx','phase1excel.xlsx');

})
http.listen(4200,function(){
    console.log('listening to #4200');
})