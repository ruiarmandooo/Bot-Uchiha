// transaction.js - Transaction History Management and Logging

class Transaction {
  constructor(id, amount, type) {
    this.id = id;
    this.amount = amount;
    this.type = type; // 'credit' or 'debit'
    this.timestamp = new Date();
  }
}

class TransactionManager {
  constructor() {
    this.transactions = [];
  }

  addTransaction(id, amount, type) {
    const transaction = new Transaction(id, amount, type);
    this.transactions.push(transaction);
    console.log(`Transaction logged: ${JSON.stringify(transaction)}`);
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

// Example usage:
const transactionManager = new TransactionManager();

transactionManager.addTransaction(1, 100, 'credit');
transactionManager.addTransaction(2, 50, 'debit');
console.log(transactionManager.getTransactionHistory());
