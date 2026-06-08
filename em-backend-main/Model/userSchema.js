const mongoose = require('mongoose');
const Event = require('./eventSchema')

const userSchema = new mongoose.Schema({
    
    phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    events :[{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event' 
      }]
})

const User=mongoose.model('UserModel',userSchema)

module.exports = User ;


