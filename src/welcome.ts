module.exports = {
  name: 'welcome',

  bind({ sock }) {
    sock.ev.on('group-participants.update', async (update) => {
      const jid = update.id;

      try {
        if (update.action === 'add') {
          const user = update.participants[0];
          await sock.sendMessage(jid, {
            text: `👋 Seja bem-vindo(a) @${user.split('@')[0]}!`,
            mentions: [user],
          });
        }

        if (update.action === 'remove') {
          const user = update.participants[0];
          await sock.sendMessage(jid, {
            text: `👋 @${user.split('@')[0]} saiu do grupo.`,
            mentions: [user],
          });
        }
      } catch (err) {
        console.log('welcome error:', err);
      }
    });
  },
};
