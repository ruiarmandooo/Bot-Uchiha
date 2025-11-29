const userSpam = {};

module.exports = {
  name: 'antiSpam',

  async onMessage({ sock, msg, text }) {
    const sender = msg.key.participant || msg.key.remoteJid;
    const now = Date.now();

    userSpam[sender] = userSpam[sender] || { last: 0, count: 0 };

    if (now - userSpam[sender].last < 1000) {
      userSpam[sender].count++;

      if (userSpam[sender].count >= 5) {
        await sock.sendMessage(msg.key.remoteJid, {
          text: `⚠️ *Spam detectado!* Diminua a velocidade @${sender.split('@')[0]}`,
          mentions: [sender],
        });
        userSpam[sender].count = 0;
      }
    } else {
      userSpam[sender].count = 0;
    }

    userSpam[sender].last = now;
  },
};
