const router = require("express").Router();
const userRoutes = require("./user");
const userLoginRoutes = require("./userLogin");
const professorRoutes = require("./professor");
const courseRoutes = require("./course");


// Routes
router.use("/user", userRoutes);
router.use("/user-login", userLoginRoutes);
router.use("/professor", professorRoutes);
router.use("/course", courseRoutes);


module.exports = router;