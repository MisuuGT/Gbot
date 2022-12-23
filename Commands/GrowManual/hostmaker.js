const Discord = require('discord.js12');
const fs = require('fs')

module.exports = {
    name: "hostmaker",
    description: "Making Hostmaker",
    usage: "<prefix>hostmaker",
    aliases: ["host"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        const ip = args[0];
        if (!ip){
            return message.reply("gt!hostmaker <ip>")
        }
        fs.writeFileSync("./cache/host.txt", ip + " growtopia1.com\n" + ip + " growtopia2.com\n" + ip + " www.growtopia1.com\n" + ip + " www.growtopia2.com");
        return message.channel.send("Here you go", {
        files: ["./cache/host.txt"]
                     });
            }
  }