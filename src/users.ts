const users = {};

module.exports = {
  addUser: (jid, name) => {
    users[jid] = { name, vip: false };
  },
  setVIP: (jid, status = true) => {
    if (users[jid]) users[jid].vip = status;
  },
  getUser: (jid) => users[jid] || null,
  listUsers: () => Object.values(users),
};
