module.exports = {
  name: 'resumir',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const texto = args.join(' ');
    if (!texto) return sock.sendMessage(jid, { text: 'Use: !resumir <texto>' });

    const apiKey = process.env.OPENAI_API_KEY;
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'user', content: `Resuma o seguinte texto: ${texto}` },
        ],
      }),
    });

    const data = await resp.json();
    const resumo =
      data.choices?.[0]?.message?.content || 'Não consegui resumir.';
    await sock.sendMessage(jid, { text: resumo });
  },
};
