const { Router } = require("express");
const router = Router();
const _ = require("underscore");
let json = require("../mov.json");
const { route } = require("./routes/rutas");

console.log(json);

router.get("/", (req, res) => {
    res.json(json);
});

router.post("/", (req, res) => {
    // req.body objeto por el cual el servidor recibe los datos
    console.log(req.body);
    //almacenamos las en las varibales los datos enviados al servidor
    let { name, year, rating } = req.body;

    //validamos que no sean nulos
    if (name && year && rating) {
        var id = json.length;
        // con ...req.body almacenamos en el objeto todo lo obtenido en el servidor
        //como segundo parametro establecemos el Id con el caul alamcenamos el dato
        var newMovie = { ...req.body, id };
        json.push(newMovie);
        //enviamos las peliculas actualizadas
        res.json(json);
    } else {
        //definimos el codigo de estado y el mensaje
        res.status(500).send("ocurrio ub error interno");
    }

});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, year, rating } = req.body;
    if (name && year && rating) {
        _.each(json, (pel, i) => {
            if (pel.id == id) {
                pel.name = name;
                pel.year = year;
                pel.rating = rating;
            }
        });
        res.json(json);
    }else {
        //definimos el codigo de estado y el mensaje
        res.status(500).send("ocurrio ub error interno");
    }

});

router.delete("/:id", (req, res) => {
    let { id } = req.params;
    // each(arreglo, (peliculatemporal,indice))
    _.each(json, (pel, i) => {
        if (pel.id == id) {
            // splice(indice,cantidad) de peliculas que quiero eliminar
            json.splice(i, 1);
        }
    });
    res.send("deleted");
});

module.exports = router;

