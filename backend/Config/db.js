const mongoose = require('mongoose');
const { mongoUri } = require('./envConfig');

module.exports = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connection established");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
};
