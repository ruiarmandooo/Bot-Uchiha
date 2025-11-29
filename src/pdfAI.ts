const { OpenAIApi, Configuration } = require('openai');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const config = require('../../conf.js');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'pdfai',
  description: 'Resumo ou análise de PDF',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const doc = msg.message?.documentMessage;
    if (!doc) return sock.sendMessage(jid, { text: '❌ Envie um PDF.' });

    try {
      const buffer = await sock.downloadMediaMessage(doc);
      const data = await pdfParse(buffer);
      const prompt = `Resuma o seguinte PDF: ${data.text}`;
      const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
      });
      await sock.sendMessage(jid, {
        text: `📄 Resumo do PDF: ${response.data.choices[0].message.content}`,
      });
    } catch (err) {
      await sock.sendMessage(jid, { text: `❌ Erro no PDF: ${err.message}` });
    }
  },
};
