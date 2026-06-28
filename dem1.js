var express= require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get("/",(req,res)=>{
    //res.send("Hello");
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname+"/public/contact.html"));
})

app.listen(3000,()=>{
    console.log("Server started");
})