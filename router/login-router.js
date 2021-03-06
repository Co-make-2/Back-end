const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../model/user-model");

const router = express.Router();

router.post("/", async(req,res) => {
    try{
        const {username, password} = req.body
        const user = await db.findBy({ username }).first()
       // const userId = await db.findBy({ username }).select({ id })

        if(!user){
            return res.status(401).json({ message:"Invalid username"})
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if(!passwordValid){
            return res.status(401).json({ message:"Invalid password"})
        }
        const token = jwt.sign({
            userId: user.id
        },process.env.JWT_SECRET||"it can't rain all the time");
        res.cookie("token",token)
        res.status(200).json({token , username:user.username, userId:user.id })

    }catch(err){
        console.log("error from login call",err)
        res.status(500).json({ message:"could not login"})
    }
});

module.exports = router;