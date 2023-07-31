const express=require("express")
const bodyParser=require("body-parser")
const {check,validationResult} = require("express-validator")

const app=express();
const urlencodedParser = bodyParser.urlencoded({extended:true});

app.use("/public",express.static(__dirname+"/public"));



app.set("view engine","ejs");


const getapi=require("./routes/getapi");
const postapi=require("./routes/postapi");

app.use("",getapi)
app.use("",urlencodedParser,[
    check("name","this must be atleast 3 characters long and max 30 characters long")
    .exists()
    .isLength({min:3,max:30})
],postapi)


app.listen(4000,(err)=>{
    if(err)
    {
        console.log("server crashed");
    }
    console.log("server started at PORT 4000");
})

