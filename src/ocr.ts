// commands/extrair-texto.js
const Tesseract = require('tesseract.js');
module.exports = {
  name: 'extrair-texto',
  description: 'Extrai texto de imagem',
  run: async ({ sock, msg }) => {
    const type = Object.keys(msg.message)[0];
    if (type !== 'imageMessage')
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Envie uma imagem, ninja preguiçoso.',
      });

    const buffer = await sock.downloadMediaMessage(msg);
    Tesseract.recognize(buffer, 'por')
      .then(({ data: { text } }) => {
        sock.sendMessage(msg.key.remoteJid, {
          text: `🔍 Texto extraído: ${text || 'Nada detectado… talvez você tenha enviado um pergaminho vazio.'}`,
        });
      })
      .catch((e) => {
        console.error(e);
        sock.sendMessage(msg.key.remoteJid, {
          text: '⚠️ OCR falhou… até o Uchiha mais experiente não conseguiu.',
        });
      });
  },
};
