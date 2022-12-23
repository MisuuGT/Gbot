const Discord = require('discord.js12');
const fs = require('fs')

module.exports = {
    name: "sdatamaker",
    description: "Making Server_data.php",
    usage: "<prefix>sdatamaker",
    aliases: ["sdata"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        const ip = args[0];
        const port = args[1];
        if (!ip) {
            return message.reply("gt!sdatamaker 127.0.0.1 (<port> Default Port: 17091)")
        } else if (!port) {
            return message.reply("gt!sdatamaker 127.0.0.1 17091")
        }
        fs.writeFileSync("./cache/server_data.php", "server|" + ip + "\nport|" + port + "\ntype|1\n#maint|server under maintenance, Thank you for participant.\n\nbeta_server|" + ip + "\nbeta_port|" + port + "\nbeta_type|1\nmeta|localhost|RTENDMARKERBS1001");
        return message.channel.send("Here you go", {
        files: ["./cache/server_data.php"]
                     });
            }
  }