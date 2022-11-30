const router = require("express").Router();
const userRoutes = require("../controllers/api/userRoutes");
const userJobRoute = require("../controllers/api/userJobRoute");

router.use("/api/users", userRoutes);
router.use("/api", userJobRoute);

module.exports = router;
