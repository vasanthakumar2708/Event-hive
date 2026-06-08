const VendorDetails = require('../../Model/vendorDetails');

const  getVendorDetails = async  (req, res) => {

  const  {id} = req.body

  try {
    const user = await VendorDetails.findById(id).select('-password')
    res.status(200).send(user)
  } catch (error) {
    
  }
    

}

module.exports = getVendorDetails