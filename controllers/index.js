const router = require("express").Router();
const userRoutes = require("../controllers/api/userRoutes");
const userJobRoute = require("../controllers/api/userJobRoute");
const jobRoute = require("../controllers/api/jobRoute");

router.use("/api/users", userRoutes);
router.use("/api/jobs", jobRoute);
router.use("/api", userJobRoute);

module.exports = router;
