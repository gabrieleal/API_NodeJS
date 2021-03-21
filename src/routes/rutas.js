const { Router } = require("express");
const fs =require("fs");
const router = Router();

//routes
router.get("/",(req,res)=>{
     fs.readFile("./src/page.html", "utf-8",(err,html)=>{
         res.writeHead(300,{"content-type" : "text/html"});
         res.end(html);
     });
   
});

router.get("/user",(req,res)=>{
    let user={
        "nombre" : "gabriel",
        "website" : "GLDevolper.com"
    };
    res.json(user);
});

// exporto para utilizarlo desde otro archivo
module.exports= router;