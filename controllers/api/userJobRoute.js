const router = require("express").Router();
const { Job } = require("../../models");

// GET all jobs
router.get("/", async (req, res) => {
  const jobData = await Job.findAll().catch((err) => {
    res.json(err);
  });
  // res.status(200).json(jobData);
  const Jobs = jobData.map((Job) => Job.get({ plain: true }));
  res.render("responsiveJobs", { Jobs, stylesheetName: `responsive.css` });
});

router.get("/apply", async (req, res) => {
  res.render("jobAppForm");
});

router.get("/addjob", async (req, res) => {
  res.render("postjobs");
});

router.get("/login", async (req, res) => {
  res.render("login", { stylesheetName: `second.css` });
});

router.get("/signup", async (req, res) => {
  res.render("signup", { stylesheetName: `second.css` });
});

// GET one job
router.get("/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id);

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
