const express = require('express')

const router = express.Router()

const user = require("../models/user")

router.get("/update", async (req,res)=>{
     try{
    const newUser = new user({name: "Akshay", age: 22,})

    const users = await newUser.save()
    res.json(users)
     }
     catch(err){
         res.json({Message : err.message });
     }
});

router.get("/fetch", async (req,res)=>{
    try{
   

   const users = await user.find()
   res.json(users)
    }
    catch(err){
        res.json({Message : err.message });
    }
});

module.exports = router;