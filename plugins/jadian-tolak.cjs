/*//////////////////////////////////

Cretor : Hairul Lana
https://github.com/hairullana 

/*/ ///////////////////////////////*/

let handler = async (m, {
	conn,
	text
}) => {
	if (isNaN(text)) {
		var number = text.split`@` [1]
	} else if (!isNaN(text)) {
		var number = text
	}

	if (!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)

	if (isNaN(number)) return conn.reply(m.chat, `Nomor yang anda masukan salah!`, m)
	if (number.length > 15) return conn.reply(m.chat, `Format salah!`, m)
	try {
		if (text) {
			var user = number + '@s.whatsapp.net'
		} else if (m.quoted.sender) {
			var user = m.quoted.sender
		} else if (m.mentionedJid) {
			var user = number + '@s.whatsapp.net'
		}
	} catch (e) {} finally {
		const groupMetadata = (m.isGroup ? ((store.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
		const participants = (m.isGroup ? groupMetadata.participants : []) || []
		const users = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === user) : {}) || {}
		if (!users) return conn.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
		if (user === m.sender) return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
		if (user === conn.user.jid) return conn.reply(m.chat, `*Tidak bisa berpacaran dengan saya t_t`, m)

		if (db.data.users[user].pasangan != m.sender) {
			conn.reply(m.chat, `Maaf @${user.split('@')[0]} tidak sedang menembak anda`, m, {
				mentions: [user]
			})
		} else {
			db.data.users[user].pasangan = ""
			conn.reply(m.chat, `Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`, m, {
				mentions: [user]
			})
		}
	}
}
handler.help = ['tolak *@tag*']
handler.tags = ['jadian']
handler.command = /^(tolak)$/i
handler.group = true
module.exports = handler