let handler = async (m, { conn, usedPrefix }) => {
    var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
    var document = doc[Math.floor(Math.random() * doc.length)]    
    let texto1 = `*https://natribu.org/media/na.mp3*`
    let buttonMessage= {
    'document': { url: `https://natribu.org/media/na.mp3` },
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
    'forwardingScore': 200,
    'isForwarded': true,
    'externalAdReply': {
    'mediaUrl': 'https://natribu.org/media/na.mp3',
    'mediaType': 2,
    'previewType': 'pdf',
    'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
    'body': wm,
    'thumbnail': imagen1,
    'sourceUrl': 'https://natribu.org/media/na.mp3' }},
    'caption': texto1,
    'footer': wm,
    'buttons':[
    {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6 }
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
    handler.command = ['sc','script']
    export default handler
    