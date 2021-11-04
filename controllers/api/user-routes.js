const express = require('express');
const router = express.Router();
const {User,Survey} = require("../../models")
const sequelize = require('../../config/connection')
const bcrypt = require("bcrypt")

router.get("/",(req,res)=>{
    User.findAll({
        include:[Survey]
    }).then(userData=>{
        const hbsUser = userData.map(user=>user.get({plain:true}))
        res.json(hbsUser)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.post("/login",(req,res)=>{
    req.session.destroy
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            res.redirect("/")
        }
        else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    email:foundUser.email,
                    id:foundUser.id
                }
                res.json(foundUser)
            }
            else{
                res.redirect("/")
            }
        }
    })
})

router.post("/signup",(req,res)=>{
    User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(newUser=>{
        res.json(newUser)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

router.post("/survey",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Survey.create({
        birthdate:req.body.birthdate,
        gender:req.body.gender,
        pref_gender:req.body.pref_gender,
        goal:req.body.goal,
        relationship:req.body.relationship,
        language:req.body.language,
        type:req.body.type,
        worker:req.body.worker,
        ideal_date:req.body.ideal_date,
        bio:req.body.bio,
        user_id:req.session.user.id
    }).then(newSurvey=>{
        res.json(newSurvey)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router