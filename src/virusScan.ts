// virusScan.js
// Heurística simples: detecta documentos executáveis, tamanho e extensões suspeitas.
// Para escaneamento real, integre com ClamAV ou API de virus-scan.

module.exports = {
  name: 'virusScan',

  init() {
    this.maxFileBytes = 15 * 1024 * 1024; // 15 MB
    this.blockedExt = ['exe', 'bat', 'com', 'scr', 'js', 'jar'];
  },

  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];

      if (type !== 'documentMessage' && type !== 'stickerMessage') return;

      const doc = msg.message.documentMessage || msg.message.stickerMessage;
      const fileName = (doc.fileName || '').toLowerCase();
      const fileLen = doc.fileLength || doc.fileSize || 0;

      // block suspicious ext
      const ext = fileName.split('.').pop() || '';
      if (this.blockedExt.includes(ext)) {
        await sock.sendMessage(jid, {
          text: `⚠️ Arquivo com extensão bloqueada detectado: .${ext}`,
        });
        try {
          await sock.sendMessage(jid, { delete: msg.key });
        } catch (e) {
          /*ignore*/
        }
        return;
      }

      // size check
      if (fileLen > this.maxFileBytes) {
        await sock.sendMessage(jid, {
          text: `⚠️ Arquivo muito grande (${Math.round(fileLen / 1024 / 1024)}MB). Limite: ${Math.round(this.maxFileBytes / 1024 / 1024)}MB`,
        });
        try {
          await sock.sendMessage(jid, { delete: msg.key });
        } catch (e) {
          /*ignore*/
        }
      }
    } catch (e) {
      console.error('virusScan error', e);
    }
  },
};
