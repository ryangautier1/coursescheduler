const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();

router.post("/login", passport.authenticate("userlocal"), function(req, res) {
  res.json(req.user);
});

router.post("/signup", function(req, res) {
  db.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
    .then(function () {
      res.redirect(307, "/api/user-login/login");
    })
    .catch(function(err) {
      console.log(err);
      res.status(401).json(err);
    });
});

router.get("/logout", function(req, res) {
  req.logout();
  req.session.destroy(function(err) {
    res.json({});
  });
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.status(401).json({});
  } else {
    // Otherwise send back the user's username and id
    res.json({
      id: req.user._id,
      username: req.user.username,
      name: req.user.name,
      registered: req.user.registered,
      userType: req.user.userType,
      amountOwed: req.user.amountOwed,
      planners: req.user.planners
    });
  }
});

module.exports = router;