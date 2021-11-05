const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Survey,Image} = require("../models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const newMatches = require("../utils/newMatches")


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
    newMatches(req,res)
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

router.get("/matches",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    newMatches(req,res)
    User.findOne({
        where: {
            id:req.session.user.id
        },
        include:[{model: User, as: "match_one"}]
    }).then(userData=>{
        const hbsUser = userData.match_one.map(data=>data.get({plain:true}))
        const userId = []
        for (let i = 0; i < hbsUser.length; i++) {
            userId.push(hbsUser[i].id)        
        }
        Survey.findAll({
            where: {
                user_id: {
                    [Op.in]:userId
                }
            },
            include:[User]
        }).then(surveyData=>{
            const hbsSurvey = surveyData.map(survey=>survey.get({plain:true}))
            User.findOne({
                where: {
                    id:req.session.user.id
                },
                include:[{model: User, as: "match_two"}]
            }).then(twoData=>{
                const hbsTwo = twoData.match_two.map(two=>two.get({plain:true}))
                const twoID = []
                for (let i = 0; i < hbsTwo.length; i++) {
                    twoID.push(hbsTwo[i].id)               
                }
                Survey.findAll({
                    where: {
                        user_id: {
                            [Op.in]:twoID
                        }
                    },
                    include:[User]
                }).then(twoSurveyData=>{
                    const hbsTwoSurvey = twoSurveyData.map(twosurvey=>twosurvey.get({plain:true}))
                    res.render("matches",{
                        pending:hbsSurvey,
                        approved:hbsTwoSurvey
                    })
                })
            })
        })
    })
})

router.get("/matches/:id",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    User.findOne({
        where: {
            id:req.params.id
        },
        include: [Survey],
        attributes:{
            include: [
                [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate']
            ]
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("appmatch",{
            user:hbsUser
        })
    })
})

router.get("/pending/:id",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    User.findOne({
        where: {
            id:req.params.id
        },
        include: [Survey],
        attributes:{
            include: [
                [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate']
            ]
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("pending",{
            user:hbsUser
        })
    })
})

module.exports = router