// Anti-Flood — bloqueia excesso de mensagens
const floodMap = new Map();

module.exports = async (sock, msg) => {
  const jid = msg.key.remoteJid;
  const userId = msg.key.participant || jid;
  const now = Date.now();

  if (!floodMap.has(userId)) floodMap.set(userId, []);
  const times = floodMap.get(userId);

  times.push(now);
  // mantém últimas 10 mensagens
  if (times.length > 10) times.shift();

  // se 10 mensagens em < 10s → bloqueia
  if (times.length === 10 && now - times[0] < 10000) {
    await sock.sendMessage(jid, {
      text: '⚠️ Flood detectado! Pare de enviar muitas mensagens.',
    });
    return true;
  }

  floodMap.set(userId, times);
  return false;
};
