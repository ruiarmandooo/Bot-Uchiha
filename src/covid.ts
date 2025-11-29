// commands/covid.js
const fetch = require('node-fetch');
module.exports = {
  name: 'covid',
  description: 'Informa estatísticas de COVID-19',
  run: async ({ sock, msg, args }) => {
    const country = args[0] || 'brazil';
    try {
      const res = await fetch(
        `https://disease.sh/v3/covid-19/countries/${country}`,
      );
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🦠 COVID-19 em ${data.country}:\nCasos: ${data.cases}\nMortes: ${data.deaths}\nRecuperados: ${data.recovered}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui pegar os dados… tente novamente.',
      });
    }
  },
};
