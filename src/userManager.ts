// src/userManager.js

// User management functions for XP, coins, and stats

class UserManager {
  constructor() {
    this.users = new Map(); // Store user data
  }

  addUser(userId) {
    if (!this.users.has(userId)) {
      this.users.set(userId, { xp: 0, coins: 0, stats: {} });
    }
  }

  addXP(userId, amount) {
    if (this.users.has(userId)) {
      const user = this.users.get(userId);
      user.xp += amount;
    }
  }

  addCoins(userId, amount) {
    if (this.users.has(userId)) {
      const user = this.users.get(userId);
      user.coins += amount;
    }
  }

  getUserStats(userId) {
    return this.users.get(userId);
  }

  updateStats(userId, newStats) {
    if (this.users.has(userId)) {
      const user = this.users.get(userId);
      user.stats = { ...user.stats, ...newStats };
    }
  }
}

// Example:
// const userManager = new UserManager();
// userManager.addUser('user123');
// userManager.addXP('user123', 100);
// console.log(userManager.getUserStats('user123'));
