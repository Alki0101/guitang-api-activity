const transaction = require('../models/transactionModel');
const User = require('../models/userModel');

//1. Get all transactions
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};


//2. Create a new transaction

const Transaction = require('../models/transactionModel');

const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//3. GET ONE: Get a single transaction by ID
const getTransactionById = async (req, res) => {
    try {
        const transId = await transaction.findById(req.params.id);
        if (!transId) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//4.UPDATE: Change a price or name 
const updateTransaction = async (req, res) => {
    try {
        const updatedTransaction = await transaction.findByIdAndUpdate(req.params.id, req.body, {
             new: true 
            });
            if (!updatedTransaction) {
                return res.status(404).json({ message: 'Transaction not found' });
            }
            res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//5.DELETE: Remove a transaction by ID
const deleteTransaction = async (req, res) => {
    try {     
        const deletedTransaction = await transaction.findByIdAndDelete(req.params.id);
        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

//6. Create user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);    
        await user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

};




module.exports = {
    getAllTransactions,
    createTransaction,  
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    createUser
};








