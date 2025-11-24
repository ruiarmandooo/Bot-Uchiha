export async function menuHandler(sock, message) {
    const { BOT_NAME } = await import('./conf.js');

    const menuMessage = {
        text: `🔱↹ᗰᗴᑎᑌ-ᗷOT↹🔱\nEscolha uma categoria abaixo:`,
        footer: BOT_NAME,
        buttons: [
            { buttonId: 'economia', buttonText: { displayText: '💰 Economia' }, type: 1 },
            { buttonId: 'xp', buttonText: { displayText: '📈 XP' }, type: 1 },
            { buttonId: 'ai', buttonText: { displayText: '🤖 AI' }, type: 1 }
        ],
        headerType: 1
    };

    await sock.sendMessage(message.key.remoteJid, menuMessage);
}