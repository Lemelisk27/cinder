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
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            req.session.destroy()
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
                req.session.destroy
                res.redirect("/")
            }
        }
    })
})

module.exports = router