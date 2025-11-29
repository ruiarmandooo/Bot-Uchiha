// autoVoiceReply.js
// Quando mensagem começa com "voz:" o bot responde (texto) e, se OPENAI_TTS configurado, tenta gerar áudio.
// Este módulo não assume TTS instalado — só tenta se env var / config estiverem presentes.

const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'autoVoiceReply',

  init() {
    this.ttsEnabled = !!process.env.OPENAI_TTS_KEY || false; // placeholder
    this.tmp = path.join(__dirname, '..', 'data', 'tts');
    if (!fs.existsSync(this.tmp)) fs.mkdirSync(this.tmp, { recursive: true });
  },

  async onMessage({ sock, msg, text }) {
    try {
      if (!text) return;
      const jid = msg.key.remoteJid;
      if (!text.toLowerCase().startsWith('voz:')) return;

      const content = text.slice(4).trim();
      if (!content)
        return await sock.sendMessage(jid, {
          text: 'Escreva algo após `voz:` para eu responder com voz.',
        });

      // If TTS not configured -> just send textual reply and hint
      if (!this.ttsEnabled) {
        await sock.sendMessage(jid, {
          text: `🔊 Resposta (texto): ${content}\n\nPara voz real configure OPENAI_TTS_KEY ou outro serviço TTS.`,
        });
        return;
      }

      // If TTS enabled, user should implement TTS logic here (fetch to API, save file, send audio)
      // Placeholder: inform user that TTS must be implemented
      await sock.sendMessage(jid, {
        text: '✅ TTS configurado, mas ainda não implementado no bot. Configure e implemente a chamada ao serviço TTS.',
      });
    } catch (e) {
      console.error('autoVoiceReply error', e);
    }
  },
};
