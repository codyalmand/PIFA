var db = require("../models");
const router = require("express").Router();

//Route for creating new event
router.post("/addpost", function (req, res) {
  db.Post.create({
    title: req.body.title,
    description: req.body.description,
    user_id: req.body.user_id
  })
    .then(function () {
      res.redirect(307, "/");
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

router.get("/posts/user/:user_id", function (req, res) {
  db.Post.findAll({
    where: {
      user_id: req.params.user_id
    }
  }).then(function (dbEvent) {
    res.json(dbEvent);
  });
});

router.delete("/posts/:id", function (req, res) {
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

router.delete("/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }

  }).then(function (dbEvent) {
    res.json(dbEvent);
  })

})

module.exports = router;
