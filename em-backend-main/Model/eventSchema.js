const mongoose =require('mongoose')
const User=require('./userSchema')

const eventSchema=new mongoose.Schema({
    // event_id :String,
    user:{
        type:mongoose.Schema.Types.ObjectId ,ref:'User',required:true
    },
    name : String,
    phone : String,
    doe :String ,
    status :Boolean,
    EventType :String,
    LocOfEvent : String,
    VendorList : [String],
    FinalisedVendorList : [String],
    NoOfAttender : Number,
    requirement:Object,
    userEventStatus : {
        type: String,
        enum: ['quatationPending', 'quatationsubmitted' , 'eventCompeted'],
        required: true ,
        default : 'quatationPending'
    }
})

const Event = mongoose.model('Event',eventSchema)

module.exports = Event