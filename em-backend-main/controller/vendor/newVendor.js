const VendorDetails =require('../../Model/vendorDetails')


const newVedor = async (req,res) => {
    
    try {
        const newven = new VendorDetails({
            
            vendor_service:req.body.name,
            vendor_email:req.body.email,
            vendor_location:req.body.location,
            vendor_cname:req.body.cname,
            vendor_contact:req.body.phone_no,
            vendor_pincode:req.body.pincode,
            vendor_password:req.body.password,
            
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
