// commands/covid19.js
const fetch = require('node-fetch');
module.exports = {
  name: 'covid19',
  description: 'Mostra estatísticas globais da COVID-19',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('https://disease.sh/v3/covid-19/all');
      const data = await res.json();
      const text = `🦠 COVID-19 Global:\nCasos: ${data.cases}\nMortes: ${data.deaths}\nRecuperados: ${data.recovered}`;
      await sock.sendMessage(msg.key.remoteJid, { text });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui pegar os dados globais… tente novamente.',
      });
    }
  },
};
