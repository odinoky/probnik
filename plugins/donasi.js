let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Dana*_ : 
║│- 0821-4520-3493
║│
║│➸ _*Gopay*_ : 
║│- 0821-4520-3493
║│
║│➸ _*OWNER*_
║│- wa.me/6282145203493
║╰────────────
╰═══════════════
`.trim(), 'HUBUNGI OWNER SEBELUM BERDONASI!', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
