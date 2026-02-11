const express = require('express');
const router = express.Router();

exports.router = router;





const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    createUser,

} = require('../controllers/transactionController');

router.get('/transactions', getAllTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction); 

router.post('/users', createUser);

 
module.exports = router;


