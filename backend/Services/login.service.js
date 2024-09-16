const user = require('../Modals/user.modal');

exports.findUser = (email,password)=>{
    return user.findOne({"email": email,"password": password} );
    
}