// antiBot.js
// Heurística básica: nomes com "bot", mensagens idênticas em sequência, ou comportamento tipo auto-join.

const recentMsgs = {};

module.exports = {
  name: 'antiBot',

  async onMessage({ sock, msg, text }) {
    try {
      const sender = msg.key.participant || msg.key.remoteJid;
      const jid = msg.key.remoteJid;
      const pushName = msg.pushName || '';

      // 1) nome contendo "bot" (pode ser false positive) -> warn to admins
      if (pushName.toLowerCase().includes('bot') && jid.endsWith('@g.us')) {
        await sock.sendMessage(jid, {
          text: `⚠️ Conta possivelmente automática detectada: @${sender.split('@')[0]}`,
          mentions: [sender],
        });
      }

      // 2) flood de mesma mensagem por vários usuários (botnet) -> warn
      const key = `${jid}:${text}`;
      recentMsgs[key] = recentMsgs[key] || { count: 0, last: Date.now() };
      const now = Date.now();
      if (now - recentMsgs[key].last < 5000) recentMsgs[key].count++;
      else recentMsgs[key].count = 1;
      recentMsgs[key].last = now;

      if (recentMsgs[key].count >= 5) {
        await sock.sendMessage(jid, {
          text: `⚠️ Mensagens repetidas detectadas. Possível ação de botnet.`,
        });
        recentMsgs[key].count = 0;
      }
    } catch (e) {
      console.error('antiBot error', e);
    }
  },
};
