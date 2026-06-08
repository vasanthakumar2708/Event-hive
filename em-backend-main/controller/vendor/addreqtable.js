const { query } = require('express');
const VendorEvents = require('../../Model/vendorEventSchema');
const { set } = require('mongoose');

const addreqtable = async (req,res)=>{
    console.log(req.body);
    const {id,table}  =  req.body;

    try {
        let filter = {_id : id};

        // PROBLEM IN THE FILTER NOT YET CORRECTED !!!!!.!!
        const data = await VendorEvents.findById(id)

        const oldtable = data.Reqtable
        const newtable = []
        oldtable.forEach(element => {
            newtable.push(element)
        });
        table.forEach(element => {
            newtable.push(element)
        });
        console.log(newtable)

        const query = {
            $set : {Reqtable : newtable}
        }

        const vendor = await VendorEvents.updateOne(filter,query)

        if(vendor){
            res.status(200).send({ok:"successfull"})
        }
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = addreqtable;