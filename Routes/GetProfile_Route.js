const express= require('express')
const UserDetails= require("../Modal/UserDetails_model")
const app= express.Router()

app.get('/getProfile',async (req,res)=>{
const userId=req.body.userId
try{
    const user= await UserDetails.find({userId}).populate("userId")
     res.send(user)
}
catch(err){
res.send({message:err.message})
}

})

app.post('/getProfile',async (req,res)=>{
const {userId,name,bio,phone}=req.body
try{   
    const user= await UserDetails.create({userId,bio,phone,name})
    const userdet= await UserDetails.find({userId})
     res.send(userdet)
}
catch(err){
res.send({message:err.message})
}
})

app.patch('/getProfile/:id',async (req,res)=>{
    const _id= req.params.id
const {userId,name,bio,phone}=req.body

try{   
    const user= await UserDetails.findByIdAndUpdate({_id},{userId,bio,phone,name})
    const userdet= await UserDetails.find({_id})
     res.send(userdet)
}
catch(err){
res.send({message:err.message})
}
})


module.exports = app