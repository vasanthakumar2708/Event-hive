const VendorEvents = require('../../Model/vendorEventSchema')
const VendorDetails = require('../../Model/vendorDetails')

const getEventListForVendorPage = async (req,res) =>{
    console.log("hi hello there")
    const query = req.query.id
    console.log(query)
    const eventlist = await VendorEvents.find({vendor:query}).populate('event')
    console.log(eventlist)
    res.status(200).send(eventlist)

}



module.exports = getEventListForVendorPage