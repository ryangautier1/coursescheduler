const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Course
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  findCourses: function(req, res) {
    let limit;
    // if a limit has been passed, apply the limit
    if (req.query.limit) {
      limit = parseInt(req.query.limit);
    }

    // if a department has been passed
    if (req.query.department !== undefined) {
      db.Course
      .find({department: req.query.department})
      .limit(limit)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
    }
    // if no search terms are given, return all courses for now
    else {
      db.Course
      .find(req.query)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
    }

    
  },
  findById: function(req, res) {
    db.Course
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTitle: function(req, res) {
    db.Course
      .find({title: req.query.title})
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Course
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};