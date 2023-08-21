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

const signIn= async (req,res)=>{
    try{
        const response= await userService.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            message: "Successfully signedIn the user",
            data: response,
            success:true,
            err: {}
        }) ;
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Not able to signIn",
            success: false,
            err:error
        });
    }
}

const isAuthenticated=async (req,res)=>{
    try{
        const token= req.headers['x-access-token'];
        const response= await userService.isAuthenticated(token);
        return res.status(201).json({
            message: "user is authenticated and token is valid",
            data: response,
            success:true,
            err: {}
        }) ;
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"Something went wrong",
            success: false,
            err:error
        });
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated
}