const Event = require('../../Model/eventSchema');
const User = require('../../Model/userSchema');
const VendorDetails = require('../../Model/vendorDetails');
const VendorEvents = require('../../Model/vendorEventSchema');

const getEventVendorList = async (req, res) => {

    if ( !req.body.list.VendorList ) {
        return res.status(400).send({ message: "Invalid request format." });
    }

    const list = req.body.list.VendorList;
    
    const eve = req.body.list._id;
 

    try {
    //     // Use Proise.all to wait for all async operations to complete
        const VenDataList = await Promise.all(list.map( async (ven) => {
            // console.log(ven);

            const vendata = await VendorDetails.findById(ven).select('-vendor_password');
            const venEventdata = await VendorEvents.find({ event: eve , vendor : ven});

            const tempRes = {
                vendorDetails: vendata,
                vendorEventDetails: venEventdata,
            };

            // console.log(tempRes);

            return tempRes;
        }));

        // console.log("VenDataList");
        // console.log(VenDataList);

        res.status(200).send(VenDataList);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred while fetching vendor data." });
    }
};

module.exports = getEventVendorList;
