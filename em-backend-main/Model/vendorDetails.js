const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const venderdetails = new mongoose.Schema({
    vendor_email :String,
    vendor_service: String,
    vendor_location: String,
    vendor_contact: String,
    vendor_cname: String,
    vendor_pincode: String,
    vendor_password: String,
    doj: String
});

venderdetails.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('vendor_password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        
        const hash = await bcrypt.hash(user.vendor_password, salt);

        user.vendor_password = hash;
        
        next();

    } catch (err) {
        next(err);
    }
});

const VendorDetails = mongoose.model('VendorDetails', venderdetails);

module.exports = VendorDetails;
