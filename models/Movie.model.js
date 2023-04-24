const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: "string",
  genre: "string",
  plot: "string",
  cast: "string",
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
