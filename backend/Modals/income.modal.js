const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    Investment: {
        type: String,
        require:true
    },
    EMI: {
        type: String,
        require:true
    },
    savings: {
        type:String,
        require:true
    },
    expenses:{
        type:String,
        require:true
    },
    goals:{
        type:String,
        require:true
    },
    dateReceived: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Income', incomeSchema);
