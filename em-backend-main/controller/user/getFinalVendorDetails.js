const Event = require('../../Model/eventSchema');
const User = require('../../Model/userSchema');
const VendorDetails = require('../../Model/vendorDetails');
const VendorEvents = require('../../Model/vendorEventSchema');

const getFinalVendorDetails = async (req, res) => {
    const id = req.body.id;

    try {
        // Get the event document
        const event = await Event.findById(id);
        
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        // Get the FinalisedVendorList array
        const vendorList = event.FinalisedVendorList || [];

        // Map through the vendor IDs
        const VenDataList = await Promise.all(vendorList.map(async (vendorId) => {
            const venEventdata = await VendorEvents.findById(vendorId);
            
            if (!venEventdata) {
                return null;
            }

            const vendata = await VendorDetails.findById(venEventdata.vendor)
                .select('-vendor_password');

            return {
                vendorDetails: vendata,
                vendorEventDetails: venEventdata,
            };
        }));

        // Filter out any null values from failed lookups
        const filteredVenDataList = VenDataList.filter(item => item !== null);

        res.status(200).json(filteredVenDataList);

    } catch (error) {
        console.error('Error in getFinalVendorDetails:', error);
        res.status(500).json({ 
            message: "An error occurred while fetching vendor data.",
            error: error.message 
        });
    }
};

module.exports = getFinalVendorDetails;