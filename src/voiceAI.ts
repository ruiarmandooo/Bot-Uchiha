const { OpenAIApi, Configuration } = require('openai');
const fs = require('fs');
const config = require('../../conf.js');

const openai = new OpenAIApi(new Configuration({ apiKey: config.openAIKey }));

module.exports = {
  name: 'voiceai',
  description: 'Transcreve voz ou áudio em texto',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const audio = msg.message?.audioMessage || msg.message?.videoMessage;
    if (!audio)
      return sock.sendMessage(jid, {
        text: '❌ Envie um áudio para transcrever.',
      });

    try {
      const buffer = await sock.downloadMediaMessage(audio);
      fs.writeFileSync('temp_audio.ogg', buffer);
      const response = await openai.createTranscription(
        fs.createReadStream('temp_audio.ogg'),
        'whisper-1',
      );
      fs.unlinkSync('temp_audio.ogg');
      await sock.sendMessage(jid, {
        text: `🗣️ Transcrição: ${response.data.text}`,
      });
    } catch (err) {
      await sock.sendMessage(jid, {
        text: `❌ Erro na IA de voz: ${err.message}`,
      });
    }
  },
};
