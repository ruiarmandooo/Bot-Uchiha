// ttsIntegration.js
// Quando a mensagem começa com "voz:" ou comando !tts, gera áudio via ElevenLabs (recomendado) ou outro TTS.
// Requires config.tts = { provider: "elevenlabs"|"openai"|"none", elevenLabsKey, openAiKey, voice: "alloy" }

const fs = require('fs');
const path = require('path');
const fetch = global.fetch; // Node 22+

const TMP = path.join(__dirname, '..', 'data', 'tts');
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

const config = require('../config');

async function elevenLabsTTS(text, voice = 'alloy') {
  // ElevenLabs API v1 example - user must provide key in config
  const key = config.tts?.elevenLabsKey || process.env.ELEVENLABS_KEY;
  if (!key) throw new Error('ElevenLabs key not configured');

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice}/stream`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  if (!resp.ok) throw new Error('ElevenLabs TTS failed: ' + resp.status);
  const buffer = Buffer.from(await resp.arrayBuffer());
  return buffer;
}

module.exports = {
  name: 'ttsIntegration',
  init() {
    this.provider = config.tts?.provider || 'none';
    this.voice = config.tts?.voice || 'alloy';
  },

  async onMessage({ sock, msg, text }) {
    try {
      if (!text) return;
      const jid = msg.key.remoteJid;

      // trigger: message starts with "voz:" OR command !tts
      const lower = text.trim();
      let payload = null;
      if (lower.toLowerCase().startsWith('voz:'))
        payload = lower.slice(4).trim();
      else if (lower.startsWith('!tts ')) payload = lower.slice(5).trim();

      if (!payload) return;

      // choose provider
      if (this.provider === 'elevenlabs') {
        try {
          const audioBuffer = await elevenLabsTTS(payload, this.voice);
          const tmpFile = path.join(TMP, `tts_${Date.now()}.mp3`);
          fs.writeFileSync(tmpFile, audioBuffer);
          const data = fs.readFileSync(tmpFile);
          await sock.sendMessage(jid, {
            audio: data,
            mimetype: 'audio/mpeg',
            ptt: false,
          });
          fs.unlinkSync(tmpFile);
        } catch (e) {
          console.error('elevenlabs tts error', e);
          await sock.sendMessage(jid, {
            text: '❌ Falha no TTS: ' + (e.message || e.toString()),
          });
        }
      } else if (this.provider === 'openai') {
        // Placeholder: OpenAI TTS flow (user must implement based on chosen model)
        await sock.sendMessage(jid, {
          text: 'TTS via OpenAI não configurado — configure config.tts.provider e chaves.',
        });
      } else {
        // fallback: no TTS — reply with instruction
        await sock.sendMessage(jid, {
          text: "TTS não configurado. Configure config.tts.provider = 'elevenlabs' e chave em config.js ou env.",
        });
      }
    } catch (e) {
      console.error('ttsIntegration error', e);
    }
  },
};
