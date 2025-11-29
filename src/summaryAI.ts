const { OpenAIApi, Configuration } = require('openai');
const config = require('../../conf.js');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'summary',
  description: 'Gera resumo de texto via IA',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    if (!args.length)
      return sock.sendMessage(jid, { text: '❌ Envie um texto para resumir.' });

    const prompt = `Resuma o seguinte texto: ${args.join(' ')}`;
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
      });
      const summary = response.data.choices[0].message.content;
      await sock.sendMessage(jid, { text: `📝 Resumo: ${summary}` });
    } catch (err) {
      await sock.sendMessage(jid, {
        text: `❌ Erro na IA de resumo: ${err.message}`,
      });
    }
  },
};
