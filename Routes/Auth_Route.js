const express= require('express');
const app= express.Router();
const UserModel= require('../Modal/User_Model');
app.post('/register',async (req,res)=>{
const {name,email,password} = req.body;
const isUserExist= await UserModel.findOne({email})
    try{
if(isUserExist){
    return res.send({message:'Email already exists'})
}else{
    const User = await UserModel.create({name,email,password});
    return res.status(201).send({message:"Successfully registered"})}
    }
    catch(err){
        res.send('err')
    }
})


app.post('/login',async (req,res)=>{
    const {name,email,password} = req.body;
    const isUserExist= await UserModel.findOne({email})
    console.log(isUserExist)
try{
    if(isUserExist){
        if(isUserExist.password==password)
        {
            req.body.userId=isUserExist._id
            return res.status(201).send({message:'Successfull login'})
        }else{
            return res.send({message:'Incorrect credientials'})

        }
        
    }else{
        return res.send({message:"Successfully registered"})}
}
catch(err){
    res.send('err')
}
})





module.exports = app