const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    res.send("The output is " + a *b);

});




app.listen(3000,function(){
    console.log("Server is starting");
});