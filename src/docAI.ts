const { OpenAIApi, Configuration } = require('openai');
const fs = require('fs');
const docx = require('docx');
const config = require('../../conf.js');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'docai',
  description: 'Resumo ou análise de DOC',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const doc = msg.message?.documentMessage;
    if (!doc) return sock.sendMessage(jid, { text: '❌ Envie um DOC.' });

    try {
      const buffer = await sock.downloadMediaMessage(doc);
      const text = buffer.toString('utf-8'); // simplificação
      const prompt = `Resuma o seguinte DOC: ${text}`;
      const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
      });
      await sock.sendMessage(jid, {
        text: `📄 Resumo do DOC: ${response.data.choices[0].message.content}`,
      });
    } catch (err) {
      await sock.sendMessage(jid, { text: `❌ Erro no DOC: ${err.message}` });
    }
  },
};
