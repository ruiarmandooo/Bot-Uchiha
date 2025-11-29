// commands/help.js
module.exports = {
  name: 'help',
  description: 'Mostra o menu visual de todos os comandos',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;

    const helpMessage = `
🤖 *𝐔𝐜𝐡𝐢𝐡𝐚 𝐁𝐨𝐭 — ᗰᗴᑎᑌ ᗷOT* 🔱
👁️ Poder do Sharingan ativo.

*📌 Categorias e Comandos:*

*😂 Memes / Piadas:*
• !piadas
• !piadas2
• !meme
• !gif
• !8ball
• !8ball2

*🎬 GIFs / Stickers / Abraços:*
• !abracar
• !abracar2
• !abracar-geral
• !slap
• !kill

*🧮 Utilitários:*
• !calcular
• !traduzir
• !clima2
• !timer
• !criar-lembrete
• !cara-coroa
• !roll

*💀 Fun / Mortal / Sarcástico:*
• !truth
• !truth2
• !desafiar
• !desafiar2
• !insultar
• !fact
• !fact2
• !love

*📝 Mensagens e Interações:*
• !repetir-msgs
• !misterio
• !motivar
• !bot-news
• !advice

📌 Para comandos interativos com botões: digite *!menu*
`;

    await sock.sendMessage(jid, { text: helpMessage });
  },
};
