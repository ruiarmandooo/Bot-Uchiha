// database.js

// This module handles database management for users and transactions.

const db = require('your-database-lib'); // Replace with actual database library

class DatabaseManager {
  constructor() {
    // Initialize database connection
    this.connection = db.connect();
  }

  async addUser(userData) {
    // Function to add a new user to the database.
    try {
      const result = await this.connection.query(
        'INSERT INTO users SET ?',
        userData,
      );
      return result;
    } catch (error) {
      throw new Error('Error adding user: ' + error.message);
    }
  }

  async getUser(userId) {
    // Function to get user data by user ID.
    try {
      const result = await this.connection.query(
        'SELECT * FROM users WHERE id = ?',
        [userId],
      );
      return result[0];
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }

  async addTransaction(transactionData) {
    // Function to add a new transaction.
    try {
      const result = await this.connection.query(
        'INSERT INTO transactions SET ?',
        transactionData,
      );
      return result;
    } catch (error) {
      throw new Error('Error adding transaction: ' + error.message);
    }
  }

  async getTransactions(userId) {
    // Function to get all transactions for a specific user.
    try {
      const result = await this.connection.query(
        'SELECT * FROM transactions WHERE user_id = ?',
        [userId],
      );
      return result;
    } catch (error) {
      throw new Error('Error fetching transactions: ' + error.message);
    }
  }
}

module.exports = new DatabaseManager();
