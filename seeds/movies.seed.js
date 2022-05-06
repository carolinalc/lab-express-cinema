

// 1. conectar a la base de datos
require("../db");

const async = require("hbs/lib/async");
// 2. usar la herramienta para acceder a la base de datos
const moviesModel = require("../models/Movies.model")
const moviesArr = require("./movies.json")


const addMovies = async () => {
    try{

     await moviesModel.insertMany(moviesArr)
     console.log("Todas las pelis han sido agregadas")

    }
    catch(err) { 
        console.log(err)}
}

addMovies()