import makeWASocket, { 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion // Importa a função de versão
} from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';
import P from 'pino'; // Importa o logger pino

// Função principal que inicializa e conecta o bot
async function connectToWhatsApp() {
    // Carrega o estado de autenticação (arquivos de sessão)
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    // Busca a versão mais recente compatível do Baileys para evitar o erro 405
    const { version } = await fetchLatestBaileysVersion();
    console.log(`Usando a versão do WhatsApp Web: ${version}.${version}.${version}`);

    // Cria uma nova instância do socket do WhatsApp
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false, // Desativa a impressão de texto padrão do QR code
        logger: P({ level: 'silent' }), // Mantém o console limpo
        version: version, // Fixa a versão compatível
    });

    // Event Listener: Ouve por atualizações na conexão
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        // Desenha o QR Code visualmente no terminal para escanear
        if (qr) {
            console.log('--- Escaneie o QR Code abaixo ---');
            qrcode.generate(qr, { small: true }); 
            console.log('---------------------------------');
        }

        if (connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexão fechada. Tentando reconectar:', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp(); // Chama a função novamente para reiniciar o processo
            }
        } else if (connection === 'open') {
            console.log('✅ Conectado com sucesso ao WhatsApp Web!');
        }
    });

    // Event Listener: Salva as credenciais sempre que elas forem atualizadas
    sock.ev.on('creds.update', saveCreds);

    // Event Listener: Ouve por novas mensagens e processa comandos
    sock.ev.on('messages.upsert', async ({ messages }) => {
        if (!messages.length) return;
        const m = messages[0]; // Pega a primeira mensagem
        if (m.key.remoteJid === 'status@broadcast' || m.key.fromMe) return; // Ignora status e suas próprias mensagens se quiser

        // Extrai o texto da mensagem
        const messageText = m.message?.conversation || m.message?.extendedTextMessage?.text || '';
        const remoteJid = m.key.remoteJid;

        // Lógica de comandos
        switch (messageText.toLowerCase().trim()) { // .trim() remove espaços extras
            case 'oi':
                await sock.sendMessage(remoteJid, { text: 'Olá! Estou online e processando comandos!' });
                break;
            case '!ping':
                await sock.sendMessage(remoteJid, { text: 'Pong! 🏓' });
                break;
            case '!menu':
                const menuMessage = "MENU-BOT\nEscolha uma categoria abaixo:\n\n!ping - Testar conexão";
                await sock.sendMessage(remoteJid, { text: menuMessage });
                break;
        }
    });
}

// Inicia a função de conexão
connectToWhatsApp();
