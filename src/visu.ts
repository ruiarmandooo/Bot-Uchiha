const userSettings = {}; // Armazena preferências dos usuários

module.exports = {
  name: 'visu',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const user = msg.key.participant || jid;

    if (!userSettings[user]) userSettings[user] = { visu: false };

    if (args[0] === 'on') {
      userSettings[user].visu = true;
      await sock.sendMessage(jid, { text: '📸 Modo visú única ativado!' });
    } else if (args[0] === 'off') {
      userSettings[user].visu = false;
      await sock.sendMessage(jid, { text: '📸 Modo visú única desativado!' });
    } else {
      await sock.sendMessage(jid, {
        text: `Modo atual: ${userSettings[user].visu ? 'ON' : 'OFF'}\nUse !visu on/off`,
      });
    }
  },
};
