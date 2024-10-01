const user = require('../Modals/user.modal');

exports.findUser = (email, password) => {
    return user.findOne({ "email": email, "password": password });
}

exports.updateOne = (email,online) => {

    return user.updateOne({ "email": email }, { $set: { online } });
}
