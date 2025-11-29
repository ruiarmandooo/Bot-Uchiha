// commands/bot-news.js
const fetch = require('node-fetch');
module.exports = {
  name: 'bot-news',
  description: 'Últimas notícias (via API News)',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=YOUR_NEWSAPI_KEY',
      );
      const data = await res.json();
      if (!data.articles || !data.articles.length)
        return sock.sendMessage(msg.key.remoteJid, {
          text: '💀 Nenhuma notícia encontrada.',
        });
      const top = data.articles
        .slice(0, 3)
        .map((a) => `📰 ${a.title}\n🔗 ${a.url}`)
        .join('\n\n');
      await sock.sendMessage(msg.key.remoteJid, { text: top });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ Não consegui buscar notícias.',
      });
    }
  },
};
