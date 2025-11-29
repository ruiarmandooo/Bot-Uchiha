const { Sticker } = require('wa-sticker-formatter');

async function imageToSticker(buffer) {
  const sticker = new Sticker(buffer, {
    pack: '𝐔𝐜𝐡𝐢𝐡𝐚𝐁𝐨𝐭',
    author: '𝐑ú𝐛𝐞𝐧 𝐒𝐢𝐥𝐯𝐞𝐫',
    type: 'full',
  });
  return await sticker.toBuffer();
}

module.exports = { imageToSticker };
