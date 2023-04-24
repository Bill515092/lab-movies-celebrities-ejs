// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celeb = require("../models/Movie.model");

router.get("/movies/create", (req, res, next) => {
  res.render("./movies/new-movie");
});

// all your routes here

module.exports = router;
