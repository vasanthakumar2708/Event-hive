const VendorEvents = require('../../Model/vendorEventSchema')

const updatepaymentbill = async (req,res) => {
    // console.log(req.body)
    const { id , amountpaid , mode_of_payment } = req.body

    console.log(id , amountpaid , mode_of_payment)

   
    try {

        // const result = await VendorEvents.findOne(
        //     { _id: id }, // Query filter
        //     { billpaid: 1 } 
        //   );

        //   console.log(result)

        // const newpaidbill = Number(result.billpaid) +  Number(amountpaid)
        // console.log(newpaidbill)
        const todayDate = new Date().toISOString().split('T')[0];
          console.log( " TODAY DATE === >>" ,  todayDate);
        filter = {
            $push: {
              PaymentTable: {
                bill: amountpaid ,
                mode_of_payment: mode_of_payment,
                date : todayDate,
                status: 'pending'
              }
            }
        }

        const venderevents  = await  VendorEvents.updateOne( { _id : id } , filter)
        console.log(venderevents)
        res.status(200).send({
            msg : "payment bill updated successfully",
        })
    }
     catch (error) {
        console.log(error)
    }

}

module.exports = updatepaymentbill