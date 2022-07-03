/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api

//Ubah Disini
global.ownerNumber = ['77072763560']
global.ownerName = '*ВАНИЛЬКА*'
global.packname = 'стикеры'
global.author = '*от ВАНИЛЬКИ*'
global.prefa = ['#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: '*Эта команда, для админов*',
botAdmin: '*Для этой команды, БОТ должен быть админом!*',
botOwner: '*Эта команда только для владельца БОТА*',
group: '*Эта команда для группы*',
private: '*Эта команда, для приватного чата*',
wait: '*Загружается...*',
done: '*Выполнено!*'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
