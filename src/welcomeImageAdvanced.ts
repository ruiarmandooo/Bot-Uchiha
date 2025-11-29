// welcomeImageAdvanced.js
const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');
const config = require('../config');

const TMP = path.join(__dirname, '..', 'data', 'welcome');
if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

module.exports = {
  name: 'welcomeImageAdvanced',
  init() {
    this.templatePath = config.welcome?.templatePath || null;
    this.fontPath = Jimp.FONT_SANS_32_WHITE;
  },

  bind({ sock }) {
    sock.ev.on('group-participants.update', async (update) => {
      try {
        const jid = update.id;
        if (!update.participants || update.action !== 'add') return;
        const user = update.participants[0];

        const background =
          this.templatePath && fs.existsSync(this.templatePath)
            ? await Jimp.read(this.templatePath)
            : new Jimp(1024, 512, '#0a0a0a');
        const font = await Jimp.loadFont(this.fontPath);

        let avatarBuf = null;
        try {
          const url = await sock.profilePictureUrl(user).catch(() => null);
          if (url) {
            const resp = await Jimp.read(url);
            resp.resize(200, 200);
            avatarBuf = resp;
          }
        } catch (e) {}

        background.print(font, 20, 20, `🔥 Bem-vindo(a) ao clã Uchiha!`);
        background.print(font, 20, 60, `@${user.split('@')[0]}`);
        if (avatarBuf) background.composite(avatarBuf, 800, 150);

        const outPath = path.join(TMP, `welcome_${Date.now()}.png`);
        await background.writeAsync(outPath);
        const data = fs.readFileSync(outPath);

        await sock.sendMessage(jid, {
          image: data,
          caption: `🔥 @${user.split('@')[0]}, você entrou no clã Uchiha. Prepare-se para observar e respeitar.`,
          mentions: [user],
        });
        fs.unlinkSync(outPath);
      } catch (e) {
        console.error('welcomeImageAdvanced error', e);
      }
    });
  },
};
