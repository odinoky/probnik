/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ УЧАСТНИК ${name} 💙*
*┃ Я ПОМОШНИК ГРУППЫ*
*┃ БОТ GIGABIT* 
*┃ НОМЕР МОЕГО ВЛАДЕЛЬЦА*
*┃ wa.me/996755994412*
*┃ ЕСЛИ ЕСТЬ ЖЕЛАНИЕ*
*┃ ЗА ДОНАТИТЬ*
*┃ ВЛАДЕЛЬЦУ БОТА* 
*┃ НА ДАЛЬНЕЙШЕЕ РАЗВИТЕ*
*┃ КООРДИНАТЫ КОШЕЛЬКА ВНИЗУ*
*┃ ➤ QIWI: https://qiwi.com/n/GLENN362*
*┃ ЗА РАНИЕ СПАСИБО ЗА ПОДДЕРЖКУ*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://qiwi.com/n/GLENN362', 'QIWI', null, null, [['/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
