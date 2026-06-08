const VendorDetails = require('../../Model/vendorDetails')

const getVendorList = async (req, res) => {
    try
    {
        const { pincode } = req.body;
        console.log(pincode)
        const data = await VendorDetails.find({ vendor_pincode: pincode })
        console.log(data)
        const vendorDetails = {
            food: [],
            decor: [],
            entertain: [],
            venue: [],
        }
       
            data.forEach(vendor => {
                if (vendor.vendor_service === 'Food')
                {
                    vendorDetails.food.push(vendor);
                } else if (vendor.vendor_service === 'Decor')
                {
                    vendorDetails.decor.push(vendor);
                } else if (vendor.vendor_service === 'Entertainment')
                {
                    vendorDetails.entertain.push(vendor);
                } else if (vendor.vendor_service === 'Venue')
                {
                    vendorDetails.venue.push(vendor);
                }
            });
       
        console.log("vendorDetails ==>" )
        console.log(vendorDetails)

        res.status(200).send(vendorDetails);


    } catch (error)
    {

    }
}

module.exports = getVendorList

