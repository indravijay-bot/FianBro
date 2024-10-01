const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        // required:true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateReceived: {
        type: Date,
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Expense', expenseSchema);
