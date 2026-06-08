// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../Model/userSchema')

const vendorLogin = async (req , res) => {

    const { phone_no , password }  = req.body 
    console.log(phone_no , password)

    try {

        const user = await User.findOne({phone:phone_no})
        console.log(user)
        if(!user){
            console.log("Invalid email or password")
            return res.status(404).json({ message: 'Username not found' });
        }

        
        if(!(password  === user.password)){
                console.log("Invalid email or password")
                return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign(
            { _id: user._id, role: "user" },
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