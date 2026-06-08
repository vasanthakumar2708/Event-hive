 const User = require('../../Model/userSchema');
 
 
 const newUser = async (req,res)=>{
    
     
     const name=req.body.name;
     const Phone=req.body.phone_no;
     const email=req.body.email;
     
     const check = await User.findOne({phone:Phone}) 
    if(check) res.send("user exist")
        
     const user=new User({
         name:name,
         phone:Phone,
         password:Phone,
         email:email,
         
     })

   
     if(await user.save())console.log("user created")
     
   
res.status(200).send({ ok: true });
}





module.exports = newUser;