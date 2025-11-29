// commands/calcular.js
module.exports = {
  name: 'calcular',
  description: 'Calcula expressões matemáticas',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Me dê uma expressão para calcular, ninja preguiçoso.',
      });
    try {
      const expression = args.join(' ');
      const result = eval(expression);
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🧮 Resultado de "${expression}": ${result}`,
      });
    } catch (e) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Expressão inválida… até o Itachi ficaria desapontado.',
      });
    }
  },
};
