const VendorEvents = require('../../Model/vendorEventSchema');

const updatefilename = async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.vendor._id);
  const id = req.body.vendor._id;
  try {
    
    const filter = { _id: id };
    const update = { $set: { billfilename: req.body.name } };
    const vendor = await VendorEvents.updateOne(filter, update);
    console.log(vendor);

  } catch (error) {
    console.error(error);
  }
};

module.exports = updatefilename;