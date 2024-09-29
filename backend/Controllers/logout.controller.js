const service = require('../Services/login.service');
module.exports = async(req,res)=>{
    console.log("called",req.body.email)
    await service.updateOne(req.body.email,false)
    res.status(200).json({ message: "logout", code: 401 });
}