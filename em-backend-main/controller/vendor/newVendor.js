const VendorDetails =require('../../Model/vendorDetails')


const newVedor = async (req,res) => {
    
    try {
         console.log("REQUEST BODY:", req.body);
        const newven = new VendorDetails({
            
               vendor_service: req.body.vendor_service,
                vendor_email: req.body.vendor_email,
                vendor_location: req.body.vendor_location,
                vendor_cname: req.body.vendor_cname,
                vendor_contact: req.body.vendor_contact,
                vendor_pincode: req.body.vendor_pincode,
                vendor_password: req.body.vendor_password,
                doj: req.body.doj
            
        })
        console.log(newven);
        if(await newven.save()){
        console.log("user created")
    }
} catch (error) {
        console.log(error)
        
    }
    res.status(200).send({ ok: true });
}

module.exports = newVedor;
