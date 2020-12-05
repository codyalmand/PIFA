var db = require("../../models");
const router = require("express").Router();
const nodemailer = require('nodemailer');

//Route for creating new event
router.post("/posts", function (req, res) {
  db.Post.create({
    title: req.body.title,
    description: req.body.description,
    UserId: req.body.UserId,
    email: req.body.email
  })
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

router.get("/posts", function (req, res) {
  db.Post.findAll({}).then(function (dbEvent) {
    res.json(dbEvent);
  });
});

router.get("/posts/:user_id", function (req, res) {
  //console.log(req)
  db.Post.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function (dbEvent) {
    res.json(dbEvent);
  });
});

router.delete("/posts/:id", function (req, res) {
  console.log(req.params)
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.end();
  });
});

// app.get("/events/:id", function(req, res) {
//   db.Post.findOne({
//     where: {
//       genre: req.params.id
//     }
//   }).then(function(dbEvent) {
//     res.json(dbEvent);
//   });
// });


router.put("/posts", function (req, res) {
  db.Post.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
});

// router.delete("/posts/:id", function (req, res) {
//   db.Post.destroy({
//     where: {
//       id: req.params.id
//     }

//   }).then(function (dbEvent) {
//     res.json(dbEvent);
//   })

// })

router.post("/email", function (req, res) {
    console.log(req.body.email);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'austinpayitforward@gmail.com',
          pass: 'Ihatereact1!'
      }
    });
    
    let mailOptions = {
      from: 'austinpayitforward@gmail.com',
      to: req.body.email,
      subject: 'Help is coming!',
      text: `${req.user.username} wants to help you with your favor!
      You can get in contact with him here: ${req.user.email}`
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if(err) {
          console.log('We got an error', err)
          res.send(500);
      } else {
          console.log('Email sent!');
          res.send(200);
      }
  });
});

module.exports = router;
