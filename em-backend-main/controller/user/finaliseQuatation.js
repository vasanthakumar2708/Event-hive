const VendorEvents = require('../../Model/vendorEventSchema')
const VendorDetails = require('../../Model/vendorDetails')
const Event = require('../../Model/eventSchema')


const finaliseQuotation = async (req, res) => {
    const { food, decor, entertain, venue, event_id } = req.body;
    
    try {
        // Get all vendor events for this event
        const list = await VendorEvents.find({ event: event_id }).select('_id');
        const idList = list.map(item => item._id);

        // Get specific vendor event IDs
        const foodEvent = await VendorEvents.findOne({ 
            event: event_id, 
            vendor: food 
        }).select('_id');

        const entertainEvent = await VendorEvents.findOne({ 
            event: event_id, 
            vendor: entertain 
        }).select('_id');

        const venueEvent = await VendorEvents.findOne({ 
            event: event_id, 
            vendor: venue 
        }).select('_id');

        const decorEvent = await VendorEvents.findOne({ 
            event: event_id, 
            vendor: decor 
        }).select('_id');

        // Convert to string IDs for comparison
        const selectedIds = [
            foodEvent?._id?.toString(),
            decorEvent?._id?.toString(),
            entertainEvent?._id?.toString(),
            venueEvent?._id?.toString()
        ].filter(Boolean); // Remove any undefined values

        // Update status for each vendor event
        for (const vendor of idList) {
            const vendorIdString = vendor.toString();
            const status = selectedIds.includes(vendorIdString) 
                ? 'quotationAccepted' 
                : 'quotationRejected';

            await VendorEvents.findOneAndUpdate(
                { _id: vendor },
                { eventStatus: status }
            );
        }

        await Event.findByIdAndUpdate(event_id,{
            $set: { FinalisedVendorList: selectedIds , userEventStatus :'quatationsubmitted'}
        })

        res.status(200).json({ message: "Quotation finalized successfully." });
    } catch (error) {
        console.error('Error in finaliseQuotation:', error); // Add this for debugging
        res.status(500).json({ error: error.message || "Failed to finalize quotation." });
    }
};

module.exports = finaliseQuotation;