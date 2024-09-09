require('dotenv').config();

console.log('Loaded environment variables:');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

module.exports = {
    mongoUri: process.env.MONGO_URI, 
    port: process.env.PORT || 8000, 
};
