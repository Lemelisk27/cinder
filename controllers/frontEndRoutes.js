const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

router.get("/",(req,res)=>{
    let landingpage = true
    res.render("landingpage",{
        landingpage:landingpage
    })
})

module.exports = router