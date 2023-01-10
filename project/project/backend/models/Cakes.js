const mongoose = require("mongoose");

const cakeSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  order: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  
});

const Cake = mongoose.model("Cake", cakeSchema);
module.exports = Cake;
