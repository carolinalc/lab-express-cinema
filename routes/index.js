const express = require('express');
const { response } = require('../app');
const router = express.Router();

const movieModel = require("../models/Movies.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/Movie", (req, res, next) => {
movieModel.find()
.then((response) =>{
    console.log(response)

    res.render("movies.hbs", {
        moviesList: response
    })
})
.catch((err) => {
    console.log(err)
})
})



router.get("/Movie/:movieId", async (req, res, next) => {

    //1. obtener el id del pokemon que el usuario quiere
    const { movieId } = req.params
    
    try {
    //2. bucar la info en la DB
      const response = await movieModel.findById(movieId)
      console.log(response)
    //3. renderizar la vista al usuario con el pokemon
    res.render("movies-info.hbs", {
      movieInfo: response
    })
    }
    catch(err){
      console.log(err)
    }
    })
    

module.exports = router;
