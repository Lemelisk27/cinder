const express = require('express');
const router = express.Router();
const {User,First_Match,Second_Match,Matched_With, Survey} = require("../../models")
const sequelize = require('../../config/connection')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

router.get("/pending",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "match_one"}]
    }).then(pendingMatch=>{
        if(pendingMatch.length){
            res.json(pendingMatch)
        }
        else {
            res.status(404).json({message:"No Pending Matches Found"})
        }
    })
})

router.get("/approved",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "match_two"}]
    }).then(aprovedMatch=>{
        if(aprovedMatch.length){
            res.json(aprovedMatch)
        }
        else {
            res.status(404).json({message:"No Approved Matches Found"})
        }
    })
})

router.get("/previous",(req,res)=>{
    User.findAll({
        include:[{model: User, as: "matched_with"}]
    }).then(previousMatch=>{
        if(previousMatch.length){
            res.json(previousMatch)
        }
        else {
            res.status(404).json({message:"No Previous Matches Found"})
        }
    })
})

router.delete("/pending/aprove",(req,res)=>{
    First_Match.destroy({
        where: {
            user_1:req.session.user.id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        Second_Match.create({
            user_1:req.session.user.id,
            user_2:req.body.user_2
        }).then(createMatch=>{
            res.json(delMatch + createMatch)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occured",err:err})
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.delete("/pending/reject",(req,res)=>{
    First_Match.destroy({
        where: {
            user_1:req.session.user.id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        res.json(delMatch)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.delete("/approved",(req,res)=>{
    Second_Match.destroy({
        where: {
            user_1:req.session.user.id,
            user_2:req.body.user_2
        }
    }).then(delMatch=>{
        res.json(delMatch)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router