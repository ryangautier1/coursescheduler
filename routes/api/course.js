const router = require("express").Router();
const courseController = require('../../controllers/courseController');

// Match with /api/course
router
    .route("/")
    .get(courseController.findCourses)
    .post(courseController.create);

// Match with /api/course/:id
router
    .route("/:id")
    .get(courseController.findById);

// Match with /api/course/:title
router
    .route("/title/:title")
    .get(courseController.findByTitle);

module.exports = router;