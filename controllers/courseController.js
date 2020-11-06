const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Course
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Course
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Course
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};