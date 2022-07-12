let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *PERMINGGU* : *Rp.5.000*
╠➥ *PERBULAN*  : *Rp.8.000*
╠➥ *PERMANENT* : *Rp.12.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Dana/Gopay/Qris All Pay
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Chat Owner
║
╠═〘 Sabo 〙 ═`.trim(), 'Sabo', 'Menu', '#menu', 'Owner', '#owner', m)
}

handler.command = /^sewabot$/i

module.exports = handler
