// Auto-Leave — envia mensagem quando alguém sai do grupo
module.exports = async (sock, msg) => {
  if (!msg.message?.groupLeaveMessage) return false;

  const jid = msg.key.remoteJid;
  const userId =
    msg.key.participant || msg.message.groupLeaveMessage.participant;
  await sock.sendMessage(jid, {
    text: `😢 Adeus ${userId}! Que seus inimigos não te encontrem...`,
  });
  return true;
};
