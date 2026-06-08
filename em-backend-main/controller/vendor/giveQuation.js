const VendorDetails = require('../../Model/vendorDetails')
const VendorEvents = require('../../Model/vendorEventSchema');


const givequatation = async (req, res)  =>{
const {requirement ,totalAmount, vendor_id} = req.body

console.log(requirement)
console.log(vendor_id)
console.log(totalAmount)

const data = await VendorEvents.findOneAndUpdate({_id : vendor_id},
    {
        $set :{ eventStatus : 'quatationsubmitted', billamount : totalAmount ,requirementTable : requirement }
    }
)

if(data){
    res.send(data)
}

}

module.exports = givequatation