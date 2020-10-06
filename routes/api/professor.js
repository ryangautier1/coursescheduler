const router = require("express").Router();
const professorController = require('../../controllers/professorController');

// Match with /api/professor
router
    .route("/")
    .get(professorController.findAll)
    .post(professorController.create);

// Match with /api/professor/:id
router
    .route("/:id")
    .get(professorController.findById);

module.exports = router;