const router = require('express').Router();
const userRoutes = require("./user-routes")
const imageRoutes = require("./image-routes")
const surveyRoutes = require("./survey-routes")
const matchRoutes = require("./match-routes")

router.use("/users",userRoutes)
router.use("/images",imageRoutes)
router.use("/surveys",surveyRoutes)
router.use("/matches",matchRoutes)

module.exports = router