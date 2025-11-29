// commands/gif.js
const fetch = require('node-fetch');
module.exports = {
  name: 'gif',
  description: 'Envia um GIF animado',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Preciso de um tema para buscar o GIF… até o Madara não aprovaria isso.',
      });
    const query = encodeURIComponent(args.join(' '));
    const url = `https://api.tenor.com/v1/search?q=${query}&key=LIVDSRZULELA&limit=1`;
    const res = await fetch(url).then((r) => r.json());
    if (!res.results || !res.results.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Nenhum GIF encontrado… tente novamente.',
      });
    const gifUrl = res.results[0].media[0].gif.url;
    await sock.sendMessage(msg.key.remoteJid, {
      video: { url: gifUrl },
      mimetype: 'video/gif',
    });
  },
};
