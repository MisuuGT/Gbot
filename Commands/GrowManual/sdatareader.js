const Discord = require("discord.js12");
let request = require('request');

module.exports = {
    name: "sdatareader",
    description: "Server Data Reader",
    usage: "<prefix>sdatareader",
    aliases: ["sdatareader"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        let ip = args[0];
            try {
                request.post(`http://${ip}/growtopia/server_data.php`, function(response, body) {
                     message.channel.send(`<:web:1049007253933539408> Searching for ${ip}`)
                     message.channel.send(`\`\`\`css\nSearching\n${response && response.statusCode}\n${body}\`\`\``)
                      })
                    } catch (err) {
                           return message.channel.send(err)
                         }
               }
     }