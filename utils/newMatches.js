const express = require('express');
const router = express.Router();
const {User,First_Match,Second_Match,Matched_With, Survey} = require("../models")
const sequelize = require("../config/connection")
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const newMatches = (req,res) => {
    let prevArray = []
    let userGender = ""
    let userPref = []
    let matchedUsers = []
    Matched_With.findAll({
        where: {
            user_1:req.session.user.id
        }
    }).then(prevMatch=>{
        prevArray.push(req.session.user.id)
        for (let i = 0; i < prevMatch.length; i++) {
            prevArray.push(prevMatch[i].user_2)          
        }
        User.findAll({
            where: {
                id:req.session.user.id
            },
            include: [Survey]
        }).then(userData=>{
            userGender=userData[0].survey.gender
            if (userData[0].survey.pref_gender === "Both"){
                userPref = ["Male","Female"]
            }
            else {
                userPref.push(userData[0].survey.pref_gender)
            }
            User.findAll({
                include: [{model: Survey,
                    where: {
                        gender: {
                            [Op.in]:userPref
                        },
                        pref_gender: {
                            [Op.or]:[userGender,"Both"]
                        }
                    }
                }],
                where: {
                    id: {
                       [Op.notIn]:prevArray
                    }
                }
            }).then(userData=>{
                for (let i = 0; i < userData.length; i++) {
                    matchedUsers.push(userData[i].id)
                }
                for (let i = 0; i < matchedUsers.length; i++) {
                    First_Match.create({
                        user_1:req.session.user.id,
                        user_2:matchedUsers[i]
                    }).then(matchData=>{
                        Matched_With.create({
                            user_1:req.session.user.id,
                            user_2:matchedUsers[i]
                        }).then(withData=>{
                            console.log(matchData + withData)
                        }).catch(err=>{
                            console.log(err)
                            res.status(500).json({message:"An Error Occured"})
                        })
                    }).catch(err=>{
                        console.log(err)
                        res.status(500).json({message:"An Error Occured"})
                    })
                }
            }).catch(err=>{
                console.log(err)
                res.status(500).json({message:"And Error Occured",err:err})
            })
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occured",err:err})
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
}

module.exports = newMatches