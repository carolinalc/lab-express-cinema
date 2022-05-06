const { type } = require("express/lib/response");
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: [{
        type: String
    }],
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: [{
        type: String
    }]
  }

);

const movies = model("Movie", movieSchema);

module.exports = movies;