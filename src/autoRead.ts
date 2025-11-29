// autoRead.js
// Marca como lida se possível — usa metodo readMessages se estiver disponível

module.exports = {
  name: 'autoRead',

  async onMessage({ sock, msg }) {
    try {
      // Baileys v6 may expose method to read message; try common ones
      if (typeof sock.readMessages === 'function') {
        try {
          await sock.readMessages([msg.key]);
        } catch (e) {
          /*ignore*/
        }
      } else if (typeof sock.sendReadReceipt === 'function') {
        try {
          await sock.sendReadReceipt(
            msg.key.remoteJid,
            msg.key.participant || msg.key.remoteJid,
            [msg.key.id],
          );
        } catch (e) {
          /*ignore*/
        }
      }
      // otherwise do nothing (best-effort)
    } catch (e) {
      console.error('autoRead error', e);
    }
  },
};
