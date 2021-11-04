const router = require('express').Router();
const userRoutes = require("./user-routes")
const imageRoutes = require("./image-routes")
const surveyRoutes = require("./survey-routes")

router.use("/users",userRoutes)
router.use("/images",imageRoutes)
router.use("/surveys",surveyRoutes)

module.exports = router