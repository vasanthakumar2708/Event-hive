const mongoose=require('mongoose')
const VendorDetails =require('./vendorDetails')
const Event=require('./eventSchema')


// const paymentdetails = new

const venderevents=new mongoose.Schema({
    
    vendor:{
        type:mongoose.Schema.Types.ObjectId ,ref:'VendorDetails',required:true
    },
    event:{
        type:mongoose.Schema.Types.ObjectId ,ref:'Event',required:true
    },
    status : [Boolean],
    feedback : String ,
    billamount : Number , 
    billpaid : Number ,

    billfilename :String,
    eventStatus : {
            type: String,
            enum: ['quatationPending', 'quatationAccecpted', 'quatationRejected','quatationsubmitted', 'eventCompeted'],
            required: true ,
            default : 'quatationPending'
        },
    
    requirementTable : [Object],
    PaymentTable : [Object],

    // quatationStatus:Boolean
    

})

const VendorEvents = mongoose.model('VendorEvents',venderevents);

module.exports = VendorEvents