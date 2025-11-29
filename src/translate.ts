// commands/translate.js
const fetch = require('node-fetch');
module.exports = {
  name: 'translate',
  description: 'Traduz texto para outro idioma',
  run: async ({ sock, msg, args }) => {
    if (args.length < 2)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Use: !translate <lang> <texto>',
      });
    const lang = args[0];
    const text = args.slice(1).join(' ');
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|${lang}`,
      );
      const data = await res.json();
      const translated = data.responseData.translatedText;
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🌐 Tradução (${lang}): ${translated}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Falha ao traduzir… até Itachi ficaria irritado.',
      });
    }
  },
};
