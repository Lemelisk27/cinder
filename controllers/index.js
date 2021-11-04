const router = require('express').Router();
const frontEndRoutes = require("./frontEndRoutes")
const apiRoutes = require("./api")

router.use(frontEndRoutes)
router.use("/api",apiRoutes)

module.exports = router