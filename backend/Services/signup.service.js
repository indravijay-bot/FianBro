const user = require('../Modals/user.modal');
exports.createObj = (payload)=>{
    return new user({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNo: payload.phoneNo,
        password: payload.password
    })
}
exports.saveData = (obj)=>{
    return obj.save()
}