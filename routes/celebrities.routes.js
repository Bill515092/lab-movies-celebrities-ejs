const router = require("express").Router();
const Celeb = require("../models/Celebrity.model");

router.get("/create", (req, res, next) => {
  res.render("./celebrities/newCelebrity");
});

router.post("/create", async (req, res) => {
  try {
    const newCelebrity = await Celeb.create(req.body);
    res.redirect("/celebrities/celebrities");
  } catch (error) {
    console.log(error);
    res.redirect("/celebrities/create");
  }
});

router.get("/celebrities", async (request, response) => {
  try {
    const allCelebs = await Celeb.find();
    console.log(allCelebs);

    response.render("./celebrities/celebrities", { celebs: allCelebs });
  } catch (error) {
    console.log(error);
  }
});

// all your routes here

module.exports = router;
