require('dotenv').config();
const express= require('express');
const connect= require('./config/config');
const AuthRouter= require('./Routes/Auth_Route')
const GetProfile_route= require('./Routes/GetProfile_Route')
const Authmiddleware = require('./Middleware/Auth_middleware');

const cors= require('cors');
const app = express()
const PORT= process.env.PORT


app.use(express.json());
app.use(cors());
app.use('/',AuthRouter)

app.use(Authmiddleware)
app.use('/',GetProfile_route)



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
// module.exports = app;