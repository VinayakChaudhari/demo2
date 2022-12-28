const express=require("express");
const app=express();
const path=require("path");
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,resp)=>{

    
resp.sendFile(path.join(__dirname,'index.html'))

})
app.listen(3001);
console.log("server listinng....")