// Auto-Boas-vindas — envia mensagem quando alguém entra no grupo
module.exports = async (sock, msg) => {
  if (!msg.message?.groupInviteMessage) return false;

  const jid = msg.key.remoteJid;
  const userId = msg.key.participant || msg.message.groupInviteMessage.invitee;
  await sock.sendMessage(jid, {
    text: `👋 Bem-vindo(a) ${userId}! Prepare-se para ser um Uchiha!`,
  });
  return true;
};
