const signUpService = require('../Services/signup.service');

module.exports = (req,res)=>{
    const request = req.body;
    console.log(req.body);
    if(request.firstName && request.lastName && request.email && request.phoneNo && request.password){
        const obj = signUpService.createObj(request);
        signUpService.saveData(obj).then(()=>{
            res.send({message: "data added"})
        }).catch((err)=>{
            console.log(err.keyValue);
            console.log('catrch rror nme agya;;;');
            const message = Object.keys(err.keyValue).length? `Data Already Exist`: `Something went wrong`;
            res.send({message});
        })


    }
    else{
        
        res.status(401).send({message: "Invalid Data!!"})

    }
    


}