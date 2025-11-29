// commands/avatar.js
module.exports = {
  name: 'avatar',
  description: 'Envia a foto de perfil do usuário',
  run: async ({ sock, msg }) => {
    try {
      const user = msg.key.participant || msg.key.remoteJid;
      const url = await sock.profilePictureUrl(user).catch(() => null);
      if (!url)
        return await sock.sendMessage(msg.key.remoteJid, {
          text: '💀 Não consegui encontrar seu avatar… talvez você esteja escondendo algo.',
        });
      await sock.sendMessage(msg.key.remoteJid, {
        image: { url },
        caption: `🖼️ Avatar de @${user.split('@')[0]}`,
        mentions: [user],
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ Erro ao buscar avatar… até o Uchiha mais experiente falha às vezes.',
      });
    }
  },
};
