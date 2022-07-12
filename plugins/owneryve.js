let handler = function (m) {
	this.sendContact(m.chat, '628815952469', 'Owner Sabo Botz :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
