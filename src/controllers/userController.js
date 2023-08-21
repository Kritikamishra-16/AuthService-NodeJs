const { response } = require('express');
const UserService= require('../services/userService');

const userService= new UserService();

const create= async (req,res)=>{
    try{
        const response= await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            message: "Successfully created a new user",
            data: response,
            success:true,
            err: {}
        })
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Not able to create a new user",
            success: false,
            err:error
        });
    }
}

module.exports={
    create
}