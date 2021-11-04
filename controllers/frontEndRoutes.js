const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Survey} = require("../models")

router.get("/",(req,res)=>{
    let landingpage = true
    if(!req.session.user){
        res.render("landingpage",{
            landingpage:landingpage
        })
        return
    }
    res.redirect("/profile")  
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    User.findOne({
        where: {
            id:req.session.user.id
        },
        include: [Survey],
        attributes:{
            include: [
                [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate']
            ]
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("profile",{
            user:hbsUser
        })
    })
})

module.exports = router