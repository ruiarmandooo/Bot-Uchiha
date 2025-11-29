const groups = {};

module.exports = {
  addGroup: (jid, name) => {
    groups[jid] = { name, members: [] };
  },
  updateMembers: (jid, members) => {
    if (groups[jid]) groups[jid].members = members;
  },
  getGroup: (jid) => groups[jid] || null,
  listGroups: () => Object.values(groups),
};
