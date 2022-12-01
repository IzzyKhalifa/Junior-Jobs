const router = require("express").Router();
const userRoutes = require("../controllers/api/userRoutes");
const userJobRoute = require("../controllers/api/userJobRoute");
const jobRoute = require("../controllers/api/jobRoute");

router.use("/users", userRoutes);
router.use("/jobs", jobRoute);
router.use("/", userJobRoute);

module.exports = router;
