// commands/stats.js
const panelStats = require('../features/panel/stats');

module.exports = {
  name: 'stats',
  run: async ({ sock, msg }) => {
    const stats = panelStats.getStats();
    await sock.sendMessage(msg.key.remoteJid, {
      text: `📊 Estatísticas do Bot\n\nMensagens: ${stats.messages}\nComandos: ${stats.commands}\nErros: ${stats.errors}\nUsuários: ${stats.users}\nGrupos: ${stats.groups}`,
    });
  },
};
