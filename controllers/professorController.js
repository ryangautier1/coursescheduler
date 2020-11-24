const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Professor
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Professor
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Professor
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};