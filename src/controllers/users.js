const { Router } = require("express");
const userModel = require("../model/userModel");

const userRouter = Router();

userRouter.post('/create-user', async(req,res,next)=>{
    try{
        const {user, email, password, dob} = req.body;
        

        
        if(user===""){
            return res.status(400).json({message:"Username cannot be empty"});
        }

        
        if(email===""){
            return res.status(400).json({message:"Email cannot be empty"});
        }

        
        if(password===""){
            return res.status(400).json({message:"Password length should be greater than 8 or less than 16"});
        }

        
        const newUser = userModel.create({
            user:user,
            email: email,
            password: password,
            dob: dob,
        });

        console.log(newUser);

        
        return res.status(201).json({message:"Successfully created"});
    }
    catch(err){
        console.log(err);
    }

});

module.exports = userRouter;