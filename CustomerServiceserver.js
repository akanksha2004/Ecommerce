var express=require("express");
var app=express();


var customerController=function(req,res){

        var customers=[
            {firstname:"Akanksha",lastname:"Narkhede",age:24},
            {firstname:"Rutuja",lastname:"Patil",age:20},
            {firstname:"Kajal",lastname:"ABC",age:30},
            {firstname:"KKK",lastname:"LLL",age:16},
            {firstname:"Tanishka",lastname:"PPP",age:12}
        ];

        res.send(customers);
}


app.get("/customers",customerController);

var server=app.listen(9500,function(){

    console.log("Server Started on Port : 9500");
});