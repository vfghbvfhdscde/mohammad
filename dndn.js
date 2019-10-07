const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome !");

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
https://discord.gg/ZaSbJYY
**`)
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
https://discord.gg/ZaSbJYY
**`)
}).catch(console.error)
})
client.login('"NTQ0MjcwMDM2ODc0MDM1MjEy.XZe22w.yHR7O72Zajkix_-3DzMkNT1rkIc"');
