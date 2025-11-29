// 🔱 SUBMENUS TEMÁTICOS UCHIHA 🔱

export async function submenuHandler(sock, message, category) {
  const remoteJid = message.key.remoteJid;

  const submenus = {
    economia: `╔════════════════════════════════════╗
║    💰 ECONOMIA - SISTEMA UCHIHA    ║
╚════════════════════════════════════╝

🔹 Controle seu Dinheiro de Chakra 🔹

Comandos disponíveis:

🪙 !saldo
   └ Ver seu saldo atual

💸 !transferir @user valor
   └ Transferir moedas entre usuários

🎁 !diario
   └ Receber 500 moedas por dia

✨ Ganhe moedas completando desafios!
        `,

    xp: `╔════════════════════════════════════╗
║   📈 XP E RANKING - PODER UCHIHA   ║
╚════════════════════════════════════╝

⚡ Suba de Nível e Desbloqueie Poder ⚡

Comandos disponíveis:

📊 !xp
   └ Ver seu XP e nível atual

🏆 !ranking
   └ Top 5 usuários por XP

💎 !top-ricos
   └ Top 5 usuários mais ricos

💡 Ganhe 5 XP a cada mensagem!
   Suba de nível a cada 100 XP!
        `,

    diversao: `╔════════════════════════════════════╗
║   🎮 DIVERSÃO - LAZER UCHIHA       ║
╚════════════════════════════════════╝

🎲 Entretenha-se com Poder 🎲

Comandos disponíveis:

😂 !piada
   └ Escute uma piada aleatória

🎲 !dado
   └ Role um dado (1-6)

🪙 !moeda
   └ Jogue cara ou coroa

Divirta-se enquanto ganha XP!
        `,

    info: `╔════════════════════════════════════╗
║   ℹ️ INFORMAÇÕES - UCHIHA BOT      ║
╚════════════════════════════════════╝

🔱 Conheça o Bot 🔱

Comandos disponíveis:

📋 !info
   └ Informações gerais do bot

📚 !ajuda
   └ Lista completa de comandos

Desenvolvido com poder Uchiha!
        `,

    utilidades: `╔════════════════════════════════════╗
║   🛠️ UTILIDADES - FERRAMENTAS      ║
╚════════════════════════════════════╝

🔧 Ferramentas do Sistema 🔧

Comandos disponíveis:

🏓 !ping
   └ Testar conexão do bot

📱 !menu
   └ Mostrar menu principal

💬 Envie qualquer mensagem para:
   └ Ganhar 5 XP automaticamente!

Mantenha o bot funcionando!
        `,
  };

  const message_text =
    submenus[category] ||
    `❌ Categoria não encontrada!

Use !menu para voltar ao menu principal`;
  await sock.sendMessage(remoteJid, { text: message_text });
}
