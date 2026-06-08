const User = require('../../Model/userSchema');

const  getUserDetails = async  (req, res) => {

  const  {id} = req.body

  try { 
    const user = await User.findById(id).select('-password')
    res.status(200).send(user)
  } catch (error) {
    
  }
    

}

module.exports = getUserDetails