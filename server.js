const express=require("express");
const app=express();
app.get("/",(res,resp)=>{
res.sendFile("./index.html")

})
app.listen(3001);
console.log("server listinng....")