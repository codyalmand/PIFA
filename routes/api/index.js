const router = require("express").Router();
const postRoutes = require("./posts");
const authRoutes = require("./auth");


// Book routes
router.use("/posts", postRoutes);
router.use("/", authRoutes);

module.exports = router;