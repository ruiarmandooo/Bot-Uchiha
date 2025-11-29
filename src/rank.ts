// commands/rank.js
const { getLeaderboard } = require('../features/xp');
const config = require('../conf.js');

module.exports = {
  name: 'rank',
  description: 'Mostra o ranking global de XP/Level',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const leaderboard = getLeaderboard().slice(0, 10); // Top 10

    let text = `🔥 ${config.botName} — Ranking de Níveis 🔥\n\n`;
    leaderboard.forEach((u) => {
      text += `#${u.rank} - ${u.userId}\nLevel: ${u.level} | XP: ${u.xp}\n\n`;
    });

    await sock.sendMessage(jid, { text });
  },
};
