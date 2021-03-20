const { Router } = require("express");
const router = Router();

//routes
router.get("/",(req,res)=>{
    res.send("Hola, Ingreso a la pagina principal");
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