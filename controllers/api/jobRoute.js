const router = require("express").Router();
const { Job } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const jobData = await Job.create(req.body);

    req.session.save(() => {
      req.session.user_id = jobData.id;
      req.session.logged_in = true;

      res.status(200).json(jobData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  const jobData = await Job.findAll().catch((err) => {
    res.json(err);
  });
  res.status(200).json(jobData);
});

module.exports = router;
