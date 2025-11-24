export async function submenuHandler(sock, message, category) {
    if (category === 'economia') {
        await sock.sendMessage(message.key.remoteJid, { text: '💰 Bem-vindo à Economia!' });
    } else if (category === 'xp') {
        await sock.sendMessage(message.key.remoteJid, { text: '📈 Aqui está seu XP!' });
    } else if (category === 'ai') {
        await sock.sendMessage(message.key.remoteJid, { text: '🤖 Pergunte algo à AI!' });
    }
}