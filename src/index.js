const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3500);
app.set("json spaces", 2);
//middleware

    //muestra { tipo de peticion , codigo de servidor, tiempo de respuesta y peso}
    app.use(morgan("dev")); 

    //admite los datos ingresado en los input de los formularios (nada pesado)
    app.use(express.urlencoded({extended : false}));

    //permite admitir datos en formato json
    app.use(express.json());


//routes
app.use(require("./routes/rutas"));
app.use("/api/movies/",require("./movies"));
app.use("/api/users/",require("./routes/user"));

//starting the server  
app.listen(app.get("port"), () => {
    console.log('ah ingresado al puerto'+ app.get("port"));
});