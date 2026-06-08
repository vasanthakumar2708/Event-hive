const VendorEvents = require('../../Model/vendorEventSchema');


const updatebill = async ( req,res) => {
    console.log("BILL UPDATE !!!")
    console.log(req.body.vendor)
    const id = req.body.vendor._id;
    const filter = { _id: id };
    const update = { $set: { billamount: req.body.bill , billamount_advance : req.body.bill_advance ,billpaid : 0 } };

    const vendor = await VendorEvents.updateOne(filter , update)

    console.log(vendor)
    
    res.status(200).send({msg : "bill added"})

    
}

module.exports = updatebill