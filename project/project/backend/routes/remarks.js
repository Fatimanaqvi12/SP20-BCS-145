const express = require("express");
const router = express.Router();
const Remarks = require("../models/Remarks");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the remarks using: GET "/api/remarks/fetchallremarks". Login required
router.get("/fetchallremarks", fetchuser, async (req, res) => {
  try {
    const remarks = await Remarks.find({ user: req.user.id });
    res.json(remarks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

// Route 2: Add a new note using: POST "/api/remarks/addremark". Login required
router.post(
  "/addremarks",
  fetchuser,
  [
    body("title", "Title must be at least 3 chars long").isLength({ min: 3 }),
    body("description", "description must be at least 5 chars long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // if there are errors, return Bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const remarks = new Remarks({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveRemarks = await remarks.save();
      res.json(saveRemarks);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error...!!");
    }
  }
);

// Route 3: Update an existing remarks using: PUT "/api/remarks/updateremark/:id". Login required
router.put("/updateremark/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    // Creating a newremark object
    const newRemark = {};

    if (title) {
      newRemark.title = title;
      console.log(newRemark.title, title);
    }
    if (description) {
      newRemark.description = description;
      console.log(newRemark.description, description);
    }
    if (tag) {
      newemark.tag = tag;
    }

    // Find the note to be updated
    let remark = await Remarks.findById(req.params.id);
    if (!remark) {
      res.status(404).send("Not Found...!");
    }

    if (remark.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed...!!");
    }

    remark = await Remarks.findByIdAndUpdate(
      req.params.id,
      { $set: newRemark },
      { new: true }
    );

    res.json({ remark });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

// Route 4: Delete an existing remark using: DELETE "/api/remarks/deleteremark/:id". Login required
router.delete("/deleteremark/:id", fetchuser, async (req, res) => {
  try {
    // Find the remark to be deleted, and delete it
    let remark = await Remarks.findById(req.params.id);
    if (!remark) {
      return res.status(404).send("Not Found...!");
    }

    // Allow deletion only if user owns this note
    if (remark.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    remark = await Remarks.findByIdAndDelete(req.params.id);
    res.json({ Success: "deleted", remark: remark });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(" Error");
  }
});

module.exports = router;
