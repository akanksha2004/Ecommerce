var express=require("express");
var app=express();


var productController=function(req,res){

        var products=[
            {id:1,title:"Rose",description:"Valentines Flower",unitPrice:10,quantity:2500},
            {id:2,title:"Marigold",description:"Festival Flower",unitPrice:2,quantity:30000},
            {id:3,title:"Lotus",description:"Worship Flower",unitPrice:30,quantity:4400},
            {id:4,title:"Jasmine",description:"Smellin Flower",unitPrice:10,quantity:20000},
            {id:5,title:"Parijat",description:"Heaven Flower",unitPrice:5,quantity:40000},
            
        ];

        res.send(products);
}

app.get("/products",productController);

var server=app.listen(9000,function(){

    console.log("Server Started on Port : 9000");
});