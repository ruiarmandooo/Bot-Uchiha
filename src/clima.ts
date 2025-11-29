module.exports = {
  name: 'clima',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const cidade = args.join(' ');
    if (!cidade) return sock.sendMessage(jid, { text: 'Use: !clima <cidade>' });

    const apiKey = 'SUA_CHAVE_OPENWEATHER';
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt&units=metric`,
    );
    const data = await resp.json();
    if (data.cod !== 200)
      return sock.sendMessage(jid, { text: 'Cidade não encontrada.' });

    const texto = `🌤 Clima em ${data.name}:\nTemperatura: ${data.main.temp}°C\nDescrição: ${data.weather[0].description}`;
    await sock.sendMessage(jid, { text: texto });
  },
};
