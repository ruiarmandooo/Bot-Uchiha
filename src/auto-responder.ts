module.exports = {
  name: 'auto-responder',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;

    const answer = `
🤖 *Auto-Responder configurado!*

Respostas automáticas ativas para:

- "ola" → "Olá! Tudo bem?"
- "bom dia" → "Bom dia! 🌞"
- "oi bot" → "Oi, humano 👋"

        `;

    await sock.sendMessage(jid, { text: answer });
  },
};
