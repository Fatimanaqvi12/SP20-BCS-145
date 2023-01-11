const express = require("express");
const router = express.Router();
const Cake = require("../models/Cakes");

//router to delete single cake
router.delete("/:id", async (req, res) => {
  let cake = await Cake.findById(req.params.id);
  await cake.delete();
  res.send(cake);
});

//router to update single cake
router.put("/:id", async (req, res) => {
  let cake = await Cake.findById(req.params.id);
  cake.fname = req.body.fname;
  cake.lname = req.body.lname;
  cake.address = req.body.address;
  cake.city = req.body.city;
  cake.number = req.body.number;
  cake.email = req.body.email;
  cake.order = req.body.order;
  cake.time = req.body.time;
  cake.date = req.body.date;
  await cake.save();
  res.send(cake);
});

//router to get single cake
router.get("/:id", async (req, res) => {
  let cake = await Cake.findById(req.params.id);
  res.send(cake);
});

//router to create new cake
router.post("/create", async (req, res) => {
  let cake = new Cake(req.body);
  await cake.save();
  console.log(cake);
  res.send(cake);
});

//router to get all cake
router.post("/fetchallcakes", async (req, res) => {
  let cakes = await Cake.find();
  res.send(cakes);
});

module.exports = router;
