const { findByIdAndUpdate } = require('../../Model/userSchema');
const VendorEvents = require('../../Model/vendorEventSchema');


const update_payment_transaction = async (req,res) => {

    const {option , index, _id} = req.body
    console.log(option)
    console.log(index)
    console.log(_id)

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // update the amount in the billpaid value!!!!!
    // approved them by checking the flag     !!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const amount = await VendorEvents.findById(_id);
    const incr_amount = amount.PaymentTable[index].bill
    
    const update = await VendorEvents.findByIdAndUpdate(_id,{
     $set: { [`PaymentTable.${index}.status`]: 'complete' } ,
      $inc: { billpaid: incr_amount }     
    })

    if(update)res.send({ok:"updated"})

}


module.exports = update_payment_transaction;