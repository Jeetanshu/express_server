const { response } = require('express');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){
    //console.log(request)
    //response.send("Hello");
    //response.send("<h1>Hello</h1>");
    response.sendFile(__dirname + "/index.html");
})

app.post("/",function(request,response){
    //console.log(request.body);
    //console.log(request.body.num1);
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    response.send("Result is:" + result);
})

app.get("/contact",function(request,response){
    response.send("<h1>Contact Us:email@gmail.com</h1>");
})

app.get("/about",function(request,response){
    response.send("<h1>About: Nothing</h1>");
})

app.get("/hobbies",function(request,response){
    response.send("<h1>Hobbies: Nothing</h1>");
})

app.listen("3000",function(){
    console.log("Server is started on port 3000");
});