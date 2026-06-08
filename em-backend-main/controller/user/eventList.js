const Event = require('../../Model/eventSchema')
const User = require('../../Model/userSchema');
const VendorDetails = require('../../Model/vendorDetails');
const VendorEvents =  require('../../Model/vendorEventSchema');

const eventList = async  (req, res) => {
    
    // console.log("START>>>>>")
    // console.log(req.body)
    const id = req.body.id

    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
    
      
        const eventdata = await Promise.all(user.events.map(async ev => {
            const event = await Event.findById(ev);
            return event;  
        }));
    
        const response = {
            events: eventdata
        };
    
        // console.log("response ==>>>>");
        // console.log(response);
        res.status(200).send(response)
    
    } catch (error) {
        console.error("Error fetching user or events:", error);
    }



}

module.exports = eventList