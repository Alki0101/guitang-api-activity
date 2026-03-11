const express = require('express');
const router = express.Router();

// bring in middleware and controller functions up front
const { protect, authorize } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

const {
  getTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  createUser,
} = require('../controllers/transactionController');

// public endpoints

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/transactions',getTransactions);
router.post('/transactions',protect,authorize('admin', 'manager'),createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);
// user registration
router.post('/users', createUser);

module.exports = router;


