const VendorDetails = require('../Model/vendorDetails');
const User = require('../Model/userSchema');
const Event = require('../Model/eventSchema'); 
const VendorEvents =  require('../Model/vendorEventSchema');


const newEvent = async (req, res) => {
    try {
        console.log(req.body);
        const { user, name, phone, evenType, doe, lOfEvent, vendorList , requirement} = req.body;

        const new_event = new Event({
            user: user,
            name: name,
            EventType :  evenType,
            doe :doe ,
            status :false,
            LocOfEvent: lOfEvent,
            phone: phone,
            VendorList: vendorList,
            requirement : requirement
        });

        const savedEvent = await new_event.save();
            
        console.log(savedEvent)

        await addvendetails(savedEvent)

        const save_event = await User.findById(user);
        if (save_event) {
            if (!save_event.events) {
                save_event.events = [];
            }

            save_event.events.push(savedEvent._id);
            await save_event.save(); 
            res.status(200).send({ message: 'Event created and added to user!', eventId: savedEvent._id });

        } else {
            res.status(404).send({ message: 'User not found!' });
        }
    } catch (error) {
        // Handle any errors
        console.error("Error creating event:", error);
        res.status(500).send({ message: 'Error creating event', error: error.message });
    }
};

const addvendetails = (eventdata) => {
    
    eventdata.VendorList.forEach(async ven => {
         console.log(eventdata.requirement)
        if (ven) {  // Ensure 'ven' is not null or undefined
            try {
                const vendetails = new VendorEvents({
                    vendor: ven,
                    event: eventdata._id,
                    status: [false, false, false, false, false, false, false],
                    feedback: "",
                    billamount: 0,
                    billpaid: 0,
                    // eventStatus : 0,
                    requirement : eventdata.requirement
                    // quatationStatus:false
                });
    
                const savedVend = await vendetails.save();
                if (savedVend) {
                    console.log("Vendor Event saved:", savedVend);
                }
            } catch (err) {
                console.error("Error saving vendor event:", err);
            }
        } else {
            console.warn("Null or invalid vendor found in VendorList:", ven);
        }
    });
    
}

module.exports = newEvent;
