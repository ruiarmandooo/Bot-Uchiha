// commands/abracar.js
module.exports = {
  name: 'abracar',
  description: 'Envia GIF de abraço',
  run: async ({ sock, msg }) => {
    const gifs = [
      'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
      'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
      'https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif',
    ];
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    await sock.sendMessage(msg.key.remoteJid, {
      video: { url: gif },
      mimetype: 'video/gif',
      caption: `🤗 Abraço virtual para @${msg.key.participant.split('@')[0]}… até o Madara ficaria emocionado.`,
    });
  },
};
