const VendorEvents = require('../../Model/vendorEventSchema');

const updatePhasedata = async (req, res) => {
    const { phase, choice, vendor_id } = req.body;

    console.log(phase);
    console.log(choice);
    console.log(vendor_id);
    
    try {
        
        if(phase == 0 && choice == true){
            const updated = await VendorEvents.updateOne(
                { _id: vendor_id },
                { $set: { eventStatus : 1 },
                $set: { [`status.${phase}`]: choice } 
             } ,
                
            );
            res.status(200).json(updated); 
        }else if (phase == 0 && choice == false){
            const updated = await VendorEvents.updateOne(
                { _id: vendor_id },
                { $set: { eventStatus : 2 } } 
            );
            res.status(200).json(updated); 
        }else{

        const updated = await VendorEvents.updateOne(
            { _id: vendor_id },
            { $set: { [`status.${phase}`]: choice } } 
        );
        
        console.log(updated);
        res.status(200).json(updated); 
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = updatePhasedata;
