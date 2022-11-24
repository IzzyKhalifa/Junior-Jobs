const router = require("express").Router();
const { Job } = require("../../models");

// models\jobpost.js
// C:\Users\James\Junior-jobs\models\jobpost.js

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobData = await Job.findAll();
    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one job
router.get("/:id", async (req, res) => {
  try {
    const jobData = await job.findByPk(req.params.id, {
      include: [{ model: Job }],
    });

    if (!Job) {
      res.status(404).json({ message: "No job found with that id!" });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
