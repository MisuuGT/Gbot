module.exports = {
    name: "help",
    description: "Showing All Command",
    usage: "<prefix>help",
    aliases: ["menu"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        return message.channel.send(">>> ```\n**Need help? use gt! to use some commands!**\n\n**GENERAL INFO**\nhelp, ping\n\n**GROWMANUAL COMMANDS**\nitemsdat, coredata, osmfinder, hostmaker <ip>, sdatamaker <ip> <port>, sdatareader <ip>, gtpschecker <ip> <port>\n\n GrowManual Made By Misuu#1337\n```")
    }
}