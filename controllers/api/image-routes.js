const express = require('express');
const router = express.Router();
const {User,Image,Survey} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    User.findAll({
        include:[Image]
    }).then(imgData=>{
        const hbsImage = imgData.map(img=>img.get({plain:true}))
        res.json(hbsImage)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Image.create({
        url:req.body.url,
        userId:req.session.user.id
    }).then(newImg=>{
        res.json(newImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.put("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Survey.update(
        {
            profile_pic:req.body.profile_pic
        },
        {
            where: {
                user_id:req.session.user.id
            }
        }
    ).then(updateProfileImg=>{
        res.json(updateProfileImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.delete("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Image.destroy({
        where: {
            id:req.body.id
        }
    }).then(delImg=>{
        res.json(delImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router