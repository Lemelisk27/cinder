const express = require('express');
const router = express.Router();
const {User,Image,Survey} = require("../../models")
const sequelize = require('../../config/connection')

router.put("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Survey.update(
        {
            birthdate:req.body.birthdate,
            gender:req.body.gender,
            pref_gender:req.body.pref_gender,
            bio:req.body.bio,
            relationship:req.body.relationship,
            goal:req.body.goal,
            language:req.body.language,
            type:req.body.type,
            worker:req.body.worker,
            ideal_date:req.body.ideal_date
        },
        {
            where: {
                user_id:req.body.user_id
            }
        }
    ).then(updateSurvey=>{
        res.json(updateSurvey)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router