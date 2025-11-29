// commands/gpt.js
const { Configuration, OpenAIApi } = require('openai');
const config = require('../config');
const openai = new OpenAIApi(
  new Configuration({ apiKey: config.openaiApiKey }),
);

module.exports = {
  name: 'gpt',
  description: 'Conversa com ChatGPT',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Preciso de uma pergunta… até o Itachi ficaria desapontado.',
      });
    const prompt = args.join(' ');
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      const answer = response.data.choices[0].message.content;
      await sock.sendMessage(msg.key.remoteJid, { text: answer });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ ChatGPT está furioso… tente novamente mais tarde.',
      });
    }
  },
};
