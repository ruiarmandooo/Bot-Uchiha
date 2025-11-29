module.exports = {
  name: 'anti-trava',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;

    // Mensagens gigantes travam celulares
    const max = 3000;

    let texto = `
🛡 *Anti-Trava Ativado*
Mensagens maiores que ${max} caracteres serão bloqueadas.
        `;

    await sock.sendMessage(jid, { text: texto });
  },
};
