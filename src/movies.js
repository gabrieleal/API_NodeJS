const { Router } = require("express");
const router = Router();

let json = require("../mov.json");

console.log(json); 

router.get("/",(req,res) =>{
    res.json(json);
});

router.post("/",(req,res)=>{
    // req.body objeto por el cual el servidor recibe los datos
    console.log(req.body);
    //almacenamos las en las varibales los datos enviados al servidor
    let {name, year, rating } = req.body;

    //validamos que no sean nulos
    if(name && year && rating){
        var id = json.length + 1;
        // con ...req.body almacenamos en el objeto todo lo obtenido en el servidor
        //como segundo parametro establecemos el Id con el caul alamcenamos el dato
        var newMovie={...req.body, id};
        json.push(newMovie);
        //enviamos las peliculas actualizadas
        res.json(json);
    }else{
        //definimos el codigo de estado y el mensaje
        res.status(500).send("ocurrio ub error interno");
    }
    
});

module.exports = router;

