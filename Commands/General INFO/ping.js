module.exports = {
  name: "ping",
  description: "return bot ping",
  usage: "<prefix>ping",
  aliases: ["beep"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    message.channel.send(`<:emoji_42:1050423707794939974> Pong!`)
  }
 }
