const { OpenAIApi, Configuration } = require('openai');
const fs = require('fs');
const config = require('../../conf.js');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'caption',
  description: 'Gera legendas automáticas para imagens',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    if (!msg.message?.imageMessage)
      return sock.sendMessage(jid, { text: '❌ Envie uma imagem.' });

    try {
      const buffer = await sock.downloadMediaMessage(msg.message.imageMessage);
      fs.writeFileSync('temp_img.jpg', buffer);
      const prompt = 'Gere uma legenda criativa para a imagem enviada.';
      const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      });
      fs.unlinkSync('temp_img.jpg');
      await sock.sendMessage(jid, {
        text: `🖼️ Legenda: ${response.data.choices[0].message.content}`,
      });
    } catch (err) {
      await sock.sendMessage(jid, {
        text: `❌ Erro na legenda: ${err.message}`,
      });
    }
  },
};
