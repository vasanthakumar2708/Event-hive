const VendorDetails =require('../../Model/vendorDetails')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const vendorLogin = async (req , res) => {

    const { phone_no , password }  = req.body 
    console.log(phone_no , password)

    try {

        const user = await VendorDetails.findOne({vendor_contact:phone_no})
        console.log(user)
        if(!user){
            console.log("Invalid email or password")
            return res.status(404).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.vendor_password);
        if(!isMatch){
                console.log("Invalid email or password")
                return res.status(401).send("Invalid Password");
        }

        const token = jwt.sign(
            { _id: user._id, role: "vendor" },
            'your-jwt-secret',
            { expiresIn: '1h' }
        );

        console.log("Token sent")
        res.send({token});

    }catch(err){
        console.error(err);
        res.status(500).send("Error logging in");
    }


}

module.exports = vendorLogin