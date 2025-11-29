import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
} from '@deyvydofc/baileys';
import qrcode from 'qrcode-terminal';
import P from 'pino';
import http from 'http';
import { handleCommand } from './src/commands/index.js';
import { db } from './src/config/database.js';

// Função principal que inicializa e conecta o bot
async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

  const latest = await fetchLatestBaileysVersion();
  const version = Array.isArray(latest) ? latest : (latest?.version ?? latest);
  console.log(
    `🤖 Usando a versão do WhatsApp Web: ${Array.isArray(version) ? version.join('.') : JSON.stringify(version)}`,
  );

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: 'silent' }),
    version: Array.isArray(version) ? version : undefined,
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('\n--- 📱 Escaneie o QR Code abaixo ---');
      qrcode.generate(qr, { small: true });
      console.log('---------------------------------\n');
    }

    if (connection === 'close') {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut;
      console.log('❌ Conexão fechada. Tentando reconectar:', shouldReconnect);
      if (shouldReconnect) {
        setTimeout(() => connectToWhatsApp(), 5000);
      }
    } else if (connection === 'open') {
      console.log('✅ Conectado com sucesso ao WhatsApp Web!\n');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages || !messages.length) return;
    const m = messages[0];
    if (!m.key) return;
    if (m.key.remoteJid === 'status@broadcast' || m.key.fromMe) return;

    const messageText =
      m.message?.conversation || m.message?.extendedTextMessage?.text || '';
    const remoteJid = m.key.remoteJid;
    const userId = m.key.participant || remoteJid;

    // Garantir que o usuário existe no banco de dados
    db.getOrCreateUser(userId);

    console.log(
      `📨 [${new Date().toLocaleTimeString('pt-BR')}] Mensagem: ${messageText}`,
    );

    // Tratamento de comandos
    const commandHandled = await handleCommand(sock, m);
    if (commandHandled) return;

    // Tratamento de mensagens simples
    switch (messageText.toLowerCase().trim()) {
      case 'oi':
      case 'olá':
      case 'e aí':
      case 'oi bot':
        await sock.sendMessage(remoteJid, {
          text: '👁️ Olá! Bem-vindo ao poder Uchiha!\n\nDigite !ajuda para ver todos os comandos ou !menu para o menu interativo.',
        });
        break;
      case '!menu':
      case '!ajuda':
        await sendUchihaMenu(sock, remoteJid);
        break;
      case 'economia':
      case 'xp':
      case 'diversao':
      case 'info':
      case 'utilidades':
        // Adicione o conteúdo para esses casos ou remova-os
        console.log('Caso não implementado:', messageText);
        break;
      default:
        // Caso padrão opcional
        break;
    }
  });
}

// Inicia a conexão do bot
connectToWhatsApp().catch((err) => {
  console.error('❌ Erro ao conectar ao WhatsApp:', err);
});

// Servidor HTTP para ficar escutando a porta (útil no Render)
const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('✅ Uchiha Bot está rodando.\n');
  })
  .listen(port, () => {
    console.log(`🌐 Servidor HTTP rodando na porta ${port}\n`);
  });
