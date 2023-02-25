const jwt= require('jsonwebtoken');
const UserModal= require('../Modal/User_Model')
const  Authmiddleware=async (req,res,next)=>{
const token= req.headers.authorization
if(token){
  const decodeduser= jwt.verify(token,"setKey")
if(decodeduser){
  const userid= await UserModal.findOne({email:decodeduser.email})
    // console.log(decodeduser,userid)
    req.body.userId=userid._id
    next()
}

}else{
    res.send({message:"login first"})
}


}

module.exports= Authmiddleware