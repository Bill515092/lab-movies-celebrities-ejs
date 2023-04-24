const { Schema, model } = require("mongoose");

const celebSchema = new Schema({
  name: "string",
  occupation: "string",
  catchPhrase: "string",
});

const Celeb = model("Celeb", celebSchema);

module.exports = Celeb;
