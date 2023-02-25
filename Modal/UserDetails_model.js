const mongoose= require('mongoose')

const UserSchema= mongoose.Schema({   
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
   bio:{
    type:String,
    default:"empty"
},
name:{
       default:"empty",
       type:String,
    },
    phone:{
       default:"empty",
    type:Number,
   }
});

const UserDetailsModal= mongoose.model("UserDetail",UserSchema)
module.exports=UserDetailsModal;