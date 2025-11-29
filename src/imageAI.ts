const { OpenAIApi, Configuration } = require('openai');
const config = require('../../conf.js');
const fetch = require('node-fetch');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'imgai',
  description: 'Gera imagens via IA',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    if (!args.length)
      return sock.sendMessage(jid, {
        text: '❌ Envie uma descrição para gerar a imagem.',
      });

    const prompt = args.join(' ');
    try {
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
      });
      const imageUrl = response.data.data[0].url;
      await sock.sendMessage(jid, {
        image: { url: imageUrl },
        caption: `🎨 Imagem IA: ${prompt}`,
      });
    } catch (err) {
      await sock.sendMessage(jid, {
        text: `❌ Erro na IA de imagem: ${err.message}`,
      });
    }
  },
};
