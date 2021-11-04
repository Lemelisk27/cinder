const express = require('express');
const router = express.Router();
const {User,Survey} = require("../../models")
const sequelize = require('../../config/connection');

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

module.exports = router