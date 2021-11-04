const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Survey,Image} = require("../models")

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

router.get("/userimage",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Image.findAll({
        where: {
            userId:req.session.user.id
        }
    }).then(imgData=>{
        const hbsImg = imgData.map(img=>img.get({plain:true}))
        res.render("userimage",{
            img:hbsImg
        })
    })
})

router.get("/userimage/:id",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Image.findOne({
        where: {
            id:req.params.id
        }
    }).then(imgData=>{
        const hbsImg = imgData.get({plain:true})
        res.render("userimagebyid",{
            img:hbsImg
        })
    })
})

router.get("/updateprofile",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    User.findOne({
        where: {
            id:req.session.user.id
        },
        include: [Survey]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("updateprofile",{
            user:hbsUser
        })
    })
})

router.get("/signup",(req,res)=>{
    let landingpage = true
    res.render("signup",{
        landingpage:landingpage
    })
})

router.get("/survey",(req,res)=>{
    res.render("survey")
})

module.exports = router