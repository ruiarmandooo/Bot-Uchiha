// commands/xp.js
const { getXP } = require('../features/xp');
const config = require('../conf.js');

module.exports = {
  name: 'xp',
  description: 'Mostra seu XP atual e Level',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const data = getXP(userId);

    await sock.sendMessage(jid, {
      text: `👁️ ${config.botName} — XP & Level\n\nVocê está no Level: ${data.level}\nXP: ${data.xp}/${data.level * 100}`,
    });
  },
};
