const { Router } = require("express");
const router = Router();

const fetch = require("node-fetch");
var json = require("../../user.json");

// router.get("/",async (req,res)=>{
//     //como fetch realiza una busqueda asincronica, agregamos async en la cabecera y 
//     //un aeait para esperar a obtener todos los datos y luesgo mostrarlo
//     var response = await fetch("https://jsonplaceholder.typicode.com/users");
//     var users = await response.json();
//     res.json(users);
// });
router.get("/", (req,res)=>{
    //como fetch realiza una busqueda asincronica, agregamos async en la cabecera y 
    //un aeait para esperar a obtener todos los datos y luesgo mostrarlo
    var users =  json;
    res.json(users);
});

router.post("/", (req, res) => {
    // req.body objeto por el cual el servidor recibe los datos
    console.log(req.body);
    //almacenamos las en las varibales los datos enviados al servidor
    let { name, username } = req.body;

    //validamos que no sean nulos
    if (name && username) {
        var id = json.length;
        // con ...req.body almacenamos en el objeto todo lo obtenido en el servidor
        //como segundo parametro establecemos el Id con el caul alamcenamos el dato
        var newUser = { ...req.body,id };
        json.push(newUser);
        //enviamos las peliculas actualizadas
        res.json(json);
    } else {
        //definimos el codigo de estado y el mensaje
        res.status(500).send("ocurrio ub error interno");
    }

});







module.exports = router;
