const express= require('express');
const flights= require('../Modal/Flight_Model');
const app= express.Router();

app.get('/flights',async (req,res)=>{
    try{
        const flightData=  await flights.find({})     
        console.log(flightData)
           res.status(200).send(flightData)
       }
       catch(err){
           res.send({message:err.message})
       }
    })

app.get('/flights/:id', async (req,res)=>{
    const _id=req.params.id
    console.log(_id)
    try{
     const flightData=  await flights.findOne({_id})     
    if(flightData){
        res.status(200).send(flightData)
    }else{
        res.send({message:'No data Available'})
    }
    
    }
    catch(err){
        res.send({message:err})
    }
    })


app.post('/flights',async (req,res)=>{
    const data=req.body;
    try{
        const flightData=  await flights.create(data)  
        res.status(201).send(flightData)
    }
    catch(err){
        res.send({message:err})
    }
    })



app.patch('/flights/:id',async (req,res)=>{
    const _id=req.params.id
    const data=req.body;
    try{
        const flightData=  await flights.findByIdAndUpdate({_id},data)  
      return  res.status(204).send({message:"Upadated data successfully"})
    }
    catch(err){
        res.send({message:err})
    }
    })


app.delete('/flights/:id',async (req,res)=>{
    const _id=req.params.id
    try{
        const flightData=  await flights.findByIdAndDelete({_id})  
        res.status(202).send({message:"data deleted successfuly",deletedData:flightData})
    }
    catch(err){
        res.send({message:err})
    }
    })
    


module.exports = app