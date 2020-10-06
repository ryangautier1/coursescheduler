const router = require("express").Router();
const courseController = require('../../controllers/courseController');

// Match with /api/course
router
    .route("/")
    .get(courseController.findAll)
    .post(courseController.create);

// Match with /api/course/:id
router
    .route("/:id")
    .get(courseController.findById);

module.exports = router;