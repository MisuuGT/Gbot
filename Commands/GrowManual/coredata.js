
module.exports = {
    name: "coredata",
    description: "Sending CoreData.txt from Real Growtopia",
    usage: "<prefix>coredata",
    aliases: ["coredata"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        return message.reply("Here you go", {
            files: ["./cache/CoreData.txt"]
        })
    }
}