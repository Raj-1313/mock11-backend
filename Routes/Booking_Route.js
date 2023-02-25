const express= require('express');
const app= express.Router();
const BookingModel= require('../Modal/Booking_Model')


app.get('/dashboard',async (req,res)=>{
    try{
        const BookingData=  await BookingModel.find({}).populate("user").populate("flight")           
           res.status(200).send(BookingData)
       }
       catch(err){
           res.send({message:err.message})
       }
    })


    app.post('/booking',async (req,res)=>{
        const {flight,user}=req.body;
        
        console.log(user,flight)
        try{
            const flightData=  await BookingModel.create({flight,user})  
            res.status(201).send(flightData)
        }
        catch(err){
            res.send({message:err.message})
        }
        })
    


module.exports = app