const express= require('express');
const app= express.Router();
const UserModel= require('../Modal/User_Model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

app.post('/register',async (req,res)=>{
const {email,password} = req.body;
const isUserExist= await UserModel.findOne({email})
    try{
if(isUserExist){
    return res.send({message:'Email already exists'})
}else{
     await bcrypt.hash(password,3,async function(err,hash){
          if(err) return res.send({message:err.message})
console.log(email,hash)
         const User = await UserModel.create({email,password:hash});
         return res.status(201).send({message:"Successfully registered"})
        })
    }
        }
    catch(err){
        res.send('err')
    }
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const isUserExist= await UserModel.findOne({email})
   
try{
    if(isUserExist){
        bcrypt.compare(password,isUserExist.password,(err,result)=>{

          if(result){
            let token= jwt.sign({ userId:isUserExist._id,email},"setKey")           
              return res.status(201).send({message:'Successfull login',token})            
            }
              
            return res.send({message:'Incorrect credientials'})
        })     
        
    }else{
        return res.send({message:"Registered first"})}
}
catch(err){
    res.send('err')
}
})





module.exports = app