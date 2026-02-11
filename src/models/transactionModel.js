const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true, 
        minlength:[3, 'Description must be at least 3 characters long']
    },
    amount: {
        type: Number,
        required: true,
        min: [0.01, 'Amount must be greater than 0']
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}



});

module.exports = mongoose.model('Transaction', transactionSchema);