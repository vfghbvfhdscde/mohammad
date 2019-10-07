const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome !");

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
عند خروج العضو من السيرفر
**`)
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
عند دخول عضو على السيرفر
**`)
}).catch(console.error)
})
client.login('توكن حساب النشر');
