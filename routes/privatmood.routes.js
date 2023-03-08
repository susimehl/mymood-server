const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Moods = require("../models/Moods.model");



//  POST /api/projects  -  Creates a new project
//router.post("/privatmoods", (req, res, next) => {
  //const { title, description } = req.body;

//  Project.create({ title, description, tasks: [] })
//   .then((response) => res.json(response))
 //   .catch((err) => res.json(err));
//});

//  GET /api/projects -  Retrieves all of the projects
//router.get("/privatmoods", (req, res, next) => {
 // Project.find()
  //  .populate("tasks")
// 

// DELETE  /api/projects/:projectId  -  Deletes a specific project by id
router.delete("/privatmoods/:privatmoodId", (req, res, next) => {
  const { privatmoodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(privatmoodId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Moods.findByIdAndRemove(privatmoodId)
    .then(() =>
      res.json({
        message: `Moods with ${privatmoodId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;