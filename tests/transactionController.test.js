const { getTransactions, createTransaction } = require('../src/controllers/transactionController');
const Transaction = require('../src/models/transactionModel');
const httpMocks = require('node-mocks-http');

// Tell Jest to mock the database model
jest.mock('../src/models/transactionModel');

describe('Transaction Controller Unit Tests', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  describe('GET /transactions (getTransactions)', () => {
    it('should return 200 OK and a list of transactions', async () => {
      // Arrange
      const fakeData = [{ amount: 100 }, { amount: 200 }];
      Transaction.find.mockResolvedValue(fakeData);

      // Act
      await getTransactions(req, res);

      // Assert
      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toStrictEqual(fakeData);
      expect(Transaction.find).toHaveBeenCalledTimes(1);
    });

    it('should return 500 if database crashes', async () => {
      Transaction.find.mockRejectedValue(new Error('DB Connection Lost'));

      await getTransactions(req, res);

      expect(res.statusCode).toBe(500);
      expect(res._getJSONData()).toStrictEqual({ message: 'DB Connection Lost' });
    });
  });

  describe('POST /transactions (createTransaction)', () => {
    it('should return 201 Created and the new transaction', async () => {
      req.body = { amount: 300 };
      // Mock the Transaction constructor and save method
      const fakeSavedTransaction = { _id: '12345', amount: 300, save: jest.fn().mockResolvedValue() };
      // Mock Transaction to return our fakeSavedTransaction when called with new
      Transaction.mockImplementation(() => fakeSavedTransaction);

      await createTransaction(req, res);

      expect(res.statusCode).toBe(201);
      // Remove the save method before comparing, since the controller returns the transaction object
      const returnedData = res._getJSONData();
      delete returnedData.save;
      expect(returnedData).toStrictEqual({ _id: '12345', amount: 300 });
    });
  });
});
