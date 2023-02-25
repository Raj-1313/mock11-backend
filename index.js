require('dotenv').config();
const express= require('express');
const connect= require('./config/config');
const AuthRouter= require('./Routes/Auth_Route')
const BookingRouter= require('./Routes/Booking_Route')
const FilghtRouter= require('./Routes/Flight_Route')
const cors= require('cors');
const app = express()
const PORT= process.env.PORT


app.use(express.json());
app.use(cors());
app.use('/api',AuthRouter)
app.use('/api',BookingRouter)
app.use('/api',FilghtRouter)



app.get('/',(req,res)=>{
    res.send('app is on')
})


app.listen(PORT,async()=>{
    try{
        await connect;
        console.log(`listnign on ${PORT}`)
    }
    catch(err){
        console.log(`error in connection`)
          
    }
})