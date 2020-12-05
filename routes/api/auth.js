// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");
const nodemailer = require('nodemailer');
//const LandingPage = require('../../client/src/pages/LandingPage');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'austinpayitforward@gmail.com',
      pass: 'Ihatereact1!'
  }
});

let mailOptions = {
  from: 'austinpayitforward@gmail.com',
  to: 'diosdado.mario@gmail.com',
  subject: 'Testing',
  text: 'it works!'
};


// Route for logging in
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  })
    .then(function () {

      let mailOptions = {
        from: 'austinpayitforward@gmail.com',
        to: req.body.email,
        subject: 'Welcome to Pay It Forward',
        text: `Welcome ${req.body.username}! We are here to work together to help the people of Austin.`
      };

      transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log('We got an error', err)
        } else {
            console.log('Email sent!');
        }
    });
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/LandingPage");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    console.log("Failed")
    // The user is not logged in, send back an empty object
    res.status(401).json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
      username: req.user.username
    });
  }
});

module.exports = router;
